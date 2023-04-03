import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Card = ({ title, description, colors }) => {
  return (
      <View style={styles.card}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </LinearGradient>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    opacity: 0.95,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    overflow: 'hidden',
    marginTop: 20,
    height: 90,
  },
  gradient: {
    borderRadius: 8,
    padding: 16,
    height: 90,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
});

export default Card;