import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function OrderStatusScreen() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleCheckOrderStatus = () => {
    if (!orderId.trim()) {
      Alert.alert('Error', 'Order ID is required');
      return;
    }

    // Sahte veri (gerçek API bağlanınca burayı değiştireceğiz)
    const fakeOrderStatus = {
      status: 'Shipped', // Sipariş durumu
      estimatedDelivery: '2025-05-18', // Tahmini teslimat tarihi
    };

    setOrderStatus(fakeOrderStatus);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sipariş Sorgulaama</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  result: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f0fe',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
