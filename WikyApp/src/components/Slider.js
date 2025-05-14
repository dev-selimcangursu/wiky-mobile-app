// src/components/Slider.js
import React from "react";
import { ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const sliderImages = [
  require("../../assets/slider-3.jpg"),
  require("../../assets/slider-1.avif"),
  require("../../assets/slider-2.avif"),
];

const windowWidth = Dimensions.get("window").width;

const Slider = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
    {sliderImages.map((image, index) => (
      <Image key={index} source={image} style={styles.sliderImage} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  slider: {
    height: 180,
    marginBottom: 20,
  },
  sliderImage: {
    width: windowWidth - 60,
    height: 180,
    borderRadius: 12,
    marginRight: 16,
  },
});

export default Slider;
