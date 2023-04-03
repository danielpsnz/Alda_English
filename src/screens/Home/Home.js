import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/Home.png')} style={styles.backgroundImage}>
      <Text style={styles.text}>Welcome to Advanced Certificate in English</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  text: {
    fontSize: 29,
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});

export default HomeScreen;