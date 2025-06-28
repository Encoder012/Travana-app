import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"

import HomeScreen from "./screens/HomeScreen"
import PromotionsScreen from "./screens/PromotionsScreen"
import HistoryScreen from "./screens/HistoryScreen"
import ProfileScreen from "./screens/ProfileScreen"
import AboutScreen from "./screens/AboutScreen"
import RideBookingScreen from "./screens/RideBookingScreen"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="RideBooking"
        component={RideBookingScreen}
        options={{
          title: "Book Ride",
          headerStyle: { backgroundColor: "#6366f1" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About Travana",
          headerStyle: { backgroundColor: "#6366f1" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#6366f1" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Promotions") {
              iconName = focused ? "megaphone" : "megaphone-outline"
            } else if (route.name === "History") {
              iconName = focused ? "time" : "time-outline"
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline"
            } else {
              iconName = "help-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#6366f1",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Promotions" component={PromotionsScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
