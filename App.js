import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from './src/components/Navbar';
import HomeScreen from './src/screens/HomeScreen';
import PracticeScreen from './src/screens/PracticeScreen';
import Navigation from './src/screens/ExamsScreen';
import AudioScreen from './src/screens/AudioScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import Reading from './src/screens/Exams/Reading';
import ReadingLesson1 from './src/screens/Exams/Reading/Lesson1';

import Listening from './src/screens/Exams/Listening';
import Writing from './src/screens/Exams/Writing';
import UseOfEnglish from './src/screens/Exams/UseOfEnglish';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Practice" component={PracticeScreen} />
          <Stack.Screen name="Exams" component={Navigation} />
          <Stack.Screen name="Audio" component={AudioScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Reading" component={Reading} />
          <Stack.Screen name="ReadingLesson1" component={ReadingLesson1} options={{title: 'Lesson 1'}}/>
          <Stack.Screen name="Listening" component={Listening} />
          <Stack.Screen name="UseOfEnglish" component={UseOfEnglish} />
          <Stack.Screen name="Writing" component={Writing} />
        </Stack.Navigator>
        <Navbar />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE3FF',
  },
});

