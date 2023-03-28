import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import data from './Reading.json';

const Lesson = () => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [showRadio, setShowRadio] = useState(false);
    const handleRadio = () => {
    setShowRadio(true);
    };
    const [showResults, setShowResults] = useState(false);
    const [marks, setMarks] = useState(0);
    const questions = data.ReadingCAEPart1[0].questions;

    const handleAnswer = (questionId, optionId) => {
        const newSelectedAnswers = [...selectedAnswers];
        const index = newSelectedAnswers.findIndex((answer) => answer.questionId === questionId);
        if (index !== -1) {
          newSelectedAnswers[index] = { questionId, optionId };
        } else {
          newSelectedAnswers.push({ questionId, optionId });
        }
        setSelectedAnswers(newSelectedAnswers);
      };
    
      const handleSubmit = () => {
        let newMarks = marks;
        questions.forEach((question) => {
          const selectedAnswer = selectedAnswers.find((answer) => answer.questionId === question.id);
          if (selectedAnswer && selectedAnswer.optionId === question.correctAnswer) {
            newMarks += 1;
          }
        });
        setMarks(newMarks);
        setShowResults(true);
        const message =
          newMarks >= 4 ? 'Congratulations! You passed the test.' : 'You got some answers wrong. Keep reading!.';
        Alert.alert('Results', message);
        setSubmitDisabled(false);
      };

    return (
        <ScrollView style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{data.ReadingCAEPart1[0].title}</Text>
            <Text style={styles.text}>
            {data.ReadingCAEPart1[0].text[1]}
            </Text>
            <Text style={styles.text}>
            {data.ReadingCAEPart1[0].text[2]}
            </Text>
            <Text style={styles.text}>
            {data.ReadingCAEPart1[0].text[3]}
            </Text>
            <Text style={styles.text}>
            {data.ReadingCAEPart1[0].text[4]}
            </Text>
            <Text style={styles.text}>
            {data.ReadingCAEPart1[0].text[5]}
            </Text>

            <TouchableOpacity style={[styles.submitButton, styles.questionButton]} onPress={handleRadio}>
            <Text style={styles.submitButtonText}>Show Questions</Text>
            </TouchableOpacity>
            
            <View>
            {showRadio && questions.map((question) => (
              // Use the question ID as the key for each question
              <View key={question.id} style={styles.question}>
                  <Text style={styles.questionText}>{question.question}</Text>
                  {/* Get the options array for the current question */}
                  {question.options.map((option) => (
                  <View key={option.id} style={styles.answerOption}>
                      <View style={styles.options}>
                          <RadioButton
                              value={option.id}
                              // Check if the current question and option are selected
                              status={selectedAnswers.some((answer) => answer.questionId === question.id && answer.optionId === option.id)
                                  ? 'checked'
                                  : 'unchecked'}
                              onPress={() => handleAnswer(question.id, option.id)}
                          />
                      </View>
                      <Text style={styles.answerText}>{option.text}</Text>
                  </View>
                  ))}
              </View>
          ))}
            {submitDisabled && (
            <View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit answers</Text>
            </TouchableOpacity>
            </View>
            )}
            </View>

            {showResults && (
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsText}>You scored {marks} out of {questions.length}.</Text>
            </View>
            )}
      </View>
    </ScrollView>
      );
      
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CBE3FF',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    textContainer: {
        marginBottom: 150,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
      lineHeight: 24,
    },
    questionText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 10,
    },
    answerOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    answerText: {
      fontSize: 18,
      marginLeft: 10,
      marginRight: 30,
    },
    options: {
        backgroundColor: 'rgba(102, 102, 102, 0.2)',
        borderRadius: 10,
    },
    submitButton: {
      backgroundColor: 'rgba(23, 23, 23, 0.24)',
      borderColor: 'linear-gradient(to bottom, #FE7D05, #CE13ED, #00FFF0, #0066FF)',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      padding: 10,
      borderRadius: 40,
      marginTop: 20,
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});  

export default Lesson;