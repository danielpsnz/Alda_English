import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../../../components/Card/PartCard';

const Grammar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.readingContainer}>
      <View style={styles.content}>
        <ImageBackground source={require('../../../assets/images/Practice.png')} style={styles.backgroundImage}>
          <ScrollView style={styles.container}>
            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('Tenses')}>
                <Card
                  title="Tenses"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Future"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Modals"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Nouns and articles"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Determiners & quantifiers"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Adverbs & Adjectives"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Comparison"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Verb patterns"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Relative clauses"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Adverbial clauses"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Conditionals"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Participle, infinitive & reduced clauses"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Noun clauses"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Conjunction & Connectors"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="The passive"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Reported speech"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Substitution and ellipsis"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Word order and emphasis"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Nominalisation"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="It and there"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.separation}>
              <TouchableOpacity style={styles.readingCard} onPress={() => navigation.navigate('ReadingPart1Lesson1')}>
                <Card
                  title="Prepositions"
                  colors={['#CBE3FF', '#CBE3FF']}
                />
                </TouchableOpacity>
            </View>
            <View style={styles.final}></View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  readingContainer: {
    flex: 1,
    backgroundColor: '#CBE3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(102, 102, 102, 0.4)',
    borderRadius: 20,
    elevation: 10,
    width: 370,
    height: '100%',
    marginTop: 10,
    marginBottom: 120,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 120,
  },
  readingCard: {
    alignItems: 'center',
  },
  separation: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 0,
  },
  final: {
    marginBottom: 30,
  }
});

export default Grammar;