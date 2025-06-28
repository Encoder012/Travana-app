"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

interface RideOption {
  id: string
  type: string
  estimatedTime: string
  price: string
  description: string
  icon: keyof typeof Ionicons.glyphMap
}

const rideOptions: RideOption[] = [
  {
    id: "1",
    type: "TravanaGo",
    estimatedTime: "3-5 min",
    price: "₹120",
    description: "Quick and affordable",
    icon: "car",
  },
  {
    id: "2",
    type: "TravanaPool",
    estimatedTime: "5-8 min",
    price: "₹85",
    description: "Share and save",
    icon: "people",
  },
  {
    id: "3",
    type: "TravanaPremium",
    estimatedTime: "2-4 min",
    price: "₹180",
    description: "Luxury experience",
    icon: "car-sport",
  },
]

export default function RideBookingScreen({ route, navigation }: any) {
  const { rideType } = route.params || {}
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [selectedOption, setSelectedOption] = useState<string>("1")

  const handleBookRide = () => {
    // Handle ride booking logic
    console.log("Booking ride:", { pickup, destination, selectedOption })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Location Inputs */}
        <View style={styles.locationSection}>
          <View style={styles.locationInputContainer}>
            <View style={styles.locationDots}>
              <View style={styles.pickupDot} />
              <View style={styles.routeLine} />
              <View style={styles.destinationDot} />
            </View>
            <View style={styles.locationInputs}>
              <View style={styles.inputContainer}>
                <Ionicons name="radio-button-on" size={16} color="#10b981" />
                <TextInput
                  style={styles.locationInput}
                  placeholder="Pickup location"
                  value={pickup}
                  onChangeText={setPickup}
                  placeholderTextColor="#9ca3af"
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons name="location" size={16} color="#ef4444" />
                <TextInput
                  style={styles.locationInput}
                  placeholder="Where to?"
                  value={destination}
                  onChangeText={setDestination}
                  placeholderTextColor="#9ca3af"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Privacy Notice */}
        <View style={styles.privacyNotice}>
          <Ionicons name="shield-checkmark" size={20} color="#10b981" />
          <Text style={styles.privacyText}>Your exact location is protected with fuzzy geolocation</Text>
        </View>

        {/* Ride Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose your ride</Text>
          {rideOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[styles.rideOptionCard, selectedOption === option.id && styles.selectedRideOption]}
              onPress={() => setSelectedOption(option.id)}
            >
              <View style={styles.rideOptionContent}>
                <View style={styles.rideOptionLeft}>
                  <View style={styles.rideOptionIconContainer}>
                    <Ionicons name={option.icon} size={24} color="#6366f1" />
                  </View>
                  <View style={styles.rideOptionDetails}>
                    <Text style={styles.rideOptionType}>{option.type}</Text>
                    <Text style={styles.rideOptionDescription}>{option.description}</Text>
                    <Text style={styles.rideOptionTime}>{option.estimatedTime}</Text>
                  </View>
                </View>
                <View style={styles.rideOptionRight}>
                  <Text style={styles.rideOptionPrice}>{option.price}</Text>
                  {selectedOption === option.id && <Ionicons name="checkmark-circle" size={20} color="#10b981" />}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment</Text>
          <TouchableOpacity style={styles.paymentCard}>
            <View style={styles.paymentContent}>
              <Ionicons name="wallet" size={24} color="#6366f1" />
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentMethod}>Crypto Wallet</Text>
                <Text style={styles.paymentDescription}>Smart contract escrow</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Features */}
        <View style={styles.featuresSection}>
          <View style={styles.feature}>
            <Ionicons name="shield" size={16} color="#10b981" />
            <Text style={styles.featureText}>Privacy Protected</Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="cube" size={16} color="#3b82f6" />
            <Text style={styles.featureText}>Blockchain Secured</Text>
          </View>
          <View style={styles.feature}>
            <Ionicons name="diamond" size={16} color="#f59e0b" />
            <Text style={styles.featureText}>NFT Receipt</Text>
          </View>
        </View>
      </ScrollView>

      {/* Book Ride Button */}
      <View style={styles.bookingFooter}>
        <TouchableOpacity style={styles.bookButton} onPress={handleBookRide}>
          <LinearGradient colors={["#6366f1", "#8b5cf6"]} style={styles.bookButtonGradient}>
            <Text style={styles.bookButtonText}>Book Travana Ride</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  locationSection: {
    marginTop: 20,
    marginBottom: 16,
  },
  locationInputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationDots: {
    alignItems: "center",
    marginRight: 16,
    paddingTop: 8,
  },
  pickupDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#10b981",
  },
  routeLine: {
    width: 2,
    height: 40,
    backgroundColor: "#d1d5db",
    marginVertical: 8,
  },
  destinationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ef4444",
  },
  locationInputs: {
    flex: 1,
    gap: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    gap: 12,
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
    color: "#1f2937",
  },
  privacyNotice: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
    gap: 8,
  },
  privacyText: {
    flex: 1,
    fontSize: 14,
    color: "#166534",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  rideOptionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedRideOption: {
    borderColor: "#6366f1",
    backgroundColor: "#f8faff",
  },
  rideOptionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rideOptionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rideOptionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  rideOptionDetails: {
    flex: 1,
  },
  rideOptionType: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 2,
  },
  rideOptionDescription: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 2,
  },
  rideOptionTime: {
    fontSize: 12,
    color: "#9ca3af",
  },
  rideOptionRight: {
    alignItems: "flex-end",
    gap: 4,
  },
  rideOptionPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
  },
  paymentCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentDetails: {
    flex: 1,
    marginLeft: 12,
  },
  paymentMethod: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 2,
  },
  paymentDescription: {
    fontSize: 14,
    color: "#6b7280",
  },
  featuresSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  feature: {
    alignItems: "center",
    gap: 8,
  },
  featureText: {
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "500",
  },
  bookingFooter: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  bookButton: {
    borderRadius: 12,
    overflow: "hidden",
  },
  bookButtonGradient: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    gap: 8,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
})
