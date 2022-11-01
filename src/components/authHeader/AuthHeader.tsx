import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
  action: () => void;
}

export const AuthHeader = ({action, title}: Props) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable style={styles.goBack} onPress={action}>
        <Text style={[styles.text]}>{'<'}</Text>
      </Pressable>
      <Text style={[styles.text, styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
  },
  text: {
    color: 'white',
  },
  goBack: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#414141',
    borderColor: '#727272',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
  },
});
