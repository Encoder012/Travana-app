"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Shield, Car, Users, Zap, Wallet, CheckCircle, ArrowRight, MessageCircle } from "lucide-react"

const rideOptions = [
  {
    id: "1",
    type: "Standard",
    estimatedTime: "3 min",
    price: "$10",
    description: "Affordable rides",
    icon: Car,
    seats: 4,
  },
  {
    id: "2",
    type: "Comfort",
    estimatedTime: "3 min",
    price: "$15",
    description: "More space",
    icon: Users,
    seats: 4,
  },
  {
    id: "3",
    type: "Luxury",
    estimatedTime: "5 min",
    price: "$25",
    description: "Premium experience",
    icon: Zap,
    seats: 4,
  },
]

export default function RideBookingPage() {
  const searchParams = useSearchParams()
  const rideType = searchParams.get("type")

  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [selectedOption, setSelectedOption] = useState("1")

  const handleBookRide = () => {
    console.log("Booking ride:", { pickup, destination, selectedOption })
  }

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

        {/* Driver Info */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=48&width=48" alt="Driver" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-white font-semibold">The driver will arrive in</h3>
                <p className="text-gray-400">UcokBehel • Honda CRV</p>
              </div>
            </div>
            <div className="status-badge bg-lime-400/20 text-lime-400">3 min</div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="flex items-center space-x-3 bg-lime-400/10 border border-lime-400/20 rounded-2xl p-4 mb-8">
          <Shield className="text-lime-400" size={20} />
          <p className="text-lime-400 text-sm">Your exact location is protected with fuzzy geolocation</p>
        </div>

        {/* Ride Options */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Choose your ride</h2>
          <div className="space-y-3">
            {rideOptions.map((option) => {
              const Icon = option.icon
              const isSelected = selectedOption === option.id
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected
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
              )
            })}
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=48&width=48" alt="Driver" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-white font-semibold">UcokBehel</h3>
                <p className="text-gray-400">Honda CRV</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="status-badge bg-gray-700 text-white">AB6299ZG</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-lime-400">★</span>
                    <span className="text-white text-sm">4.9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-700 rounded-xl mb-2 flex items-center justify-center">
                <Car className="text-gray-400" size={32} />
              </div>
              <div className="text-xs text-gray-400">
                <div>4 Seat</div>
                <div>482 Trip</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">98% user safety rating</div>
              <div className="w-16 h-2 bg-gray-700 rounded-full">
                <div className="w-15 h-2 bg-lime-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Payment</h2>
          <div className="dark-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center">
                  <Wallet className="text-lime-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Crypto Wallet</h3>
                  <p className="text-gray-400 text-sm">Smart contract escrow</p>
                </div>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="glass-card p-6 mb-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-lime-400/20 rounded-2xl flex items-center justify-center">
                <Shield size={20} className="text-lime-400" />
              </div>
              <span className="text-white text-sm font-medium">Privacy Protected</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-lime-400/20 rounded-2xl flex items-center justify-center">
                <div className="w-5 h-5 bg-lime-400 rounded"></div>
              </div>
              <span className="text-white text-sm font-medium">Blockchain Secured</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-lime-400/20 rounded-2xl flex items-center justify-center">
                <div className="w-5 h-5 bg-lime-400 rounded-full"></div>
              </div>
              <span className="text-white text-sm font-medium">NFT Receipt</span>
            </div>
          </div>
        </div>

        {/* Chat with Driver */}
        <div className="mb-8">
          <button className="w-full dark-card dark-card-hover p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-gray-900" />
              </div>
              <span className="text-white font-medium">Chat with driver</span>
            </div>
            <ArrowRight className="text-gray-400" size={20} />
          </button>
        </div>

        {/* Book Ride Button */}
        <button
          onClick={handleBookRide}
          className="w-full primary-button py-4 text-lg font-semibold flex items-center justify-center space-x-3"
        >
          <span>Book Travana Ride</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}
