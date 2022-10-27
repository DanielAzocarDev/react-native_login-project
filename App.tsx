import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LandingScreen} from './src/screens/landingScreen/LandingScreen';

export const App = () => {
  return <LandingScreen />;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
});
