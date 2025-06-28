import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

interface TechFeature {
  id: string
  title: string
  description: string
  icon: keyof typeof Ionicons.glyphMap
  color: string
}

const techFeatures: TechFeature[] = [
  {
    id: "1",
    title: "Fuzzy Geolocation",
    description:
      "Your exact location is never shared. We use geohashing to create approximate zones, protecting your privacy while enabling efficient ride matching.",
    icon: "location",
    color: "#10b981",
  },
  {
    id: "2",
    title: "Aptos Blockchain",
    description:
      "Built on Aptos for fast, secure, and low-cost transactions. Smart contracts handle payments automatically with built-in escrow protection.",
    icon: "cube",
    color: "#3b82f6",
  },
  {
    id: "3",
    title: "AI Clustering",
    description:
      "Our AI suggests optimal pickup points at public locations like malls and metro stations, making rides more convenient and private.",
    icon: "sparkles",
    color: "#f59e0b",
  },
  {
    id: "4",
    title: "Ride NFTs",
    description:
      "Every completed ride generates a unique NFT receipt. Collect them for rewards, use in disputes, or trade in our marketplace.",
    icon: "diamond",
    color: "#8b5cf6",
  },
  {
    id: "5",
    title: "Decentralized Network",
    description:
      "No central authority controls your data or rides. The network is owned and operated by the community of users and drivers.",
    icon: "git-network",
    color: "#ef4444",
  },
  {
    id: "6",
    title: "Token Rewards",
    description:
      "Earn TRAV tokens for rides, referrals, and network participation. Use tokens for discounts or governance voting.",
    icon: "trophy",
    color: "#f97316",
  },
]

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient colors={["#6366f1", "#8b5cf6"]} style={styles.heroGradient}>
            <View style={styles.heroContent}>
              <Ionicons name="shield-checkmark" size={48} color="#fff" />
              <Text style={styles.heroTitle}>Privacy-First Mobility</Text>
              <Text style={styles.heroDescription}>
                Travana revolutionizes ride-sharing with blockchain technology, AI-powered matching, and uncompromising
                privacy protection.
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Problem Statement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Problem</Text>
          <View style={styles.problemCard}>
            <Text style={styles.problemText}>
              Traditional ride-sharing platforms invade your privacy, track your every move, and control your data.
              Centralized systems create single points of failure and give corporations too much power over mobility.
            </Text>
            <View style={styles.problemPoints}>
              <View style={styles.problemPoint}>
                <Ionicons name="eye" size={16} color="#ef4444" />
                <Text style={styles.problemPointText}>Location tracking</Text>
              </View>
              <View style={styles.problemPoint}>
                <Ionicons name="business" size={16} color="#ef4444" />
                <Text style={styles.problemPointText}>Centralized control</Text>
              </View>
              <View style={styles.problemPoint}>
                <Ionicons name="lock-closed" size={16} color="#ef4444" />
                <Text style={styles.problemPointText}>Data ownership</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Solution */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Solution</Text>
          <Text style={styles.solutionDescription}>
            Travana combines cutting-edge Web3 technologies to create a truly decentralized, privacy-preserving
            ride-sharing platform.
          </Text>
        </View>

        {/* Tech Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technology Stack</Text>
          {techFeatures.map((feature) => (
            <View key={feature.id} style={styles.featureCard}>
              <View style={[styles.featureIcon, { backgroundColor: feature.color }]}>
                <Ionicons name={feature.icon} size={24} color="#fff" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* How It Works */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <View style={styles.stepsContainer}>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Request Ride</Text>
                <Text style={styles.stepDescription}>
                  Enter your destination. AI suggests nearby pickup zones to protect your privacy.
                </Text>
              </View>
            </View>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Smart Matching</Text>
                <Text style={styles.stepDescription}>
                  Our algorithm matches you with nearby drivers using fuzzy geolocation.
                </Text>
              </View>
            </View>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Secure Payment</Text>
                <Text style={styles.stepDescription}>
                  Smart contracts handle payment with automatic escrow protection.
                </Text>
              </View>
            </View>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>4</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Mint NFT</Text>
                <Text style={styles.stepDescription}>
                  Receive a unique ride NFT as proof of journey and earn rewards.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Travana?</Text>
          <View style={styles.benefitsGrid}>
            <View style={styles.benefitCard}>
              <Ionicons name="shield-checkmark" size={32} color="#10b981" />
              <Text style={styles.benefitTitle}>Privacy Protected</Text>
              <Text style={styles.benefitDescription}>Your location data stays private with advanced geohashing</Text>
            </View>
            <View style={styles.benefitCard}>
              <Ionicons name="flash" size={32} color="#f59e0b" />
              <Text style={styles.benefitTitle}>Lightning Fast</Text>
              <Text style={styles.benefitDescription}>Aptos blockchain enables instant, low-cost transactions</Text>
            </View>
            <View style={styles.benefitCard}>
              <Ionicons name="people" size={32} color="#3b82f6" />
              <Text style={styles.benefitTitle}>Community Owned</Text>
              <Text style={styles.benefitDescription}>Decentralized network controlled by users, not corporations</Text>
            </View>
            <View style={styles.benefitCard}>
              <Ionicons name="trophy" size={32} color="#8b5cf6" />
              <Text style={styles.benefitTitle}>Earn Rewards</Text>
              <Text style={styles.benefitDescription}>Get TRAV tokens and collectible NFTs for every ride</Text>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <LinearGradient colors={["#1f2937", "#374151"]} style={styles.ctaGradient}>
            <Text style={styles.ctaTitle}>Join the Revolution</Text>
            <Text style={styles.ctaDescription}>
              Be part of the future of mobility. Download Travana and experience truly private, decentralized
              ride-sharing.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={16} color="#1f2937" />
            </TouchableOpacity>
          </LinearGradient>
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
  content: {
    flex: 1,
  },
  heroSection: {
    marginBottom: 32,
  },
  heroGradient: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heroContent: {
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 16,
    marginBottom: 12,
    textAlign: "center",
  },
  heroDescription: {
    fontSize: 16,
    color: "#e0e7ff",
    textAlign: "center",
    lineHeight: 24,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  problemCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  problemText: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 24,
    marginBottom: 16,
  },
  problemPoints: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  problemPoint: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  problemPointText: {
    fontSize: 14,
    color: "#6b7280",
  },
  solutionDescription: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 24,
  },
  featureCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },
  stepsContainer: {
    gap: 24,
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#6366f1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  stepNumberText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },
  benefitsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  benefitCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "47%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginTop: 12,
    marginBottom: 8,
    textAlign: "center",
  },
  benefitDescription: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 18,
  },
  ctaSection: {
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 16,
    overflow: "hidden",
  },
  ctaGradient: {
    padding: 32,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
    textAlign: "center",
  },
  ctaDescription: {
    fontSize: 16,
    color: "#d1d5db",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 24,
  },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    gap: 8,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
})
