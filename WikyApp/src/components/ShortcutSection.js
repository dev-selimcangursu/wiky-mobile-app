import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const shortcuts = [
  {
    title: "Teknik Servis Kayıt Formu",
    icon: require("../../assets/add-service.png"),
    route: "ServiceSendForm",
  },
  {
    title: "Servis Durum Sorgulama",
    icon: require("../../assets/service-query.png"),
    route: "ServiceStatus",
  },
  {
    title: "Wiky Watch Sıfırlama",
    icon: require("../../assets/reset.png"),
    route: "ServiceReset",
  },
  {
    title: "Servis Müşteri Hizmetleri",
    icon: require("../../assets/service-call-center.png"),
    url: "tel:02163459360",
  },
  {
    title: "Satış Müşteri Hizmetleri",
    icon: require("../../assets/sales-call-center.png"),
    url: "tel:02163489393",
  },
  {
    title: "Servis Ödeme Sorgulama",
    icon: require("../../assets/payment-query.png"),
    route: "PaymentDueDeviceCheck",
  },
];

const ShortcutSection = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.route) {
      navigation.navigate(item.route);
    } else if (item.url) {
      Linking.openURL(item.url).catch((err) =>
        console.warn("Bağlantı açılamadı:", err)
      );
    }
  };

  return (
    <>
      <Text style={styles.sectionTitle}>Kısayollar</Text>
      <View style={styles.shortcutContainer}>
        {shortcuts.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.shortcutButton}
            onPress={() => handlePress(item)}
          >
            <Image source={item.icon} style={styles.shortcutIcon} />
            <Text style={styles.shortcutText}>{item.title}</Text>
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
  shortcutContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  shortcutButton: {
    width: (windowWidth - 64) / 3,
    height: 80,
    borderRadius: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  shortcutIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 5,
  },
  shortcutText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
    flexShrink: 1,
  },
});

export default ShortcutSection;
