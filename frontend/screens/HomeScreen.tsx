"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

const { width } = Dimensions.get("window")

interface RideOption {
  id: string
  name: string
  icon: keyof typeof Ionicons.glyphMap
  description: string
  color: string
}

interface NearbyLocation {
  id: string
  name: string
  type: string
  distance: string
  icon: keyof typeof Ionicons.glyphMap
}

const rideOptions: RideOption[] = [
  { id: "1", name: "Cab", icon: "car", description: "Quick rides", color: "#10b981" },
  { id: "2", name: "Bike", icon: "bicycle", description: "Fast & eco", color: "#f59e0b" },
  { id: "3", name: "Car Pool", icon: "people", description: "Share & save", color: "#3b82f6" },
  { id: "4", name: "Rentals", icon: "key", description: "Self drive", color: "#8b5cf6" },
  { id: "5", name: "Trip", icon: "map", description: "Long distance", color: "#ef4444" },
]

const nearbyLocations: NearbyLocation[] = [
  { id: "1", name: "Central Mall", type: "Shopping", distance: "0.5 km", icon: "storefront" },
  { id: "2", name: "Metro Station", type: "Transport", distance: "0.3 km", icon: "train" },
  { id: "3", name: "City Park", type: "Recreation", distance: "0.8 km", icon: "leaf" },
  { id: "4", name: "Coffee House", type: "Cafe", distance: "0.2 km", icon: "cafe" },
  { id: "5", name: "Tech Museum", type: "Monument", distance: "1.2 km", icon: "library" },
  { id: "6", name: "Food Festival", type: "Event", distance: "2.1 km", icon: "restaurant" },
]

export default function HomeScreen({ navigation }: any) {
  const [searchText, setSearchText] = useState("")

  const handleRideOptionPress = (option: RideOption) => {
    navigation.navigate("RideBooking", { rideType: option.name })
  }

  const handleAboutPress = () => {
    navigation.navigate("About")
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#6366f1", "#8b5cf6"]} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Travana</Text>
          <Text style={styles.headerSubtitle}>Decentralized Ride-Sharing</Text>
          <TouchableOpacity style={styles.walletButton}>
            <Ionicons name="wallet" size={16} color="#fff" />
            <Text style={styles.walletText}>Connect Wallet</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Section */}
        <View style={styles.searchSection}>
          <Text style={styles.sectionTitle}>Where to?</Text>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#6b7280" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search destination..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        {/* Ride Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ride Options</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rideOptionsContainer}>
            {rideOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[styles.rideOption, { borderColor: option.color }]}
                onPress={() => handleRideOptionPress(option)}
              >
                <View style={[styles.rideIconContainer, { backgroundColor: option.color }]}>
                  <Ionicons name={option.icon} size={24} color="#fff" />
                </View>
                <Text style={styles.rideOptionName}>{option.name}</Text>
                <Text style={styles.rideOptionDescription}>{option.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent History */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Rides</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.historyItem}>
            <View style={styles.historyIconContainer}>
              <Ionicons name="car" size={20} color="#6366f1" />
            </View>
            <View style={styles.historyDetails}>
              <Text style={styles.historyDestination}>Central Mall</Text>
              <Text style={styles.historyTime}>2 hours ago • ₹120</Text>
            </View>
            <View style={styles.nftBadge}>
              <Text style={styles.nftText}>NFT</Text>
            </View>
          </View>
        </View>

        {/* Nearby Locations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Locations</Text>
          <View style={styles.nearbyGrid}>
            {nearbyLocations.map((location) => (
              <TouchableOpacity key={location.id} style={styles.nearbyItem}>
                <View style={styles.nearbyIconContainer}>
                  <Ionicons name={location.icon} size={20} color="#6366f1" />
                </View>
                <Text style={styles.nearbyName}>{location.name}</Text>
                <Text style={styles.nearbyType}>{location.type}</Text>
                <Text style={styles.nearbyDistance}>{location.distance}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* About Tech Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.aboutTechCard} onPress={handleAboutPress}>
            <LinearGradient colors={["#1f2937", "#374151"]} style={styles.aboutTechGradient}>
              <View style={styles.aboutTechContent}>
                <Ionicons name="shield-checkmark" size={32} color="#10b981" />
                <Text style={styles.aboutTechTitle}>Privacy-First Technology</Text>
                <Text style={styles.aboutTechDescription}>
                  Learn how Travana uses blockchain, AI, and geohashing to protect your privacy
                </Text>
                <View style={styles.techFeatures}>
                  <View style={styles.techFeature}>
                    <Ionicons name="location" size={16} color="#10b981" />
                    <Text style={styles.techFeatureText}>Fuzzy Geolocation</Text>
                  </View>
                  <View style={styles.techFeature}>
                    <Ionicons name="cube" size={16} color="#3b82f6" />
                    <Text style={styles.techFeatureText}>Aptos Blockchain</Text>
                  </View>
                  <View style={styles.techFeature}>
                    <Ionicons name="sparkles" size={16} color="#f59e0b" />
                    <Text style={styles.techFeatureText}>AI Clustering</Text>
                  </View>
                </View>
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
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: "center",
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
    marginBottom: 16,
  },
  walletButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  walletText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchSection: {
    marginTop: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1f2937",
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  seeAllText: {
    color: "#6366f1",
    fontSize: 14,
    fontWeight: "600",
  },
  rideOptionsContainer: {
    paddingVertical: 8,
  },
  rideOption: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: 120,
    alignItems: "center",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rideIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  rideOptionName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  rideOptionDescription: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  historyIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  historyDetails: {
    flex: 1,
  },
  historyDestination: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  historyTime: {
    fontSize: 14,
    color: "#6b7280",
  },
  nftBadge: {
    backgroundColor: "#10b981",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  nftText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  nearbyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  nearbyItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: (width - 52) / 2,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nearbyIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  nearbyName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 4,
  },
  nearbyType: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  nearbyDistance: {
    fontSize: 12,
    color: "#10b981",
    fontWeight: "600",
  },
  aboutTechCard: {
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  aboutTechGradient: {
    padding: 20,
  },
  aboutTechContent: {
    alignItems: "center",
  },
  aboutTechTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 12,
    marginBottom: 8,
  },
  aboutTechDescription: {
    fontSize: 14,
    color: "#d1d5db",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 20,
  },
  techFeatures: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  techFeature: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  techFeatureText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
})
