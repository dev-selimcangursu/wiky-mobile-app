import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MenuScreen({ navigation }) {
  const menuItems = [
    { title: 'Başvurular', screen: 'Applications', icon: 'document-text-outline' },
    { title: 'Servis Formu Gönder', screen: 'ServiceSendForm', icon: 'send-outline' },
    { title: 'Servis Durumu', screen: 'ServiceStatus', icon: 'hardware-chip-outline' },
    { title: 'Servis Sıfırla', screen: 'ServiceReset', icon: 'refresh-circle-outline' },
    { title: 'Ödeme Bekleyen Cihaz', screen: 'PaymentDueDeviceCheck', icon: 'card-outline' },
    { title: 'SSS', screen: 'FAQ', icon: 'help-circle-outline' },
    { title: 'Sipariş Durumu', screen: 'OrderStatus', icon: 'cube-outline' },
    { title: 'Satış Noktaları', screen: 'SalesPoints', icon: 'location-outline' },
    { title: 'Makaleler', screen: 'Articles', icon: 'newspaper-outline' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.8}
    >
      <Icon name={item.icon} size={28} color="#007AFF" style={styles.icon} />
      <View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>Detaylara git</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servis Merkezi</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.menuList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
    textAlign: 'start',
  },
  menuList: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  icon: {
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '100%',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
});
