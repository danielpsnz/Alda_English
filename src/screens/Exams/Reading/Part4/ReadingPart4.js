import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../../../../components/Card/ExerciseCard';

const ReadingPart1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.readingContainer}>
      <ImageBackground source={require('../../../../assets/images/Exams.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.container}>
          <View style={styles.separation}>
            <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart4Lesson1')}>
              <Card
                title="Lesson 1"
                colors={['#CBE3FF', '#CBE3FF']}
              />
              </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
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

export default ReadingPart1;