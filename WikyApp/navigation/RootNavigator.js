import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ApplicationsScreen from "../screens/ApplicationsScreen";
import ServiceSendFormScreen from "../screens/ServiceSendFormScreen";
import ServiceStatusScreen from "../screens/ServiceStatusScreen";
import ServiceResetScreen from "../screens/ServiceResetScreen";
import PaymentDueDeviceCheckScreen from "../screens/PaymentDueDeviceCheckScreen";
import FAQScreen from "../screens/FAQScreen";
import OrderStatusScreen from "../screens/OrderStatusScreen";
import SalesPointsScreen from "../screens/SalesPointsScreen";
import ArticlesScreen from "../screens/ArticlesScreen";
import ArticleDetailScreen from "../screens/ArticleDetailScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Applications" component={ApplicationsScreen} />
      <Stack.Screen name="ServiceSendForm" component={ServiceSendFormScreen} />
      <Stack.Screen name="ServiceStatus" component={ServiceStatusScreen} />
      <Stack.Screen name="ServiceReset" component={ServiceResetScreen} />
      <Stack.Screen name="PaymentDueDeviceCheck" component={PaymentDueDeviceCheckScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
      <Stack.Screen name="SalesPoints" component={SalesPointsScreen} />
      <Stack.Screen name="Articles" component={ArticlesScreen} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
    </Stack.Navigator>
  );
}
