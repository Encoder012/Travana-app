"use client"

import { useState } from "react"

interface LogoProps {
    size?: "sm" | "md" | "lg" | "xl"
    variant?: "default" | "white" | "dark" | "gradient"
    animated?: boolean
    showText?: boolean
}

export default function TravanaLogo({
    size = "md",
    variant = "default",
    animated = false,
    showText = true,
}: LogoProps) {
    const [isHovered, setIsHovered] = useState(false)

    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
        xl: "w-24 h-24",
    }

    const textSizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-4xl",
    }

    const getColors = () => {
        switch (variant) {
            case "white":
                return {
                    primary: "#ffffff",
                    secondary: "#f3f4f6",
                    accent: "#a3e635",
                    text: "#ffffff",
                }
            case "dark":
                return {
                    primary: "#1f2937",
                    secondary: "#374151",
                    accent: "#a3e635",
                    text: "#1f2937",
                }
            case "gradient":
                return {
                    primary: "url(#logoGradient)",
                    secondary: "#374151",
                    accent: "#a3e635",
                    text: "#ffffff",
                }
            default:
                return {
                    primary: "#a3e635",
                    secondary: "#84cc16",
                    accent: "#ffffff",
                    text: "#ffffff",
                }
        }
    }

    const colors = getColors()

    return (
        <div
            className={`flex items-center space-x-3 cursor-pointer transition-all duration-300 ${animated && isHovered ? "scale-105" : ""
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Logo Icon */}
            <div className={`${sizeClasses[size]} relative`}>
                <svg
                    viewBox="0 0 100 100"
                    className={`w-full h-full ${animated ? "transition-all duration-500" : ""}`}
                    style={{
                        transform: animated && isHovered ? "rotate(5deg)" : "rotate(0deg)",
                    }}
                >
                    {/* Gradient Definitions */}
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a3e635" />
                            <stop offset="50%" stopColor="#84cc16" />
                            <stop offset="100%" stopColor="#65a30d" />
                        </linearGradient>

                        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#f3f4f6" />
                        </linearGradient>

                        {/* Glow Filter */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Background Circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill={colors.primary}
                        className={animated ? "transition-all duration-300" : ""}
                        style={{
                            filter: animated && isHovered ? "url(#glow)" : "none",
                        }}
                    />

                    {/* Inner Design - Represents connectivity and movement */}

                    {/* Central Hub */}
                    <circle
                        cx="50"
                        cy="50"
                        r="8"
                        fill={colors.accent}
                        className={animated ? "transition-all duration-500" : ""}
                        style={{
                            transform: animated && isHovered ? "scale(1.2)" : "scale(1)",
                            transformOrigin: "50px 50px",
                        }}
                    />

                    {/* Connection Lines - Representing network */}
                    <g stroke={colors.accent} strokeWidth="2" fill="none" opacity="0.8">
                        {/* Top connections */}
                        <path
                            d="M50 42 L35 25 M50 42 L50 20 M50 42 L65 25"
                            className={animated ? "transition-all duration-700" : ""}
                            style={{
                                strokeDasharray: animated && isHovered ? "0" : "5,5",
                                animation: animated ? "dash 2s linear infinite" : "none",
                            }}
                        />

                        {/* Bottom connections */}
                        <path
                            d="M50 58 L35 75 M50 58 L50 80 M50 58 L65 75"
                            className={animated ? "transition-all duration-700" : ""}
                            style={{
                                strokeDasharray: animated && isHovered ? "0" : "5,5",
                                animation: animated ? "dash 2s linear infinite reverse" : "none",
                            }}
                        />

                        {/* Side connections */}
                        <path
                            d="M42 50 L25 35 M42 50 L20 50 M42 50 L25 65"
                            className={animated ? "transition-all duration-700" : ""}
                            style={{
                                strokeDasharray: animated && isHovered ? "0" : "5,5",
                                animation: animated ? "dash 2s linear infinite" : "none",
                            }}
                        />

                        <path
                            d="M58 50 L75 35 M58 50 L80 50 M58 50 L75 65"
                            className={animated ? "transition-all duration-700" : ""}
                            style={{
                                strokeDasharray: animated && isHovered ? "0" : "5,5",
                                animation: animated ? "dash 2s linear infinite reverse" : "none",
                            }}
                        />
                    </g>

                    {/* Outer Nodes - Representing users/drivers */}
                    <g fill={colors.accent}>
                        <circle cx="35" cy="25" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="50" cy="20" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="65" cy="25" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="75" cy="35" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="80" cy="50" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="75" cy="65" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="65" cy="75" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="50" cy="80" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="35" cy="75" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="25" cy="65" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="20" cy="50" r="3" className={animated ? "animate-pulse" : ""} />
                        <circle cx="25" cy="35" r="3" className={animated ? "animate-pulse" : ""} />
                    </g>

                    {/* Letter T in the center */}
                    <text
                        x="50"
                        y="58"
                        textAnchor="middle"
                        fontSize="24"
                        fontWeight="bold"
                        fill={variant === "default" ? "#1f2937" : colors.accent}
                        fontFamily="Inter, sans-serif"
                    >
                        T
                    </text>
                </svg>
            </div>

            {/* Logo Text */}
            {showText && (
                <div className="flex flex-col">
                    <span
                        className={`${textSizeClasses[size]} font-bold transition-all duration-300`}
                        style={{ color: colors.text }}
                    >
                        Travana
                    </span>
                    {size === "lg" || size === "xl" ? (
                        <span className="text-xs opacity-75 -mt-1" style={{ color: colors.text }}>
                            Decentralized Mobility
                        </span>
                    ) : null}
                </div>
            )}

            {/* CSS for animations */}
            <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
      `}</style>
        </div>
    )
}
