import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ExerciseCard = ({ title, description, colors }) => {
  return (
      <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    width: 150,
    backgroundColor: '#CBE3FF',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
});

export default ExerciseCard;