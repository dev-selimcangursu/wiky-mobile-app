import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FAQScreen() {
  const faqs = [
    { question: 'How to reset my device?', answer: 'To reset your device, go to the Service Reset page and enter the required information.' },
    { question: 'How can I check the payment due for my device?', answer: 'Enter your IMEI on the Payment Due page to see the payment status and amount.' },
    { question: 'How can I contact support?', answer: 'You can contact support through the Contact Us page or email support@wikyapp.com.' },
    { question: 'Where can I find the nearest sales point?', answer: 'You can find the nearest sales point in the Sales Points section of the app.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sıkça Sorulan Soru</Text>

      
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
  faqList: {
    marginTop: 10,
  },
  faqItem: {
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
    color: '#555',
  },
});
