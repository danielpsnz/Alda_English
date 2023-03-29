import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../components/Card';

export default function Exams() {
  const navigation = useNavigation();

  return (
    <View style={styles.examsContainer}>
       <ImageBackground source={require('../../assets/images/Exams.png')} style={styles.backgroundImage}>
      <View>
          <Text style={styles.title}>Master your exam</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Reading')}>
          <Card
            title="Reading"
            colors={['#4C1AC4', '#38AAE4']}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UseOfEnglish')}>
          <Card
            title="Use of English"
            colors={['#4C1AC4', '#38AAE4']}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Listening')}>
          <Card
            title="Listening"
            colors={['#4C1AC4', '#38AAE4']}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Writing')}>
          <Card
            title="Writing"
            colors={['#4C1AC4', '#38AAE4']}
          />
        </TouchableOpacity>
      </View>
      </ImageBackground>
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
    fontWeight: 'bold',
    fontSize: 29,
    marginTop: 15,
    marginLeft: 15,
    top: 0,
    color: ['#00D1FF', '#B932DB'],
  },
});
