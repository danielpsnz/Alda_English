import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Box } from "native-base";

import Navbar from './src/components/Navbar';

import Audio from './src/screens/Audio/Audio';

import Exams from './src/screens/Exams/Exams';

import Reading from './src/screens/Exams/Reading/Reading';
import ReadingPart1 from './src/screens/Exams/Reading/Part1/ReadingPart1';
import ReadingPart1Lesson1 from './src/screens/Exams/Reading/Part1/Lessons/Lesson1';
import ReadingPart2 from './src/screens/Exams/Reading/Part2/ReadingPart2';
import ReadingPart3 from './src/screens/Exams/Reading/Part3/ReadingPart3';
import ReadingPart4 from './src/screens/Exams/Reading/Part4/ReadingPart4';

import Writing from './src/screens/Exams/Writing/Writing';
import WritingPart1Lesson1 from './src/screens/Exams/Writing/Part1/Lessons/Lesson1';

import UseOfEnglish from './src/screens/Exams/UseOfEnglish/UseOfEnglish';

import Home from './src/screens/Home/Home';


import Practice from './src/screens/Practice/Practice';

import Grammar from './src/screens/Practice/Grammar/Grammar';
import Tenses from './src/screens/Practice/Grammar/Lessons/Tenses';

import Settings from './src/screens/Settings/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="Practice" component={Practice} options={{
            title: 'Practice your English!',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="Grammar" component={Grammar} options={{
            title: 'Grammar',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="Tenses" component={Tenses} options={{
            title: 'Tenses',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>


          <Stack.Screen name="Exams" component={Exams} options={{
            title: 'Exams',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="Audio" component={Audio} options={{
            title: 'Audio',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="Settings" component={Settings} options={{
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>

          <Stack.Screen name="Reading" component={Reading} options={{
            title: 'Reading',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="ReadingPart1" component={ReadingPart1} options={{
            title: 'Reading',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
          }}/>
          <Stack.Screen name="ReadingPart1Lesson1" component={ReadingPart1Lesson1} options={{
            title: 'Multiple Choice',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
                    <Stack.Screen name="ReadingPart2" component={ReadingPart2} options={{
            title: 'Reading',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
          }}/>
                    <Stack.Screen name="ReadingPart3" component={ReadingPart3} options={{
            title: 'Reading',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
          }}/>
                    <Stack.Screen name="ReadingPart4" component={ReadingPart4} options={{
            title: 'Reading',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
          }}/>
          <Stack.Screen name="UseOfEnglish" component={UseOfEnglish} options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="Writing" component={Writing} options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
          <Stack.Screen name="WritingPart1Lesson1" component={WritingPart1Lesson1} options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#CBE3FF',
            },
            }}/>
        </Stack.Navigator>
        <Navbar />
      </View>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE3FF',
  },
});