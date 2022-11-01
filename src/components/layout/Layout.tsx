import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
interface Props {
  children: JSX.Element;
}
export const Layout = ({children}: Props) => {
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
