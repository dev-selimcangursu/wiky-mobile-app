import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SalesPointsScreen() {
  const salesPoints = [
    { name: 'Store A', address: '123 Main St, City, Country' },
    { name: 'Store B', address: '456 Elm St, City, Country' },
    { name: 'Store C', address: '789 Oak St, City, Country' },
    { name: 'Store D', address: '101 Pine St, City, Country' },
  ];

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
  salesList: {
    marginTop: 10,
  },
  salesItem: {
    marginBottom: 15,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  storeAddress: {
    fontSize: 16,
    color: '#555',
  },
});
