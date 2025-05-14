import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ArticleDetailScreen({ route }) {
  const { articleTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{articleTitle}</Text>
      <Text style={styles.content}>Detailed content for {articleTitle} goes here...</Text>
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
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
});
