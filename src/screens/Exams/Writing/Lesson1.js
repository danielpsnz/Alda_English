import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Configuration, OpenAIApi } from "openai";

const Lesson = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTextCorrection = async () => {
    const configuration = new Configuration({
      apiKey: '',
    });
    const openai = new OpenAIApi(configuration);

    try {
      const prompt = `Correct this to standard English:\n\n${inputText}`;
      const encodedPrompt = encodeURIComponent(prompt);
      const url = `https://api.openai.com/v1/engines/text-davinci-002/completions`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${configuration.apiKey}`,
        },
        body: JSON.stringify({
          prompt: encodedPrompt,
          max_tokens: 60,
          n: 1,
          temperature: 0.5,
        }),
      });
      const data = await response.json();
      setOutputText(data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        placeholder="Enter text here"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Correct Text" onPress={handleTextCorrection} />
      <Text style={styles.output}>{outputText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
  },
  output: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default Lesson;