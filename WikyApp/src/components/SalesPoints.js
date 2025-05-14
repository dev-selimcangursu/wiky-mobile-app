import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const SalesPoints = () => {
  const logos = [
    require("../../assets/teknosa.jpg"),
    require("../../assets/D&R_logo.jpg"),
    require("../../assets/n11-logo.png"),
    require("../../assets/mediamarkt-logo.png"),
    require("../../assets/turkcell-logo.webp"),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Satış Noktalarımız</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.logoSlider}
      >
        {logos.map((logo, index) => (
          <Image key={index} source={logo} style={styles.logoImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  logoSlider: {
    marginTop: 10,
    height: 80,
  },
  logoImage: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    marginRight: 16,
  },
});

export default SalesPoints;
