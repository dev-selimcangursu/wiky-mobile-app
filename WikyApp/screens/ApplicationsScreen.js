import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ApplicationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Applications Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  text: {
    fontSize: 20, fontWeight: 'bold',
  },
});
