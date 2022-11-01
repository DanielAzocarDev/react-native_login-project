import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Prop {
  text: string;
  children: JSX.Element[];
}
export const LoginWithSection = ({text, children}: Prop) => {
  return (
    <View
      style={{
        marginBottom: 70,
      }}>
      <Text style={[styles.text, {marginBottom: 15}]}>{text}</Text>

      <View style={styles.loginWithContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  loginWithContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
