import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ExerciseCard = ({ title, description, colors, onPress }) => {
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
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    overflow: 'hidden',
    height: 50,
    width: 350,
  },
  gradient: {
    borderRadius: 8,
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
});

export default ExerciseCard;