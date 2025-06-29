'use client';
import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import SimplePeer, { Instance, SignalData } from 'simple-peer';

interface SignalPayload {
    to: string;
    data: SignalData;
}

export default function WebRTC({ roomId }: { roomId: string }) {
    const socketRef = useRef<Socket | null>(null);
    const peerRef = useRef<Instance | null>(null);

    useEffect(() => {
        socketRef.current = io('http://localhost:8000');

        socketRef.current.emit('join', roomId);

        peerRef.current = new SimplePeer({ initiator: true, trickle: false });

        peerRef.current.on('signal', (data: SignalData) => {
            socketRef.current?.emit('signal', { to: roomId, data });
        });

        socketRef.current.on('signal', ({ data }: { data: SignalData }) => {
            peerRef.current?.signal(data);
        });

        peerRef.current.on('connect', () => {
            navigator.geolocation.getCurrentPosition(pos => {
                peerRef.current?.send(JSON.stringify({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                }));
            });
        });

        peerRef.current.on('data', (data: Uint8Array) => {
            const location = JSON.parse(data.toString());
            console.log('Received GPS:', location);
        });
    }, [roomId]);

    return <p className="text-sm">WebRTC P2P GPS sharing enabled</p>;
}
