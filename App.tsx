import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LandingScreen} from './src/screens/landingScreen/LandingScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LandingScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
