import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ServiceSendFormScreen from "../screens/ServiceSendFormScreen";
import MenuScreen from "../screens/MenuScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Anasayfa") iconName = "home-outline";
          else if (route.name === "Bildirimler") iconName = "notifications-outline";
          else if (route.name === "Teknik Servis") iconName = "hammer-outline";
          else if (route.name === "Menü") iconName = "menu-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#999",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Anasayfa" component={HomeScreen} />
      <Tab.Screen name="Bildirimler" component={NotificationsScreen} />
      <Tab.Screen name="Teknik Servis" component={ServiceSendFormScreen} />
      <Tab.Screen name="Menü" component={MenuScreen} />
    </Tab.Navigator>
  );
}
