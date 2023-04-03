import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../../../components/Card/Card';

const Reading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.readingContainer}>
      <ImageBackground source={require('../../../assets/images/Exams.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.container}>
          <View style={styles.separation}>
            <TouchableOpacity onPress={() => navigation.navigate('ReadingPart1')}>
            <Card
              title="Multiple Choice"
              colors={['#4C1AC4', '#38AAE4']}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ReadingPart2')}>
            <Card
              title="Cross-text multiple matching"
              colors={['#4C1AC4', '#38AAE4']}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ReadingPart1')}>
            <Card
              title="Gapped text"
              colors={['#4C1AC4', '#38AAE4']}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ReadingPart1')}>
            <Card
              title="Multiple matching"
              colors={['#4C1AC4', '#38AAE4']}
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
    width: 300,
  },
});

export default Reading;