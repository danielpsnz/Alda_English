import React from 'react';
import {
    StyleSheet, 
    View, 
    TouchableOpacity, 
    ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function HomeScreen({ isExtended, setIsExtended }) {
    return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../../../assets/images/Home.png')}
            style={styles.bgImage}
            resizeMode='cover'
            >
                <View style={styles.section}>
                    <Text homeTitle>
                        Your tasks for today
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text color="#19e7f7" size={15}>
                        The smartest way to build your mobile app
                    </Text>
                    <Text size={30} bold white style={styles.title}>
                        React Native starter
                    </Text>
                </View>
                <View style={[styles.section, styles.sectionLarge]}>
                    
                </View>
            </ImageBackground>
        </View>
    )
}