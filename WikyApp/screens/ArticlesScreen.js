import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ArticlesScreen({ navigation }) {
  const articles = [
    { title: 'How to Use Our Service', description: 'Learn how to use our service effectively.' },
    { title: 'Latest Updates', description: 'Stay updated with the latest news and features.' },
    { title: 'Troubleshooting Tips', description: 'Solve common issues with our troubleshooting guide.' },
    { title: 'Customer Success Stories', description: 'Read about how our customers achieved success.' },
  ];

  const handleArticlePress = (articleTitle) => {
    // Makale detayı sayfasına git
    navigation.navigate('ArticleDetail', { articleTitle });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog Makale</Text>

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
  articleList: {
    marginTop: 10,
  },
  articleItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleDescription: {
    fontSize: 16,
    color: '#555',
  },
});
