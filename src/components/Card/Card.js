import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Card = ({ title, description, colors }) => {
  return (
      <View style={styles.card}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </LinearGradient>
      </View>
  );
};

{/* <Box alignItems="center">
      <Pressable maxW="96">
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
              <HStack alignItems="center">
                <Badge colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Business
                </Badge>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  1 month ago
                </Text>
              </HStack>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Marketing License
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                    Read More
                  </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                    Read More
                  </Text>}
              </Flex>
            </Box>;
      }}
      </Pressable>
    </Box>; */}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    opacity: 0.95,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    overflow: 'hidden',
    marginTop: 20,
    height: 90,
  },
  gradient: {
    borderRadius: 8,
    padding: 16,
    height: 90,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
});

export default Card;