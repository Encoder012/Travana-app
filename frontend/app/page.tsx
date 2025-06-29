"use client"

import { useState } from "react"
import Link from "next/link"
import { Car, Users, Key, Shield, CuboidIcon as Cube, Sparkles, Star, MapPin, Wallet, Bike } from "lucide-react"
import { AptosWalletAdapterProvider, NetworkName } from "@aptos-labs/wallet-adapter-react";
import { Network } from "@aptos-labs/ts-sdk";


import { PetraWallet } from "petra-plugin-wallet-adapter"; // Petra plugin
import { ConnectWallet } from '../controllers/wallet.controller'

const wallets = [new PetraWallet()];

const rideOptions = [
  { id: "1", name: "Standard", icon: Car, description: "Affordable rides", time: "3 min", price: "$10", seats: 4 },
  { id: "2", name: "Comfort", icon: Users, description: "More space", time: "3 min", price: "$15", seats: 4 },
  { id: "3", name: "Luxury", icon: Key, description: "Premium cars", time: "5 min", price: "$25", seats: 4 },
]

const nearbyLocations = [
  { id: "1", name: "Central Mall", type: "Shopping", distance: "0.5 km", icon: "🏬" },
  { id: "2", name: "Metro Station", type: "Transport", distance: "0.3 km", icon: "🚇" },
  { id: "3", name: "City Park", type: "Recreation", distance: "0.8 km", icon: "🌳" },
  { id: "4", name: "Coffee House", type: "Cafe", distance: "0.2 km", icon: "☕" },
  { id: "5", name: "Tech Museum", type: "Monument", distance: "1.2 km", icon: "🏛️" },
  { id: "6", name: "Food Festival", type: "Event", distance: "2.1 km", icon: "🍽️" },
]

export default function HomePage() {
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const handleWalletConnect = () => {
    console.log("Connect wallet")
  }

  return (
    <AptosWalletAdapterProvider
      autoConnect={false}
      dappConfig={{ network: Network.TESTNET }}
      optInWallets={["Petra"]} // explicitly include Petra
      onError={(err) => console.error("Wallet Adapter Error:", err)}
    >
      <div className="pt-20 md:pt-24 min-h-screen gradient-dark">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full ml-1"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full ml-1"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full ml-1"></div>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Where do you
              <br />
              want to go?
            </h1>

            {/* <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <img src="/placeholder.svg?height=40&width=40" alt="Driver" className="w-10 h-10 rounded-full" />
                <div className="text-left">
                  <p className="text-white font-medium">UcokBehel</p>
                  <p className="text-gray-400 text-sm">Honda CRV</p>
                </div>
              </div>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-lime-400 fill-current" />
                ))}
              </div>
            </div> */}

            {/* connect wallet button */}
            <ConnectWallet />

          </div>
          {/* Location Inputs */}
          <div className="max-w-md mx-auto mb-12">
            <div className="glass-card p-6">
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lime-400" size={20} />
                  <input
                    type="text"
                    placeholder="Add a pick-up location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="input-field w-full pl-12"
                  />
                </div>

                <div className="flex justify-center">
                  <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                  </button>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Add your destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="input-field w-full pl-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Type Selection */}
          {/* <div className="max-w-md mx-auto mb-12">
            <div className="flex space-x-4 mb-6">
              <button className="primary-button px-6 py-3 flex items-center space-x-2">
                <Car size={20} />
                <span>CAB</span>
              </button>
              <button className="secondary-button px-6 py-3 flex items-center space-x-2">
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
                <span>Package</span>
              </button>
            </div> */}

          <div className="max-w-md mx-auto mb-12">
            <div className="flex justify-between space-x-4 mb-6">
              <button className="primary-button w-full px-6 py-3 flex items-center justify-center space-x-2">
                <Car size={20} />
                <span>Cab</span>
              </button>
              <button className="primary-button w-full px-6 py-3 flex items-center justify-center space-x-2">
                <Bike size={20} />
                <span>Bike</span>
              </button>
              {/* <button className="secondary-button w-full px-6 py-3 flex items-center justify-center space-x-2">
                <Package size={20} />
                <span>Package</span>
              </button> */}
            </div>
          </div>

          {/* Ride Options */}
          <div className="grid grid-cols-3 gap-3">
            {rideOptions.map((option) => {
              const Icon = option.icon
              return (
                <Link
                  key={option.id}
                  href={`/ride-booking?type=${option.name}`}
                  className="dark-card dark-card-hover p-4 text-center"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-lime-400" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{option.name}</h3>
                  <p className="text-gray-400 text-xs mb-2">{option.time}</p>
                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                    <Users size={12} />
                    <span>{option.seats}</span>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                      <Car size={16} className="text-gray-900" />
                    </div>
                    <span className="text-white font-bold ml-2">{option.price}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent History */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Rides</h2>
            <Link href="/history" className="text-lime-400 hover:text-lime-300 font-medium">
              See all
            </Link>
          </div>
          <div className="dark-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center">
                  <Car className="text-lime-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Central Mall</h3>
                  <p className="text-gray-400 text-sm">2 hours ago • ₹120</p>
                </div>
              </div>
              <div className="status-badge bg-lime-400/20 text-lime-400">NFT</div>
            </div>
          </div>
        </div>

        {/* Nearby Locations */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Nearby Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyLocations.map((location) => (
              <div key={location.id} className="dark-card dark-card-hover p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{location.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{location.name}</h3>
                    <p className="text-gray-400 text-sm">{location.type}</p>
                    <p className="text-lime-400 text-sm font-medium">{location.distance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Tech Section */}
        <div className="max-w-4xl mx-auto">
          <Link href="/about" className="block">
            <div className="glass-card p-8 dark-card-hover">
              <div className="text-center">
                <Shield className="mx-auto text-lime-400 mb-6" size={48} />
                <h2 className="text-3xl font-bold text-white mb-4">Privacy-First Technology</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Learn how Travana uses blockchain, AI, and geohashing to protect your privacy
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                    <Shield className="text-lime-400" size={16} />
                    <span className="text-white text-sm font-medium">Fuzzy Geolocation</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                    <Cube className="text-lime-400" size={16} />
                    <span className="text-white text-sm font-medium">Aptos Blockchain</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                    <Sparkles className="text-lime-400" size={16} />
                    <span className="text-white text-sm font-medium">AI Clustering</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* </div > */}
    </AptosWalletAdapterProvider >
  )
}
