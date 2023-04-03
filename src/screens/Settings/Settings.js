import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/Settings.png')} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <View style={styles.separation}>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(102, 102, 102, 0.4)',
    borderRadius: 20,
    elevation: 10,
    width: 370,
    height: '100%',
    marginTop: 10,
  },
  separation: {
    marginTop: 10,
  },
});

export default HomeScreen;