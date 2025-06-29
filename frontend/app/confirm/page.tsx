'use client';
import { useState } from 'react';
import axios from 'axios';

export default function ConfirmRide() {
    const [rideId, setRideId] = useState('');

    const handleConfirm = async () => {
        const wallet = localStorage.getItem('wallet');
        const res = await axios.post('http://localhost:8000/api/confirm-ride', {
            rideId,
            confirmedBy: wallet
        });
        alert(`Ride status: ${res.data.status}`);
    };

    return (
        <div className="p-4">
            <input placeholder="Ride ID" value={rideId} onChange={e => setRideId(e.target.value)} />
            <button onClick={handleConfirm} className="mt-2 bg-blue-600 text-white px-4 py-2">Confirm Ride</button>
        </div>
    );
}
