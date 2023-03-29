import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ExercisePage = () => {
    const [activeGap, setActiveGap] = useState(0);
    const [words, setWords] = useState(Array.from({ length: 9 }, () => ''));
    
    const [textInputValue, setTextInputValue] = useState('');
    
    const handleGapPress = (index) => {
      setActiveGap(index);
    };
    
    const handleGapChange = (text, index) => {
      const newWords = [...words];
      newWords[index] = text;
      setWords(newWords);
    };
    
    const handleTextInputChange = (text) => {
      setTextInputValue(text);
    };
    
    const handleTextInputSubmit = () => {
      const newWords = [...words];
      newWords[activeGap] = textInputValue;
      setWords(newWords);
      setTextInputValue('');
    };   
  
    const handleFinish = () => {
      // TODO: calculate and display the result
    };
  
    const handleReset = () => {
      setActiveGap(-1);
      setWords(Array.from({ length: 9 }, () => ''));
    };

    return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>On the hunt for the best young female entrepreneurs</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Founded in 1972, the Veuve Clicquot Business Woman Award is celebrated in 27 countries. Veuve Clicquot has
                    now introduced a new award {' '}
                    <TouchableOpacity onPress={() => handleGapPress(0)}>
                    {words[0] ? (
                        <Text style={styles.filledGap}>{words[0]}</Text>
                    ) : (
                        <View style={styles.gapInputContainer}>
                        <TextInput
                            style={styles.gapInput}
                            placeholder="Type your answer"
                            onChangeText={(text) => handleTextInputChange(text)}
                        />
                        </View>
                    )}
                    </TouchableOpacity>
                    complement its Business Woman of the year category. Called the New Generation Award, 
                    <TouchableOpacity onPress={() => handleGapPress(1)}>
                    {words[1] ? (
                        <Text style={styles.filledGap}>{words[0]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 1)}
                        autoFocus={activeGap === 1}
                        />
                    )}
                    </TouchableOpacity>{' '}
                    recognizes the best young female talent across business and corporate life.
                </Text>

                <Text style={styles.text}>
                    The first winner ot the award, Kathryn Parsons,
                    <TouchableOpacity onPress={() => handleGapPress(2)}>
                    {words[2] ? (
                        <Text style={styles.filledGap}>{words[2]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 2)}
                        autoFocus={activeGap === 2}
                        />
                    )}
                    </TouchableOpacity>{' '}
                    innovative start-up company, Decoded, teaches people to code in a day, has joined 
                    the judging panel to help find this year's winner. "The importance of these awards cannot
                    <TouchableOpacity onPress={() => handleGapPress(3)}>
                    {words[3] ? (
                        <Text style={styles.filledGap}>{words[3]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 3)}
                        autoFocus={activeGap === 3}
                        />
                    )}
                    </TouchableOpacity>{' '}
                    overestimated,'she says. 'Women need role models that prove to
                    <TouchableOpacity onPress={() => handleGapPress(4)}>
                    {words[4] ? (
                        <Text style={styles.filledGap}>{words[4]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 4)}
                        autoFocus={activeGap === 4}
                        />
                    )}
                    </TouchableOpacity>{' '}
                    that they can do it, too.'
                </Text>

                <Text style={styles.text}>
                    The New Generation Award is open to entrepreneurial businesswomen
                    <TouchableOpacity onPress={() => handleGapPress(5)}>
                    {words[5] ? (
                        <Text style={styles.filledGap}>{words[5]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 5)}
                        autoFocus={activeGap === 5}
                        />
                    )}
                    </TouchableOpacity>{' '}
                    the ages of 25 and 35. They can run
                    <TouchableOpacity onPress={() => handleGapPress(6)}>
                    {words[6] ? (
                        <Text style={styles.filledGap}>{words[6]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 6)}
                        autoFocus={activeGap === 6}
                        />
                    )}
                    </TouchableOpacity>{' '}
                    Own businesses or hail from corporate life. 'This award isn't about how much money 
                    you've made or how long you've been in business, it's about recognizing young women 
                    <TouchableOpacity onPress={() => handleGapPress(7)}>
                    {words[7] ? (
                        <Text style={styles.filledGap}>{words[7]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 7)}
                        autoFocus={activeGap === 7}
                        />
                    )}
                    </TouchableOpacity>{' '}
                    a mission and a vision,' says Parsons. 'We want to meet women who are working to 
                    <TouchableOpacity onPress={() => handleGapPress(8)}>
                    {words[8] ? (
                        <Text style={styles.filledGap}>{words[8]}</Text>
                    ) : (
                        <TextInput
                        style={styles.gapInput}
                        placeholder="Type your answer"
                        onChangeText={(text) => handleGapChange(text, 8)}
                        autoFocus={activeGap === 8}
                        />
                    )}
                    </TouchableOpacity>
                    the world a better place.'
                </Text>
        </View>
  </ScrollView>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
backgroundColor: '#fff',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 16,
},
textContainer: {
marginBottom: 16,
},
text: {
fontSize: 16,
marginBottom: 8,
},
input: {
height: 40,
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 4,
paddingHorizontal: 8,
marginHorizontal: 4,
minWidth: 80,
},
button: {
backgroundColor: '#007AFF',
padding: 16,
borderRadius: 4,
alignItems: 'center',
marginVertical: 8,
},
buttonText: {
color: '#fff',
fontSize: 16,
},
});

export default ExercisePage;