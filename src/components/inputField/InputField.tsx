import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/AppTheme';

interface Props {
  label?: string;
  children: JSX.Element;
}

export const InputField = ({label = 'Input', children}: Props) => {
  return (
    <View style={styles.inputField}>
      <Text style={[theme.text, styles.label]}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 15,
  },
});
