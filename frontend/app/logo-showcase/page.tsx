"use client"

import TravanaLogo from "@/components/TravanaLogo"

export default function LogoShowcase() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Travana Logo Variations</h1>

                {/* Main Logo Display */}
                <div className="bg-gray-800 rounded-3xl p-12 mb-12 text-center">
                    <h2 className="text-2xl font-bold mb-8">Primary Logo</h2>
                    <TravanaLogo size="xl" animated={true} />
                </div>

                {/* Size Variations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Small</h3>
                        <TravanaLogo size="sm" />
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Medium</h3>
                        <TravanaLogo size="md" />
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Large</h3>
                        <TravanaLogo size="lg" />
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Extra Large</h3>
                        <TravanaLogo size="xl" />
                    </div>
                </div>

                {/* Color Variations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Default</h3>
                        <TravanaLogo size="lg" variant="default" />
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">White</h3>
                        <TravanaLogo size="lg" variant="white" />
                    </div>

                    <div className="bg-gray-100 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Dark</h3>
                        <TravanaLogo size="lg" variant="dark" />
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Gradient</h3>
                        <TravanaLogo size="lg" variant="gradient" />
                    </div>
                </div>

                {/* Icon Only Versions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Icon Only - Default</h3>
                        <TravanaLogo size="lg" showText={false} />
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Icon Only - White</h3>
                        <TravanaLogo size="lg" variant="white" showText={false} />
                    </div>

                    <div className="bg-gray-100 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Icon Only - Dark</h3>
                        <TravanaLogo size="lg" variant="dark" showText={false} />
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Icon Only - Animated</h3>
                        <TravanaLogo size="lg" animated={true} showText={false} />
                    </div>
                </div>

                {/* Usage Examples */}
                <div className="bg-gray-800 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold mb-8 text-center">Usage Examples</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Header Example */}
                        <div className="bg-gray-900 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4">Header/Navigation</h3>
                            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-xl">
                                <TravanaLogo size="sm" />
                                <div className="flex space-x-4 text-sm">
                                    <span>Home</span>
                                    <span>About</span>
                                    <span>Contact</span>
                                </div>
                            </div>
                        </div>

                        {/* App Icon Example */}
                        <div className="bg-gray-900 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4">App Icon</h3>
                            <div className="flex justify-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <TravanaLogo size="md" showText={false} variant="dark" />
                                </div>
                            </div>
                        </div>

                        {/* Business Card Example */}
                        <div className="bg-gray-900 rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4">Business Card</h3>
                            <div className="bg-white text-gray-900 p-4 rounded-xl">
                                <TravanaLogo size="sm" variant="dark" />
                                <div className="mt-2 text-xs">
                                    <div className="font-semibold">John Doe</div>
                                    <div>CEO, Travana</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Concept Explanation */}
                <div className="bg-gradient-to-r from-lime-400/10 to-lime-600/10 rounded-3xl p-8 mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Logo Concept</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-16 h-16 bg-lime-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Network Connectivity</h3>
                            <p className="text-gray-300 text-sm">
                                The radiating lines represent the decentralized network connecting riders and drivers
                            </p>
                        </div>

                        <div>
                            <div className="w-16 h-16 bg-lime-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Privacy & Security</h3>
                            <p className="text-gray-300 text-sm">
                                The central hub with distributed nodes symbolizes privacy-preserving architecture
                            </p>
                        </div>

                        <div>
                            <div className="w-16 h-16 bg-lime-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Innovation & Speed</h3>
                            <p className="text-gray-300 text-sm">
                                The dynamic design and lime green color convey cutting-edge technology and efficiency
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
