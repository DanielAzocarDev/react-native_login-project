import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  label?: string;
  children: JSX.Element;
}

export const InputField = ({label = 'Input', children}: Props) => {
  return (
    <View style={styles.inputField}>
      <Text style={[styles.text, styles.label]}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  inputField: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 15,
  },
});
