import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function ServiceSendFormScreen() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    imei: '',
    description: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.imei) {
      Alert.alert('Error', 'Name, Phone, and IMEI are required.');
      return;
    }

    console.log('Form Submitted:', form);
    Alert.alert('Success', 'Form has been submitted!');
    setForm({ name: '', phone: '', email: '', imei: '', description: '' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Servis Formu Oluşturma</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
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
