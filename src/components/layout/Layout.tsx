import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const Layout = ({children}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#05030F',
    flex: 1,
  },
  container: {
    paddingHorizontal: 30,
  },
});
