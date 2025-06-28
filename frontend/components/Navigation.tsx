"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Home, Megaphone, Clock, User, Menu, X } from "lucide-react"

const navItems = [
  { href: "/brochure", label: "Brochure", icon: FileText },
  { href: "/", label: "Get Started", icon: Home },
  { href: "/promotions", label: "Promotions", icon: Megaphone },
  { href: "/history", label: "History", icon: Clock },
  { href: "/profile", label: "Profile", icon: User },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-lime-400 rounded-2xl flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold text-white">Travana</span>
            </Link>

            <div className="flex space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${isActive ? "bg-lime-400 text-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-lime-400 rounded-xl flex items-center justify-center">
              <span className="text-gray-900 font-bold">T</span>
            </div>
            <span className="text-xl font-bold text-white">Travana</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-4 border-b border-gray-800/50 font-medium transition-colors ${isActive ? "text-lime-400 bg-gray-800/50" : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                    }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </nav>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
        <div className="grid grid-cols-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-3 px-1 transition-colors ${isActive ? "text-lime-400" : "text-gray-400 hover:text-gray-300"
                  }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
