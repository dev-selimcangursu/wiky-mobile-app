import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ServiceStatusScreen() {
  const [imei, setImei] = useState('');
  const [status, setStatus] = useState(null);

  const handleCheckStatus = () => {
    if (!imei.trim()) {
      Alert.alert('Error', 'IMEI is required');
      return;
    }

    // Sahte veri
    const fakeStatus = {
      status: 'In Service',
      estimatedCompletion: '2025-05-20',
    };

    setStatus(fakeStatus);
  };

  return (
    <View>
      <Text>Servis Durum Sorgulama</Text>

     
    
    </View>
  );
}


