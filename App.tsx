import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {LandingScreen} from './src/screens/landingScreen/LandingScreen';

export const App = () => {
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <LandingScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
