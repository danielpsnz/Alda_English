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