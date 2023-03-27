import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from "./components/Card";

export default function App() {
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

      <TouchableOpacity style={styles.icon}>
        <Icon name="tasks" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="book" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="home" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="microphone" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="cog" size={30} color="#fff" />
      </TouchableOpacity>
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
});
