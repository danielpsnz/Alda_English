import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../../components/ExerciseCard';

const Reading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.readingContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.separation}>
        <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingLesson1')}>
          <Card
            title="Lesson 1"
            colors={['#CBE3FF', '#CBE3FF']}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('Writing')}>
          <Card
            title="Lesson 1"
            colors={['#CBE3FF', '#CBE3FF']}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('Writing')}>
          <Card
            title="Lesson 1"
            colors={['#CBE3FF', '#CBE3FF']}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('Writing')}>
          <Card
            title="Lesson 1"
            colors={['#CBE3FF', '#CBE3FF']}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('Writing')}>
          <Card
            title="Lesson 1"
            colors={['#CBE3FF', '#CBE3FF']}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('Writing')}>
          <Card
            title="Lesson 1"
            colors={['#CBE3FF', '#CBE3FF']}
          />
        </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  readingContainer: {
    flex: 1,
    backgroundColor: '#CBE3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(102, 102, 102, 0.4)',
    borderRadius: 20,
    elevation: 10,
    width: 370,
    height: '100%',
    marginTop: 10,
  },
  readingCard: {
    alignItems: 'center',
  },
  separation: {
    marginTop: 10,
  },
});

export default Reading;