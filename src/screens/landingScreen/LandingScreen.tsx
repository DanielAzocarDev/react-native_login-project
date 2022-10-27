import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
export const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{height: screenHeight * 0.55, justifyContent: 'center'}}>
        <ImageBackground
          source={require('../../assets/background.jpg')}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.subtitle}>it is time to</Text>
            <Text style={styles.title}>To be part of</Text>
            <Text style={styles.text}>something greater</Text>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: screenWidth * 0.2,
        }}>
        <Pressable
          style={{
            backgroundColor: '#232323',
            borderColor: '#474747',
            borderWidth: 1,
            borderRadius: 7,
            paddingVertical: 10,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#D9D9D9',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Log in
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#CFCFCF',
            borderRadius: 7,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Sign up
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingTop: 10,
          }}>
          <Text
            style={{
              color: '#D9D9D9',
              fontSize: 10,
              textDecorationLine: 'underline',
              letterSpacing: 1,
              textAlign: 'right',
            }}>
            Create new account
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#05030F',
  },
  landingText: {},
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 12,
  },
});