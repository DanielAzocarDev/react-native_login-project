import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Navigation} from './src/navigation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
