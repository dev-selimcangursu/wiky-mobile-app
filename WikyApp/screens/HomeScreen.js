import React from "react";
import { View, ScrollView, Text, StyleSheet, Linking } from "react-native";
import Slider from "../src/components/Slider";
import AppCardSection from "../src/components/AppCardSection";
import ShortcutSection from "../src/components/ShortcutSection";
import SalesPoints from "../src/components/SalesPoints";

const HomeScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.warn("Bağlantı açılamadı:", err)
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f7f9fc" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.welcomeText}>Hoşgeldiniz 👋</Text>
        <Slider />
        <AppCardSection />
        <ShortcutSection />
        <SalesPoints />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 40,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
});

export default HomeScreen;
