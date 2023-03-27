import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from "../components/Card";
import { StatusBar } from 'expo-status-bar';

const ExamsScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Reading"
        description="This is a card with a linear gradient background."
        colors={['#4C1AC4', '#38AAE4']}
      />
      <Card
        title="Use of English"
        description="This is a card with a linear gradient background."
        colors={['#4C1AC4', '#38AAE4']}
      />
      <Card
        title="Listening"
        description="This is a card with a linear gradient background."
        colors={['#4C1AC4', '#38AAE4']}
      />
      <Card
        title="Writing"
        description="This is a card with a linear gradient background."
        colors={['#4C1AC4', '#38AAE4']}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CBE3FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
});

export default ExamsScreen;