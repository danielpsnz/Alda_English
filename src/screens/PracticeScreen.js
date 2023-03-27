import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Card from '../components/Card';
import Reading from './Exams/Reading';
import Listening from './Exams/Listening';
import Writing from './Exams/Writing';
import UseOfEnglish from './Exams/UseOfEnglish';

const Stack = createStackNavigator();

const Practice = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.examsContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Reading')}>
        <Card
          title="Reading"
          description="This is a card with a linear gradient background."
          colors={['#4C1AC4', '#38AAE4']}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UseOfEnglish')}>
        <Card
          title="Use of English"
          description="This is a card with a linear gradient background."
          colors={['#4C1AC4', '#38AAE4']}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Listening')}>
        <Card
          title="Listening"
          description="This is a card with a linear gradient background."
          colors={['#4C1AC4', '#38AAE4']}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Writing')}>
        <Card
          title="Writing"
          description="This is a card with a linear gradient background."
          colors={['#4C1AC4', '#38AAE4']}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const ExamsStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Exams">
        <Stack.Screen name="Exams" component={Practice} />
        <Stack.Screen name="Reading" component={Reading} />
        <Stack.Screen name="Listening" component={Listening} />
        <Stack.Screen name="UseOfEnglish" component={UseOfEnglish} />
        <Stack.Screen name="Writing" component={Writing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  examsContainer: {
    flex: 1,
    backgroundColor: '#CBE3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExamsStack;