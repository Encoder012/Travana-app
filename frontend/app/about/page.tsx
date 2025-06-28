"use client"

import { Shield, MapPin, CuboidIcon as Cube, Sparkles, Diamond, GitBranch, Trophy, ArrowRight } from "lucide-react"

const techFeatures = [
  {
    id: "1",
    title: "Fuzzy Geolocation",
    description:
      "Your exact location is never shared. We use geohashing to create approximate zones, protecting your privacy while enabling efficient ride matching.",
    icon: MapPin,
  },
  {
    id: "2",
    title: "Aptos Blockchain",
    description:
      "Built on Aptos for fast, secure, and low-cost transactions. Smart contracts handle payments automatically with built-in escrow protection.",
    icon: Cube,
  },
  {
    id: "3",
    title: "AI Clustering",
    description:
      "Our AI suggests optimal pickup points at public locations like malls and metro stations, making rides more convenient and private.",
    icon: Sparkles,
  },
  {
    id: "4",
    title: "Ride NFTs",
    description:
      "Every completed ride generates a unique NFT receipt. Collect them for rewards, use in disputes, or trade in our marketplace.",
    icon: Diamond,
  },
  {
    id: "5",
    title: "Decentralized Network",
    description:
      "No central authority controls your data or rides. The network is owned and operated by the community of users and drivers.",
    icon: GitBranch,
  },
  {
    id: "6",
    title: "Token Rewards",
    description:
      "Earn TRAV tokens for rides, referrals, and network participation. Use tokens for discounts or governance voting.",
    icon: Trophy,
  },
]

const steps = [
  {
    number: 1,
    title: "Request Ride",
    description: "Enter your destination. AI suggests nearby pickup zones to protect your privacy.",
  },
  {
    number: 2,
    title: "Smart Matching",
    description: "Our algorithm matches you with nearby drivers using fuzzy geolocation.",
  },
  {
    number: 3,
    title: "Secure Payment",
    description: "Smart contracts handle payment with automatic escrow protection.",
  },
  {
    number: 4,
    title: "Mint NFT",
    description: "Receive a unique ride NFT as proof of journey and earn rewards.",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your location data stays private with advanced geohashing",
  },
  {
    icon: Sparkles,
    title: "Lightning Fast",
    description: "Aptos blockchain enables instant, low-cost transactions",
  },
  {
    icon: GitBranch,
    title: "Community Owned",
    description: "Decentralized network controlled by users, not corporations",
  },
  {
    icon: Trophy,
    title: "Earn Rewards",
    description: "Get TRAV tokens and collectible NFTs for every ride",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen gradient-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Shield className="mx-auto text-lime-400 mb-8" size={64} />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Privacy-First Mobility</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Travana revolutionizes ride-sharing with blockchain technology, AI-powered matching, and uncompromising
            privacy protection.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">The Problem</h2>
          <div className="glass-card p-8">
            <p className="text-lg text-gray-300 mb-6">
              Traditional ride-sharing platforms invade your privacy, track your every move, and control your data.
              Centralized systems create single points of failure and give corporations too much power over mobility.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 status-badge bg-red-500/20 text-red-400">
                <span>👁️</span>
                <span>Location tracking</span>
              </div>
              <div className="flex items-center space-x-2 status-badge bg-red-500/20 text-red-400">
                <span>🏢</span>
                <span>Centralized control</span>
              </div>
              <div className="flex items-center space-x-2 status-badge bg-red-500/20 text-red-400">
                <span>🔒</span>
                <span>Data ownership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Our Solution</h2>
          <p className="text-lg text-gray-300 max-w-4xl">
            Travana combines cutting-edge Web3 technologies to create a truly decentralized, privacy-preserving
            ride-sharing platform.
          </p>
        </div>

        {/* Tech Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.id} className="dark-card dark-card-hover p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lime-400/20 rounded-2xl flex items-center justify-center">
                      <Icon className="text-lime-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-lime-400 text-gray-900 rounded-2xl flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1 dark-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Travana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="dark-card dark-card-hover p-6 text-center">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-lime-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-card p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future of mobility. Download Travana and experience truly private, decentralized
            ride-sharing.
          </p>
          <button className="primary-button px-8 py-4 flex items-center space-x-3 mx-auto text-lg">
            <span>Get Started</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
