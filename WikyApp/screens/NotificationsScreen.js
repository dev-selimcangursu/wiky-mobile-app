import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const notifications = [
  {
    id: 1,
    type: 'service',
    message: 'Servis talebiniz alındı.',
    time: '2 saat önce',
  },
  {
    id: 2,
    type: 'order',
    message: 'Siparişiniz işleme alındı.',
    time: '3 saat önce',
  },
  {
    id: 3,
    type: 'update',
    message: 'Uygulamanız için yeni güncellemeler mevcut.',
    time: 'Dün',
  },
  {
    id: 4,
    type: 'maintenance',
    message: 'Yarın saat 14:00’te bakım planlandı.',
    time: '2 gün önce',
  },
  {
    id: 5,
    type: 'payment',
    message: 'Ödemeniz başarıyla gerçekleşti.',
    time: '2 gün önce',
  },
];


const iconMap = {
  service: 'construct-outline',
  order: 'cube-outline',
  update: 'cloud-download-outline',
  maintenance: 'warning-outline',
  payment: 'card-outline',
};

export default function NotificationsScreen() {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Ionicons
        name={iconMap[item.type] || 'notifications-outline'}
        size={28}
        color="#007bff"
        style={styles.notificationIcon}
      />
      <View style={styles.notificationContent}>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bildirimler</Text>

      {notifications.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="notifications-off-outline" size={60} color="#ccc" />
          <Text style={styles.emptyText}>Henüz bir bildiriminiz yok</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderNotification}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  notificationIcon: {
    marginRight: 12,
    marginTop: 4,
  },
  notificationContent: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    fontSize: 18,
    color: '#aaa',
    marginTop: 10,
  },
});
