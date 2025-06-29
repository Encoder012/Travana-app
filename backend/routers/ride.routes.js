const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');
const { findDriver, lockFunds, releaseFunds, mintNFT, encodeLocationToGeohash } = require('../utils/blockchain');

router.post('/ride-request', async (req, res) => {
    const { wallet, pickupCoords, destinationCoords, preferences } = req.body;
    const pickupZone = encodeLocationToGeohash(pickupCoords.lat, pickupCoords.lng);
    const destinationZone = encodeLocationToGeohash(destinationCoords.lat, destinationCoords.lng);

    const driver = await findDriver(pickupZone, preferences);
    if (!driver) return res.status(404).json({ error: 'No drivers available' });

    const newRide = await Ride.create({
        riderWallet: wallet,
        driverWallet: driver.wallet,
        pickupZone,
        destinationZone,
        pickupGeohash: pickupZone,
        destinationGeohash: destinationZone,
        timestamp: new Date(),
        fare: driver.estimatedFare
    });

    await lockFunds(wallet, driver.estimatedFare, newRide._id);
    res.json({ rideId: newRide._id, driver });
});

router.post('/confirm-ride', async (req, res) => {
    const { rideId, confirmedBy } = req.body;
    const ride = await Ride.findById(rideId);
    if (!ride.confirmedBy.includes(confirmedBy)) {
        ride.confirmedBy.push(confirmedBy);
        await ride.save();
    }
    if (ride.confirmedBy.length === 2) {
        await releaseFunds(rideId);
        await mintNFT(ride);
        ride.status = 'completed';
        await ride.save();
    }
    res.json({ status: ride.status });
});

module.exports = router;