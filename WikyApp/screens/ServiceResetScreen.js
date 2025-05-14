import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ServiceResetScreen() {
  const [imei, setImei] = useState('');
  const [code, setCode] = useState('');

  const handleReset = () => {
    if (!imei.trim() || !code.trim()) {
      Alert.alert('Error', 'IMEI and Verification Code are required');
      return;
    }

    // Sahte kontrol (gerçek API ileride entegre edilecek)
    if (imei === '123456789012345' && code === 'RESET2025') {
      Alert.alert('Success', 'Device has been reset from service.');
    } else {
      Alert.alert('Failed', 'Invalid IMEI or verification code.');
    }

    setImei('');
    setCode('');
  };

  return (
    <View style={styles.container}>
    
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
});
