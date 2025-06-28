"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

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
    type: "TravanaGo",
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
    type: "TravanaPool",
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
    type: "TravanaPremium",
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
    type: "TravanaGo",
    status: "cancelled",
    rating: 0,
  },
  {
    id: "5",
    destination: "University",
    date: "Dec 16",
    time: "11:30 AM",
    amount: "₹65",
    type: "TravanaPool",
    status: "completed",
    nftId: "TRV-004",
    rating: 4,
  },
]

export default function HistoryScreen() {
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
      <Ionicons
        key={i}
        name={i < rating ? "star" : "star-outline"}
        size={12}
        color={i < rating ? "#f59e0b" : "#d1d5db"}
      />
    ))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ride History</Text>
        <Text style={styles.headerSubtitle}>Your journey with Travana</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Section */}
        <View style={styles.statsSection}>
          <LinearGradient colors={["#6366f1", "#8b5cf6"]} style={styles.statsGradient}>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{totalRides}</Text>
                <Text style={styles.statLabel}>Total Rides</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>₹{totalSpent}</Text>
                <Text style={styles.statLabel}>Total Spent</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{nftCount}</Text>
                <Text style={styles.statLabel}>NFTs Collected</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Filter Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === "all" && styles.activeTab]}
            onPress={() => setSelectedTab("all")}
          >
            <Text style={[styles.tabText, selectedTab === "all" && styles.activeTabText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === "completed" && styles.activeTab]}
            onPress={() => setSelectedTab("completed")}
          >
            <Text style={[styles.tabText, selectedTab === "completed" && styles.activeTabText]}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === "cancelled" && styles.activeTab]}
            onPress={() => setSelectedTab("cancelled")}
          >
            <Text style={[styles.tabText, selectedTab === "cancelled" && styles.activeTabText]}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        {/* Ride History List */}
        <View style={styles.historyList}>
          {filteredHistory.map((ride) => (
            <TouchableOpacity key={ride.id} style={styles.rideCard}>
              <View style={styles.rideCardContent}>
                <View style={styles.rideHeader}>
                  <View style={styles.rideDestination}>
                    <Ionicons name="location" size={16} color="#6366f1" />
                    <Text style={styles.destinationText}>{ride.destination}</Text>
                  </View>
                  <View style={styles.rideAmount}>
                    <Text style={styles.amountText}>{ride.amount}</Text>
                  </View>
                </View>

                <View style={styles.rideDetails}>
                  <View style={styles.rideInfo}>
                    <Text style={styles.rideType}>{ride.type}</Text>
                    <Text style={styles.rideDateTime}>
                      {ride.date} • {ride.time}
                    </Text>
                  </View>

                  <View style={styles.rideStatus}>
                    <View
                      style={[
                        styles.statusBadge,
                        { backgroundColor: ride.status === "completed" ? "#10b981" : "#ef4444" },
                      ]}
                    >
                      <Text style={styles.statusText}>{ride.status === "completed" ? "Completed" : "Cancelled"}</Text>
                    </View>
                  </View>
                </View>

                {ride.status === "completed" && (
                  <View style={styles.rideFooter}>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingLabel}>Rating: </Text>
                      <View style={styles.stars}>{renderStars(ride.rating)}</View>
                    </View>

                    {ride.nftId && (
                      <View style={styles.nftContainer}>
                        <Ionicons name="diamond" size={14} color="#8b5cf6" />
                        <Text style={styles.nftText}>NFT: {ride.nftId}</Text>
                      </View>
                    )}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* NFT Collection */}
        <View style={styles.nftSection}>
          <Text style={styles.sectionTitle}>Your NFT Collection</Text>
          <TouchableOpacity style={styles.nftCollectionCard}>
            <LinearGradient colors={["#1f2937", "#374151"]} style={styles.nftGradient}>
              <View style={styles.nftContent}>
                <Ionicons name="diamond" size={32} color="#8b5cf6" />
                <Text style={styles.nftTitle}>Ride NFTs</Text>
                <Text style={styles.nftDescription}>You've collected {nftCount} unique ride NFTs</Text>
                <TouchableOpacity style={styles.viewCollectionButton}>
                  <Text style={styles.viewCollectionText}>View Collection</Text>
                  <Ionicons name="arrow-forward" size={16} color="#8b5cf6" />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    backgroundColor: "#6366f1",
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#e0e7ff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsSection: {
    marginTop: 20,
    marginBottom: 24,
    borderRadius: 16,
    overflow: "hidden",
  },
  statsGradient: {
    padding: 20,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#e0e7ff",
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6b7280",
  },
  activeTabText: {
    color: "#6366f1",
    fontWeight: "600",
  },
  historyList: {
    gap: 12,
  },
  rideCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rideCardContent: {
    gap: 12,
  },
  rideHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rideDestination: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  destinationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
  rideAmount: {
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
  },
  rideDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rideInfo: {
    flex: 1,
  },
  rideType: {
    fontSize: 14,
    color: "#6366f1",
    fontWeight: "500",
    marginBottom: 2,
  },
  rideDateTime: {
    fontSize: 12,
    color: "#6b7280",
  },
  rideStatus: {
    alignItems: "flex-end",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "500",
  },
  rideFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginRight: 4,
  },
  stars: {
    flexDirection: "row",
    gap: 2,
  },
  nftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  nftText: {
    fontSize: 12,
    color: "#8b5cf6",
    fontWeight: "500",
  },
  nftSection: {
    marginTop: 32,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  nftCollectionCard: {
    borderRadius: 16,
    overflow: "hidden",
  },
  nftGradient: {
    padding: 24,
  },
  nftContent: {
    alignItems: "center",
  },
  nftTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 12,
    marginBottom: 8,
  },
  nftDescription: {
    fontSize: 14,
    color: "#d1d5db",
    textAlign: "center",
    marginBottom: 16,
  },
  viewCollectionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  viewCollectionText: {
    fontSize: 14,
    color: "#8b5cf6",
    fontWeight: "600",
  },
})
