"use client"

import { useState, useEffect } from "react"
import {
    Shield,
    MapPin,
    CuboidIcon as Cube,
    Sparkles,
    Diamond,
    Car,
    Users,
    Wallet,
    ArrowRight,
    Star,
    CheckCircle,
    Globe,
    Zap,
    Lock,
    Smartphone,
    Download,
    Play,
    Apple,
} from "lucide-react"

export default function BrochurePage() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeFeature, setActiveFeature] = useState(0)

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 4)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const features = [
        { icon: Shield, title: "Privacy First", description: "Fuzzy geolocation protects your exact location" },
        { icon: Cube, title: "Blockchain Powered", description: "Aptos blockchain for secure, fast transactions" },
        { icon: Sparkles, title: "AI Matching", description: "Smart algorithms for optimal ride pairing" },
        { icon: Diamond, title: "NFT Rewards", description: "Collect unique ride NFTs and earn tokens" },
    ]

    const stats = [
        { number: "100K+", label: "Active Users" },
        { number: "50K+", label: "Rides Completed" },
        { number: "99.9%", label: "Privacy Protected" },
        { number: "24/7", label: "Available" },
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
            {/* Background Vectors */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 border border-lime-400/20 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-lime-400/10 rounded-lg rotate-45 animate-bounce"></div>
                <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-lime-400/30 rotate-12"></div>
                <div className="absolute bottom-20 right-40 w-20 h-20 bg-gradient-to-r from-lime-400/20 to-transparent rounded-full"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-12 gap-4 h-full">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <div key={i} className="border border-lime-400/20"></div>
                        ))}
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-ping"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-lime-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 border border-lime-400/40 rounded-full"></div>

                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-400/5 via-transparent to-gray-900/50"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-lime-400/10 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="px-6 py-8 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-lime-400 rounded-2xl flex items-center justify-center">
                            <span className="text-gray-900 font-bold text-xl">T</span>
                        </div>
                        <span className="text-2xl font-bold">Travana</span>
                    </div>
                    <button className="primary-button px-6 py-3 flex items-center space-x-2">
                        <Download size={20} />
                        <span>Get App</span>
                    </button>
                </header>

                {/* Hero Section */}
                <section className="px-6 py-20 text-center">
                    <div
                        className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="mb-8">
                            <span className="status-badge bg-lime-400/20 text-lime-400 text-sm">🚀 Now Live on Aptos Blockchain</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-lime-400 to-white bg-clip-text text-transparent">
                            Ride the Future
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            The world's first <span className="text-lime-400 font-semibold">privacy-preserving</span>,
                            <span className="text-lime-400 font-semibold"> blockchain-powered</span> ride-sharing platform. Your
                            journey, your data, your rewards.
                        </p>

                        {/* Hero Animation */}
                        <div className="relative mb-16">
                            <div className="flex items-center justify-center space-x-8 mb-8">
                                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center animate-pulse">
                                    <Users className="text-gray-400" size={24} />
                                </div>
                                <div className="flex-1 h-1 bg-gradient-to-r from-gray-800 via-lime-400 to-gray-800 rounded-full"></div>
                                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center animate-bounce">
                                    <Car className="text-gray-900" size={24} />
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-400">Connecting riders and drivers with zero compromise on privacy</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                            <button className="primary-button px-8 py-4 text-lg flex items-center space-x-3 group">
                                <span>Start Your Journey</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="secondary-button px-8 py-4 text-lg flex items-center space-x-3">
                                <Play size={20} />
                                <span>Watch Demo</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Showcase */}
                <section className="px-6 py-20 bg-gray-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionary Technology</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Built on cutting-edge Web3 infrastructure to deliver unparalleled privacy, security, and user
                                experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                const isActive = activeFeature === index
                                return (
                                    <div
                                        key={index}
                                        className={`glass-card p-8 text-center transition-all duration-500 ${isActive ? "scale-105 border-lime-400/50" : "hover:scale-105"
                                            }`}
                                    >
                                        <div
                                            className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive ? "bg-lime-400 text-gray-900" : "bg-lime-400/20 text-lime-400"
                                                }`}
                                        >
                                            <Icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                        <p className="text-gray-300">{feature.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="px-6 py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">{stat.number}</div>
                                    <div className="text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="px-6 py-20 bg-gray-800/20">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Travana Works</h2>
                            <p className="text-xl text-gray-300">Simple, secure, and private in just 4 steps</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Connect Wallet", description: "Link your crypto wallet securely", icon: Wallet },
                                { step: "02", title: "Request Ride", description: "AI suggests private pickup zones", icon: MapPin },
                                { step: "03", title: "Smart Match", description: "Blockchain-powered driver matching", icon: Zap },
                                { step: "04", title: "Earn NFTs", description: "Collect unique ride receipts", icon: Diamond },
                            ].map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="relative">
                                        <div className="glass-card p-6 text-center">
                                            <div className="text-lime-400 text-sm font-bold mb-4">{item.step}</div>
                                            <div className="w-12 h-12 bg-lime-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Icon className="text-lime-400" size={24} />
                                            </div>
                                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-300 text-sm">{item.description}</p>
                                        </div>
                                        {index < 3 && (
                                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-lime-400/30"></div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Travana?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-card p-8">
                                <Lock className="text-lime-400 mb-6" size={48} />
                                <h3 className="text-2xl font-bold mb-4">100% Private</h3>
                                <p className="text-gray-300 mb-6">
                                    Your location data is protected with advanced geohashing. No tracking, no surveillance.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>Fuzzy geolocation</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>Zero data collection</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>Anonymous transactions</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card p-8">
                                <Globe className="text-lime-400 mb-6" size={48} />
                                <h3 className="text-2xl font-bold mb-4">Decentralized</h3>
                                <p className="text-gray-300 mb-6">
                                    Community-owned network with no central authority controlling your rides or data.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>Community governance</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>No corporate control</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>Transparent operations</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card p-8">
                                <Diamond className="text-lime-400 mb-6" size={48} />
                                <h3 className="text-2xl font-bold mb-4">Earn Rewards</h3>
                                <p className="text-gray-300 mb-6">
                                    Collect NFT ride receipts and earn TRAV tokens for every journey you take.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>Unique ride NFTs</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>TRAV token rewards</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="text-lime-400" size={16} />
                                        <span>Referral bonuses</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* App Download Section */}
                <section className="px-6 py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ride?</h2>
                        <p className="text-xl text-gray-300 mb-12">
                            Download Travana today and experience the future of ride-sharing
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
                            <button className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors">
                                <Apple size={24} />
                                <div className="text-left">
                                    <div className="text-xs">Download on the</div>
                                    <div className="text-lg font-semibold">App Store</div>
                                </div>
                            </button>

                            <button className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors">
                                <Play size={24} />
                                <div className="text-left">
                                    <div className="text-xs">Get it on</div>
                                    <div className="text-lg font-semibold">Google Play</div>
                                </div>
                            </button>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Star className="text-lime-400 fill-current" size={20} />
                                <span>4.9/5 Rating</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Smartphone size={20} />
                                <span>iOS & Android</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield size={20} />
                                <span>100% Secure</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="px-6 py-12 border-t border-gray-800">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center space-x-3 mb-6 md:mb-0">
                                <div className="w-10 h-10 bg-lime-400 rounded-2xl flex items-center justify-center">
                                    <span className="text-gray-900 font-bold">T</span>
                                </div>
                                <span className="text-xl font-bold">Travana</span>
                            </div>

                            <div className="flex items-center space-x-8 text-gray-400">
                                <span>Privacy Policy</span>
                                <span>Terms of Service</span>
                                <span>Support</span>
                                <span>© 2024 Travana</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
