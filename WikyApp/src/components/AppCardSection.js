import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
  Platform,
} from "react-native";

const apps = [
  {
    title: "Setracker",
    image: require("../../assets/setracker.jpeg"),
    url: "https://play.google.com/store/apps/details?id=org.zywx.wbpalmstar.widgetone.uexaaagg10003",
    packageName: "org.zywx.wbpalmstar.widgetone.uexaaagg10003",
  },
  {
    title: "Setracker 2",
    image: require("../../assets/setracker2.webp"),
    url: "https://play.google.com/store/apps/details?id=com.tgelec.setracker&utm_source=emea_Med",
    packageName: "com.tgelec.setracker",
  },
  {
    title: "Wiky Safe",
    image: require("../../assets/safe.webp"),
    url: "https://play.google.com/store/apps/details?id=com.lagenio.wiky&utm_source=emea_Med",
    packageName: "com.lagenio.wiky",
  },
  {
    title: "Wiky Tracker",
    image: require("../../assets/wiky-tracker.png"),
    url: "https://play.google.com/store/apps/details?id=com.tgelec.wikytrackers&utm_source=emea_Med",
    packageName: "com.tgelec.wikytrackers",
  },
  {
    title: "Wiky Care",
    image: require("../../assets/care.webp"),
    url: "https://play.google.com/store/apps/details?id=watch.junicare.akq.wiky&utm_source=emea_Med",
    packageName: "watch.junicare.akq.wiky",
  },
];

const windowWidth = Dimensions.get("window").width;

const AppCardSection = () => {
  const openLink = async (storeUrl, packageName) => {
    if (Platform.OS === "android") {
      const intentURL = `intent://#Intent;package=${packageName};end`;

      try {
        const supported = await Linking.canOpenURL(intentURL);

        if (supported) {
          await Linking.openURL(intentURL);
        } else {
          await Linking.openURL(storeUrl);
        }
      } catch (error) {
        console.warn("Android bağlantı hatası:", error);
        await Linking.openURL(storeUrl);
      }
    } else {
      // iOS için sadece App Store linki çalışır (direkt açmak mümkün değil)
      try {
        await Linking.openURL(storeUrl);
      } catch (error) {
        console.warn("iOS bağlantı hatası:", error);
      }
    }
  };

  return (
    <>
      <Text style={styles.sectionTitle}>Öne Çıkan Uygulamalarımız</Text>
      <View style={styles.cardContainer}>
        {apps.map((app, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => openLink(app.url, app.packageName)}
          >
            <Image source={app.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{app.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginVertical: 15,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: (windowWidth - 64) / 5,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
  },
  cardImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    color: "#333",
  },
});

export default AppCardSection;
