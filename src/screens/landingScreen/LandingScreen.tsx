import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LandingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
});
