import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Pizzaria232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pizzaria 232N</Text>

      <Image
        source={{ uri: 'https://www.example.com/pizzaria232n.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>As melhores pizzas da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.example.com/pizza1.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Margherita</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.example.com/pizza2.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Pepperoni</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.example.com/pizza3.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Quatro Queijos</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.example.com/pizza4.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Calabresa</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default Pizzaria232n;
