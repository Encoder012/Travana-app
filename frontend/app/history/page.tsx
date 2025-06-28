"use client"

import { useState } from "react"
import { MapPin, Star, Diamond } from "lucide-react"

interface RideHistory {
  id: string
  destination: string
  date: string
  time: string
  amount: string
  type: string
  status: "completed" | "cancelled"
  nftId?: string
  rating: number
}

const rideHistory: RideHistory[] = [
  {
    id: "1",
    destination: "Central Mall",
    date: "Today",
    time: "2:30 PM",
    amount: "₹120",
    type: "Standard",
    status: "completed",
    nftId: "TRV-001",
    rating: 5,
  },
  {
    id: "2",
    destination: "Tech Park",
    date: "Yesterday",
    time: "9:15 AM",
    amount: "₹85",
    type: "Comfort",
    status: "completed",
    nftId: "TRV-002",
    rating: 4,
  },
  {
    id: "3",
    destination: "Airport",
    date: "Dec 18",
    time: "6:45 AM",
    amount: "₹350",
    type: "Luxury",
    status: "completed",
    nftId: "TRV-003",
    rating: 5,
  },
  {
    id: "4",
    destination: "City Center",
    date: "Dec 17",
    time: "8:20 PM",
    amount: "₹95",
    type: "Standard",
    status: "cancelled",
    rating: 0,
  },
  {
    id: "5",
    destination: "University",
    date: "Dec 16",
    time: "11:30 AM",
    amount: "₹65",
    type: "Comfort",
    status: "completed",
    nftId: "TRV-004",
    rating: 4,
  },
]

export default function HistoryPage() {
  const [selectedTab, setSelectedTab] = useState<"all" | "completed" | "cancelled">("all")

  const filteredHistory = rideHistory.filter((ride) => {
    if (selectedTab === "all") return true
    return ride.status === selectedTab
  })

  const totalRides = rideHistory.filter((r) => r.status === "completed").length
  const totalSpent = rideHistory
    .filter((r) => r.status === "completed")
    .reduce((sum, r) => sum + Number.parseInt(r.amount.replace("₹", "")), 0)
  const nftCount = rideHistory.filter((r) => r.nftId).length

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < rating ? "text-lime-400 fill-current" : "text-gray-600"} />
    ))
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen gradient-dark">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ride History</h1>
          <p className="text-xl text-gray-300">Your journey with Travana</p>
        </div>

        {/* Stats Section */}
        <div className="mb-12">
          <div className="glass-card p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">{totalRides}</div>
                <div className="text-gray-300">Total Rides</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">₹{totalSpent}</div>
                <div className="text-gray-300">Total Spent</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">{nftCount}</div>
                <div className="text-gray-300">NFTs Collected</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex space-x-2 bg-gray-800/50 p-2 rounded-2xl inline-flex">
            {(["all", "completed", "cancelled"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${
                  selectedTab === tab ? "bg-lime-400 text-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Ride History List */}
        <div className="space-y-4 mb-16">
          {filteredHistory.map((ride) => (
            <div key={ride.id} className="dark-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-lime-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{ride.destination}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{ride.amount}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="status-badge bg-lime-400/20 text-lime-400 mb-2">{ride.type}</div>
                  <div className="text-gray-400">
                    {ride.date} • {ride.time}
                  </div>
                </div>
                <div>
                  <span
                    className={`status-badge ${
                      ride.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {ride.status === "completed" ? "Completed" : "Cancelled"}
                  </span>
                </div>
              </div>

              {ride.status === "completed" && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-300">Rating:</span>
                    <div className="flex space-x-1">{renderStars(ride.rating)}</div>
                  </div>
                  {ride.nftId && (
                    <div className="flex items-center space-x-2 status-badge bg-purple-500/20 text-purple-400">
                      <Diamond size={14} />
                      <span>NFT: {ride.nftId}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* NFT Collection */}
        <div className="glass-card p-8 text-center">
          <Diamond className="mx-auto text-lime-400 mb-6" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">Ride NFTs</h2>
          <p className="text-xl text-gray-300 mb-8">You've collected {nftCount} unique ride NFTs</p>
          <button className="primary-button px-8 py-4 flex items-center space-x-3 mx-auto">
            <span>View Collection</span>
            <Diamond size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
