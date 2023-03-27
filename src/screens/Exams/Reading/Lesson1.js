import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Lesson = () => {
    const navigation = useNavigation();
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showRadio, setShowRadio] = useState(false);
    const handleRadio = () => {
    setShowRadio(true);
    };
    const [showResults, setShowResults] = useState(false);
    const [marks, setMarks] = useState(0);

    const questions = [    
        {      
            id: 1,      
            question: 'What problem regarding colour does the writer explain in the first paragraph?',      
            options: [        
                { id: '1a', text: 'Our view of colour is strongly affected by changing fashion.' },        
                { id: '1b', text: 'Analysis is complicated by the bewildering number of natural colours.' },        
                { id: '1c', text: 'Colours can have different associations in different parts of the world.' },        
                { id: '1d', text: 'Certain popular books have dismissed colour as insignificant' },      
            ],
            correctAnswer: '1c',
        },
        {      
            id: 2,      
            question: 'What is the first reason the writer gives for the lack of academic work on the history of colour?',      
            options: [        
                { id: '2a', text: 'There are problems of reliability associated with the artefacts available.' },        
                { id: '2b', text: 'Historians have seen colour as being outside their field of expertise.' },        
                { id: '2c', text: 'Colour has been rather looked down upon as a fit subject for academic study.' },        
                { id: '2d', text: 'Very little documentation exists for historians to use.' },      
            ],
            correctAnswer: '2a',
        },
        {      
            id: 3,      
            question: 'The writer suggests that the priority when conducting historical research on colour is to',      
            options: [        
                { id: '3a', text: 'ignore the interpretations of other modern day historians.' },        
                { id: '3b', text: 'focus one’s interest as far back as the prehistoric era.' },        
                { id: '3c', text: 'find some way of organising the mass of available data.' },        
                { id: '3d', text: 'relate pictures to information from other sources.' },      
            ],
            correctAnswer: '3c',
        },
        {      
            id: 4,      
            question: 'In the fourth paragraph, the writer says that the historian writing about colour should be careful',      
            options: [        
                { id: '4a', text: 'not to analyse in an old-fashioned way.' },        
                { id: '4b', text: 'when making basic distinctions between key ideas.' },        
                { id: '4c', text: 'not to make unwise predictions.' },        
                { id: '4d', text: 'when using certain terms and concepts.' },      
            ],
            correctAnswer: '4d',
        },
        {      
            id: 5,      
            question: 'In the fifth paragraph, the writer says there needs to be further research done on',      
            options: [        
                { id: '5a', text: 'the history of colour in relation to objects in the world around us.' },        
                { id: '5b', text: 'the concerns he has raised in an earlier publication.' },        
                { id: '5c', text: 'the many ways in which artists have used colour over the years.' },        
                { id: '5d', text: 'the relationship between artistic works and the history of colour.' },      
            ],
            correctAnswer: '5d',
        },
        {      
            id: 6,      
            question: 'An idea recurring in the text is that people who have studied colour have',      
            options: [        
                { id: '6a', text: 'failed to keep up with scientific developments.' },        
                { id: '6b', text: 'not understood its global significance.' },        
                { id: '6c', text: 'found it difficult to be fully objective.' },        
                { id: '6d', text: 'been muddled about their basic aims.' },      
            ],
            correctAnswer: '6c',
        },
    ];

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
        setIsLoading(true);
        let newMarks = marks;
        questions.forEach((question) => {
          const selectedAnswer = selectedAnswers.find((answer) => answer.questionId === question.id);
          if (selectedAnswer && selectedAnswer.optionId === question.correctAnswer) {
            newMarks += 1;
          }
        });
        setMarks(newMarks);
        setShowResults(true);
        setIsLoading(false);
        const message = newMarks === questions.length ? 'Congratulations! You got all the answers correct.' : 'You got some answers wrong. Keep reading!.';
        Alert.alert('Results', message);
      };

    return (
        <ScrollView style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Introduction to a book about the history of colour</Text>
            <Text style={styles.text}>
            This book examines how the ever-changing role of colour in society has been reflected in manuscripts, stained glass, clothing, 
            painting and popular culture. Colour is a natural phenomenon, of course, but it is also a complex cultural construct that resists 
            generalization and, indeed, analysis itself. No doubt this is why serious works devoted to colour are rare, and rarer still are 
            those that aim to study it in historical context. Many authors search for the universal or archetypal truths they imagine reside in 
            colour, but for the historian, such truths do not exist. Colour is first and foremost a social phenomenon. There is no transcultural 
            truth to colour perception, despite what many books based on poorly grasped neurobiology or – even worse – on pseudoesoteric pop 
            psychology would have us believe. Such books unfortunately clutter the bibliography on the subject, and even do it harm.
            </Text>
            <Text style={styles.text}>
            The silence of historians on the subject of colour, or more particularly their difficulty in conceiving colour as a subject separate 
            from other historical phenomena, is the result of three different sets of problems. The first concerns documentation and 
            preservation. We see the colours transmitted to us by the past as time has altered them and not as they were originally. Moreover, 
            we see them under light conditions that often are entirely different from those known by past societies. And finally, over the 
            decades we have developed the habit of looking at objects from the past in black-and-white photographs and, despite the current 
            diffusion of colour photography, our ways of thinking about and reacting to these objects seem to have remained more or less black 
            and white.
            </Text>
            <Text style={styles.text}>
            The second set of problems concerns methodology. As soon as the historian seeks to study colour, he must grapple with a host of 
            factors all at once: physics, chemistry, materials, and techniques of production, as well as iconography, ideology, and the symbolic 
            meanings that colours convey. How to make sense of all of these elements? How can one establish an analytical model facilitating the 
            study of images and coloured objects? No researcher, no method, has yet been able to resolve these problems, because among the 
            numerous facts pertaining to colour, a researcher tends to select those facts that support his study and to conveniently forget 
            those that contradict it. This is clearly a poor way to conduct research. And it is made worse by the temptation to apply to the 
            objects and images of a given historical period information found in texts of that period. The proper method – at least in the first 
            phase of analysis – is to proceed as do palaeontologists (who must study cave paintings without the aid of texts): by extrapolating 
            from the images and the objects themselves a logic and a system based on various concrete factors such as the rate of occurrence of 
            particular objects and motifs, their distribution and disposition. In short, one undertakes the internal structural analysis with 
            which any study of an image or coloured object should begin.
            </Text>
            <Text style={styles.text}>
            The third set of problems is philosophical: it is wrong to project our own conceptions and definitions of colour onto the images, 
            objects and monuments of past centuries. Our judgements and values are not those of previous societies (and no doubt they will 
            change again in the future). For the writer-historian looking at the definitions and taxonomy of colour, the danger of anachronism 
            is very real. For example, the spectrum with its natural order of colours was unknown before the seventeenth century, while the 
            notion of primary and secondary colours did not become common until the nineteenth century. These are not eternal notions but stages 
            in the ever-changing history of knowledge.
            </Text>
            <Text style={styles.text}>
            I have reflected on such issues at greater length in my previous work, so while the present book does address certain of them, for 
            the most part it is devoted to other topics. Nor is it concerned only with the history of colour in images and artworks – in any case 
            that area still has many gaps to be filled. Rather, the aim of this book is to examine all kinds of objects in order to consider the 
            different facets of the history of colour and to show how far beyond the artistic sphere this history reaches. The history of 
            painting is one thing; that of colour is another, much larger, question. Most studies devoted to the history of colour err in 
            considering only the pictorial, artistic or scientific realms. But the lessons to be learned from colour and its real interest 
            lie elsewhere.
            </Text>

            <TouchableOpacity style={styles.submitButton} onPress={handleRadio}>
                <Text style={styles.submitButtonText}>Show Questions (Radio)</Text>
            </TouchableOpacity>


            {showRadio &&
            question.options.map((option) => (
                <View key={option.id} style={styles.answerOption}>
                <RadioButton
                    value={option.id}
                    status={selectedAnswers.some(
                    (answer) => answer.questionId === question.id && answer.optionId === option.id
                    )
                    ? 'checked'
                    : 'unchecked'}
                    onPress={() => handleAnswer(question.id, option.id)}
                />
                <Text style={styles.answerText}>{option.text}</Text>
                </View>
            ))}


        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Answers</Text>
        </TouchableOpacity>

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
    question: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    answerOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    answerText: {
      fontSize: 16,
      marginLeft: 10,
    },
    submitButton: {
      backgroundColor: '#4C1AC4',
      padding: 10,
      borderRadius: 5,
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