"use client"

import { Calendar, Gift, Diamond, Music, Leaf, Clock, Users, ArrowRight, Share2 } from "lucide-react"

const promotions = [
  {
    id: "1",
    title: "Tech Conference 2024",
    description: "Special rides to the biggest tech event of the year",
    discount: "30% OFF",
    validUntil: "Dec 25, 2024",
    type: "event",
    icon: Calendar,
  },
  {
    id: "2",
    title: "First Ride Free",
    description: "Welcome to Travana! Your first ride is on us",
    discount: "100% OFF",
    validUntil: "Limited time",
    type: "discount",
    icon: Gift,
  },
  {
    id: "3",
    title: "NFT Rewards Launch",
    description: "Collect unique ride NFTs and earn exclusive rewards",
    discount: "NEW",
    validUntil: "Ongoing",
    type: "feature",
    icon: Diamond,
  },
  {
    id: "4",
    title: "Weekend Pool Party",
    description: "Shared rides to the hottest weekend events",
    discount: "25% OFF",
    validUntil: "Every Weekend",
    type: "event",
    icon: Music,
  },
  {
    id: "5",
    title: "Green Rides Initiative",
    description: "Choose eco-friendly options and save the planet",
    discount: "15% OFF",
    validUntil: "Permanent",
    type: "discount",
    icon: Leaf,
  },
]

const featuredEvents = [
  {
    id: "1",
    name: "Blockchain Summit",
    location: "Convention Center",
    date: "Dec 20-22",
    attendees: "5K+",
  },
  {
    id: "2",
    name: "Food Festival",
    location: "City Park",
    date: "Dec 18-19",
    attendees: "10K+",
  },
  {
    id: "3",
    name: "Art Exhibition",
    location: "Modern Gallery",
    date: "Dec 15-30",
    attendees: "2K+",
  },
]

export default function PromotionsPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen gradient-dark">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Promotions</h1>
          <p className="text-xl text-gray-300">Exclusive offers & events</p>
        </div>

        {/* Featured Promotion */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured</h2>
          <div className="glass-card p-8 dark-card-hover">
            <div className="max-w-2xl">
              <div className="status-badge bg-red-500/20 text-red-400 mb-6 inline-block">LIMITED TIME</div>
              <h3 className="text-3xl font-bold text-white mb-4">Holiday Special</h3>
              <p className="text-xl text-gray-300 mb-8">Get 50% off on all rides during the holiday season</p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock size={20} />
                  <span>Ends Dec 31</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users size={20} />
                  <span>1.2K used</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Promotions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">All Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promotions.map((promotion) => {
              const Icon = promotion.icon
              return (
                <div key={promotion.id} className="dark-card dark-card-hover p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-lime-400/20 rounded-2xl flex items-center justify-center">
                      <Icon size={24} className="text-lime-400" />
                    </div>
                    <div className="status-badge bg-lime-400/20 text-lime-400">{promotion.discount}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{promotion.title}</h3>
                  <p className="text-gray-300 mb-6">{promotion.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Valid until {promotion.validUntil}</span>
                    <ArrowRight size={16} className="text-gray-400" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Trending Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div key={event.id} className="dark-card dark-card-hover overflow-hidden">
                <div className="h-32 bg-gray-700/50 flex items-center justify-center">
                  <Calendar className="text-lime-400" size={48} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-white mb-4">{event.name}</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} />
                      <span className="text-lime-400 font-medium">{event.attendees} attending</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Program */}
        <div className="glass-card p-8 text-center">
          <Share2 className="mx-auto text-lime-400 mb-6" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">Refer & Earn</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Invite friends and earn 100 TRAV tokens for each successful referral
          </p>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">0</div>
              <div className="text-gray-400">Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">0</div>
              <div className="text-gray-400">TRAV Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
