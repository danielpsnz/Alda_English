import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../../../components/Card/Card';

export default function UseOfEnglish() {
  const navigation = useNavigation();

  return (
    <View style={styles.examsContainer}>
      <View>
          <Text style={styles.title}>Master your exam</Text>
      </View>
      <View>
            <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('UOELesson1')}>
              <Card
                title="Lesson 1"
                colors={['#CBE3FF', '#CBE3FF']}
              />
              </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  examsContainer: {
    flex: 1,
    backgroundColor: '#CBE3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    top: 0,
    color: ['#00D1FF', '#B932DB'],
  },
});