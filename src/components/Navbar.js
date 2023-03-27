import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarLink} onPress={() => navigation.navigate('Practice')}>
          <FontAwesome name="book" style={styles.navbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarLink} onPress={() => navigation.navigate('Exams')}>
          <FontAwesome name="tasks" style={styles.navbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarLink} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" style={styles.navbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarLink} onPress={() => navigation.navigate('Audio')}>
          <FontAwesome name="microphone" style={styles.navbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarLink} onPress={() => navigation.navigate('Settings')}>
          <FontAwesome name="gear" style={styles.navbarIcon} />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(124, 124, 124, 0.47)',
        height: 80,
        paddingHorizontal: 20,
        position: 'absolute',
        width: 350,
        left: 20,
        top: 738,
        borderRadius: 20,
        elevation: 4,
      },
      navbarLink: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      navbarIcon: {
        color: '#292D32',
        fontSize: 30,
        marginRight: 10,
      },
});