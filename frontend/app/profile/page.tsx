"use client"

import { User, Settings, Wallet, Diamond, Shield, HelpCircle, Info, LogOut, ChevronRight } from "lucide-react"

const menuItems = [
  { icon: User, label: "Edit Profile", href: "/profile/edit" },
  { icon: Wallet, label: "Wallet Settings", href: "/profile/wallet" },
  { icon: Diamond, label: "NFT Collection", href: "/profile/nfts" },
  { icon: Shield, label: "Privacy Settings", href: "/profile/privacy" },
  { icon: HelpCircle, label: "Help & Support", href: "/support" },
  { icon: Info, label: "About Travana", href: "/about" },
]

export default function ProfilePage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen gradient-dark">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-white">Profile</h1>
          <button className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Settings size={24} className="text-white" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="mb-12">
          <div className="glass-card p-8 text-center">
            <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <User size={40} className="text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Travana User</h2>
            <p className="text-gray-300 mb-6">user@travana.app</p>
            <div className="flex items-center justify-center space-x-2 status-badge bg-lime-400/20 text-lime-400">
              <Wallet size={16} />
              <span>Wallet Connected</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="dark-card p-6 text-center">
            <div className="w-12 h-12 bg-lime-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="text-lime-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white mb-2">12</div>
            <div className="text-gray-400">Rides</div>
          </div>
          <div className="dark-card p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Diamond className="text-purple-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white mb-2">8</div>
            <div className="text-gray-400">NFTs</div>
          </div>
          <div className="dark-card p-6 text-center">
            <div className="w-12 h-12 bg-lime-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-lime-400 font-bold text-xl">T</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">250</div>
            <div className="text-gray-400">TRAV</div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="dark-card overflow-hidden mb-12">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.href}
                className={`w-full flex items-center justify-between p-6 hover:bg-gray-700/30 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-gray-700/50" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center">
                    <Icon className="text-lime-400" size={20} />
                  </div>
                  <span className="text-white font-medium">{item.label}</span>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </button>
            )
          })}
        </div>

        {/* Logout */}
        <button className="w-full dark-card p-6 hover:bg-red-500/10 hover:border-red-500/30 transition-colors flex items-center justify-center space-x-3 text-red-400">
          <LogOut size={20} />
          <span className="font-semibold">Sign Out</span>
        </button>
      </div>
    </div>
  )
}
