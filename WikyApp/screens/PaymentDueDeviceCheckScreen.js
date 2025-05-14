import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function PaymentDueDeviceCheckScreen() {
  const [imei, setImei] = useState('');
  const [dueAmount, setDueAmount] = useState(null);

  const handleCheckDue = () => {
    if (!imei.trim()) {
      Alert.alert('Error', 'IMEI is required');
      return;
    }

    // Sahte veri (gerçek API bağlanınca burayı değiştireceğiz)
    const fakeDueAmount = {
      amount: 150, // Ödenecek tutar
      currency: 'USD',
      status: 'Pending', // Ödeme durumu
    };

    setDueAmount(fakeDueAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servis Ödeme Sayfası</Text>

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
