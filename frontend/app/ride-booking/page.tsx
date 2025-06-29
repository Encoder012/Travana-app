// frontend/app/ride/page.tsx
"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import ngeohash from "ngeohash";
import {
  Shield,
  Car,
  Users,
  Zap,
  Wallet,
  CheckCircle,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const rideOptions = [
  { id: "1", type: "Standard", estimatedTime: "3 min", price: "$10", description: "Affordable rides", icon: Car, seats: 4 },
  { id: "2", type: "Comfort", estimatedTime: "3 min", price: "$15", description: "More space", icon: Users, seats: 4 },
  { id: "3", type: "Luxury", estimatedTime: "5 min", price: "$25", description: "Premium experience", icon: Zap, seats: 4 }
];

export default function RideBookingPage() {
  const searchParams = useSearchParams();
  const rideType = searchParams.get("type");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedOption, setSelectedOption] = useState("1");
  const [rideInfo, setRideInfo] = useState<{ rideId: string; driver: { wallet: string; estimatedFare: number } } | null>(null);

  const geocodeLocation = async (place: string) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`);
    const data = await res.json();
    if (!data[0]) throw new Error(`Location not found: ${place}`);
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon)
    };
  };

  const handleBookRide = async () => {
    try {
      const pickupCoords = await geocodeLocation(pickup);
      const dropCoords = await geocodeLocation(destination);

      const pickupZone = ngeohash.encode(pickupCoords.lat, pickupCoords.lng);
      const destinationZone = ngeohash.encode(dropCoords.lat, dropCoords.lng);

      const wallet = localStorage.getItem("wallet") || "0xriderwallet";

      const res = await axios.post("http://localhost:5000/api/ride-request", {
        wallet,
        pickupZone,
        destinationZone,
        preferences: { carType: rideOptions.find(r => r.id === selectedOption)?.type || "Standard" }
      });

      setRideInfo(res.data);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      alert("Error requesting ride: " + message);
    }
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen gradient-dark">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Location Inputs */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center space-y-2 pt-4">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-0.5 h-12 bg-gray-600"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Add a pick-up location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="input-field w-full"
                />
              </div>
              <div className="flex justify-center">
                <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Add your destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="input-field w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ride Options */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Choose your ride</h2>
          <div className="space-y-3">
            {rideOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedOption === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 ${isSelected
                      ? "bg-lime-400/10 border-lime-400/50"
                      : "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/50"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center">
                        <Icon className="text-lime-400" size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold">{option.type}</h3>
                        <p className="text-gray-400 text-sm">{option.description}</p>
                        <p className="text-gray-500 text-xs">{option.estimatedTime}</p>
                      </div>
                    </div>
                    <div className="text-right flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Users size={16} />
                        <span className="text-sm">{option.seats}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{option.price}</div>
                      {isSelected && <CheckCircle className="text-lime-400" size={20} />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Book Ride Button */}
        <button
          onClick={handleBookRide}
          className="w-full primary-button py-4 text-lg font-semibold flex items-center justify-center space-x-3"
        >
          <span>Book Travana Ride</span>
          <ArrowRight size={20} />
        </button>

        {rideInfo && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Driver Matched</h2>
            <p><strong>Ride ID:</strong> {rideInfo.rideId}</p>
            <p><strong>Driver Wallet:</strong> {rideInfo.driver.wallet}</p>
            <p><strong>Fare:</strong> {rideInfo.driver.estimatedFare} APT</p>
          </div>
        )}
      </div>
    </div>
  );
}
