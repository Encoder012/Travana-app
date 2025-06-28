import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

const { width } = Dimensions.get("window")

interface Promotion {
  id: string
  title: string
  description: string
  discount: string
  validUntil: string
  type: "event" | "discount" | "feature"
  color: string[]
  icon: keyof typeof Ionicons.glyphMap
}

const promotions: Promotion[] = [
  {
    id: "1",
    title: "Tech Conference 2024",
    description: "Special rides to the biggest tech event of the year",
    discount: "30% OFF",
    validUntil: "Dec 25, 2024",
    type: "event",
    color: ["#6366f1", "#8b5cf6"],
    icon: "calendar",
  },
  {
    id: "2",
    title: "First Ride Free",
    description: "Welcome to Travana! Your first ride is on us",
    discount: "100% OFF",
    validUntil: "Limited time",
    type: "discount",
    color: ["#10b981", "#059669"],
    icon: "gift",
  },
  {
    id: "3",
    title: "NFT Rewards Launch",
    description: "Collect unique ride NFTs and earn exclusive rewards",
    discount: "NEW",
    validUntil: "Ongoing",
    type: "feature",
    color: ["#f59e0b", "#d97706"],
    icon: "diamond",
  },
  {
    id: "4",
    title: "Weekend Pool Party",
    description: "Shared rides to the hottest weekend events",
    discount: "25% OFF",
    validUntil: "Every Weekend",
    type: "event",
    color: ["#ef4444", "#dc2626"],
    icon: "musical-notes",
  },
  {
    id: "5",
    title: "Green Rides Initiative",
    description: "Choose eco-friendly options and save the planet",
    discount: "15% OFF",
    validUntil: "Permanent",
    type: "discount",
    color: ["#22c55e", "#16a34a"],
    icon: "leaf",
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

export default function PromotionsScreen() {
  const handlePromotionPress = (promotion: Promotion) => {
    // Handle promotion selection
    console.log("Selected promotion:", promotion.title)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Promotions</Text>
        <Text style={styles.headerSubtitle}>Exclusive offers & events</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Featured Promotion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <TouchableOpacity style={styles.featuredCard}>
            <LinearGradient
              colors={["#6366f1", "#8b5cf6", "#ec4899"]}
              style={styles.featuredGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.featuredContent}>
                <View style={styles.featuredBadge}>
                  <Text style={styles.featuredBadgeText}>LIMITED TIME</Text>
                </View>
                <Text style={styles.featuredTitle}>Holiday Special</Text>
                <Text style={styles.featuredDescription}>Get 50% off on all rides during the holiday season</Text>
                <View style={styles.featuredStats}>
                  <View style={styles.featuredStat}>
                    <Ionicons name="time" size={16} color="#fff" />
                    <Text style={styles.featuredStatText}>Ends Dec 31</Text>
                  </View>
                  <View style={styles.featuredStat}>
                    <Ionicons name="people" size={16} color="#fff" />
                    <Text style={styles.featuredStatText}>1.2K used</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* All Promotions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Offers</Text>
          {promotions.map((promotion) => (
            <TouchableOpacity
              key={promotion.id}
              style={styles.promotionCard}
              onPress={() => handlePromotionPress(promotion)}
            >
              <LinearGradient
                colors={promotion.color}
                style={styles.promotionGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <View style={styles.promotionContent}>
                  <View style={styles.promotionHeader}>
                    <View style={styles.promotionIconContainer}>
                      <Ionicons name={promotion.icon} size={24} color="#fff" />
                    </View>
                    <View style={styles.promotionDiscount}>
                      <Text style={styles.discountText}>{promotion.discount}</Text>
                    </View>
                  </View>
                  <Text style={styles.promotionTitle}>{promotion.title}</Text>
                  <Text style={styles.promotionDescription}>{promotion.description}</Text>
                  <View style={styles.promotionFooter}>
                    <Text style={styles.validUntil}>Valid until {promotion.validUntil}</Text>
                    <Ionicons name="chevron-forward" size={16} color="rgba(255, 255, 255, 0.8)" />
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Events */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Events</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredEvents.map((event) => (
              <TouchableOpacity key={event.id} style={styles.eventCard}>
                <View style={styles.eventImagePlaceholder}>
                  <Ionicons name="calendar" size={32} color="#6366f1" />
                </View>
                <View style={styles.eventDetails}>
                  <Text style={styles.eventName}>{event.name}</Text>
                  <View style={styles.eventInfo}>
                    <Ionicons name="location" size={14} color="#6b7280" />
                    <Text style={styles.eventLocation}>{event.location}</Text>
                  </View>
                  <View style={styles.eventInfo}>
                    <Ionicons name="time" size={14} color="#6b7280" />
                    <Text style={styles.eventDate}>{event.date}</Text>
                  </View>
                  <View style={styles.eventAttendees}>
                    <Ionicons name="people" size={14} color="#10b981" />
                    <Text style={styles.attendeesText}>{event.attendees} attending</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Referral Program */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.referralCard}>
            <LinearGradient colors={["#1f2937", "#374151"]} style={styles.referralGradient}>
              <View style={styles.referralContent}>
                <Ionicons name="share-social" size={32} color="#10b981" />
                <Text style={styles.referralTitle}>Refer & Earn</Text>
                <Text style={styles.referralDescription}>
                  Invite friends and earn 100 TRAV tokens for each successful referral
                </Text>
                <View style={styles.referralStats}>
                  <View style={styles.referralStat}>
                    <Text style={styles.referralStatNumber}>0</Text>
                    <Text style={styles.referralStatLabel}>Referrals</Text>
                  </View>
                  <View style={styles.referralStat}>
                    <Text style={styles.referralStatNumber}>0</Text>
                    <Text style={styles.referralStatLabel}>TRAV Earned</Text>
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
  section: {
    marginTop: 24,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  featuredCard: {
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  featuredGradient: {
    padding: 24,
  },
  featuredContent: {
    alignItems: "flex-start",
  },
  featuredBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 12,
  },
  featuredBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 16,
    color: "#e0e7ff",
    marginBottom: 16,
    lineHeight: 22,
  },
  featuredStats: {
    flexDirection: "row",
    gap: 24,
  },
  featuredStat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  featuredStatText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  promotionCard: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  promotionGradient: {
    padding: 20,
  },
  promotionContent: {
    flex: 1,
  },
  promotionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  promotionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  promotionDiscount: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  discountText: {
    color: "#1f2937",
    fontSize: 12,
    fontWeight: "bold",
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  promotionDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 16,
    lineHeight: 20,
  },
  promotionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  validUntil: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 16,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImagePlaceholder: {
    height: 100,
    backgroundColor: "#f3f4f6",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  eventDetails: {
    padding: 16,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 6,
  },
  eventLocation: {
    fontSize: 14,
    color: "#6b7280",
  },
  eventDate: {
    fontSize: 14,
    color: "#6b7280",
  },
  eventAttendees: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 6,
  },
  attendeesText: {
    fontSize: 12,
    color: "#10b981",
    fontWeight: "600",
  },
  referralCard: {
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  referralGradient: {
    padding: 24,
  },
  referralContent: {
    alignItems: "center",
  },
  referralTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 12,
    marginBottom: 8,
  },
  referralDescription: {
    fontSize: 14,
    color: "#d1d5db",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  referralStats: {
    flexDirection: "row",
    gap: 32,
  },
  referralStat: {
    alignItems: "center",
  },
  referralStatNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: 4,
  },
  referralStatLabel: {
    fontSize: 12,
    color: "#9ca3af",
  },
})
