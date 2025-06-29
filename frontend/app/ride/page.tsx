// frontend/app/ride/page.tsx
'use client';
import { useState } from 'react';
import axios from 'axios';
import ngeohash from 'ngeohash';

export default function RideBookingPage() {
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [carType, setCarType] = useState('EV');
    const [rideInfo, setRideInfo] = useState<{ rideId: string; driver: { wallet: string; estimatedFare: number } } | null>(null);

    const geocodeLocation = async (place: string) => {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`
        );
        const data = await res.json();
        if (!data[0]) throw new Error(`Location not found: ${place}`);
        return {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon)
        };
    };

    const handleRequest = async () => {
        try {
            const pickupCoords = await geocodeLocation(pickup);
            const dropCoords = await geocodeLocation(drop);

            const pickupZone = ngeohash.encode(pickupCoords.lat, pickupCoords.lng, 5);
            const destinationZone = ngeohash.encode(dropCoords.lat, dropCoords.lng, 5);

            const wallet = localStorage.getItem('wallet') || '0xriderwallet';

            const res = await axios.post('http://localhost:8000/api/ride-request', {
                wallet,
                pickupZone,
                destinationZone,
                preferences: { carType }
            });

            setRideInfo(res.data);
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            alert('Error requesting ride: ' + message);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Book a Ride</h1>
            <input
                className="w-full p-2 border mb-3"
                placeholder="Enter Pickup Location (e.g. Connaught Place)"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
            />
            <input
                className="w-full p-2 border mb-3"
                placeholder="Enter Drop Location (e.g. Red Fort)"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
            />
            <select
                className="w-full p-2 border mb-3"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
            >
                <option value="EV">EV</option>
                <option value="Bike">Bike</option>
                <option value="Sedan">Sedan</option>
            </select>
            <button
                onClick={handleRequest}
                className="w-full bg-green-600 text-white p-3 rounded"
            >
                Request Ride
            </button>

            {rideInfo && (
                <div className="mt-4 p-4 bg-gray-100 border">
                    <h2 className="font-semibold">Driver Matched</h2>
                    <p><strong>Ride ID:</strong> {rideInfo.rideId}</p>
                    <p><strong>Driver Wallet:</strong> {rideInfo.driver.wallet}</p>
                    <p><strong>Fare:</strong> {rideInfo.driver.estimatedFare} APT</p>
                </div>
            )}
        </div>
    );
}
