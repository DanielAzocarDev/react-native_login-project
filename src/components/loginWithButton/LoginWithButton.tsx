import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

interface Props {
  action: () => void;
  children: JSX.Element;
}
export const LoginWithButton = ({action, children}: Props) => {
  return (
    <Pressable style={styles.loginWithBtn} onPress={action}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loginWithBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#414141',
    borderColor: '#727272',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    paddingVertical: 8,
  },
});
