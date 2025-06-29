const mongoose = require('mongoose');
const RideSchema = new mongoose.Schema({
    riderWallet: String,
    driverWallet: String,
    pickupZone: String,
    destinationZone: String,
    pickupGeohash: String,
    destinationGeohash: String,
    status: { type: String, default: 'requested' },
    fare: Number,
    timestamp: Date,
    confirmedBy: [String]
});
module.exports = mongoose.model('Ride', RideSchema);