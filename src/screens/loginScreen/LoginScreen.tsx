import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Layout} from '../../components/layout/Layout';
import {RootStackParams} from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const LoginScreen = ({navigation}: Props) => {
  return (
    <Layout>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 70,
          }}>
          <Pressable style={styles.goBack} onPress={() => navigation.pop()}>
            <Text style={[styles.text]}>{'<'}</Text>
          </Pressable>
          <Text style={[styles.text, styles.title]}>Log in</Text>
        </View>

        <View
          style={{
            marginBottom: 70,
          }}>
          <Text style={[styles.text, {marginBottom: 15}]}>
            Log in with one of the following steps
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable style={styles.loginWithBtn}>
              <Image
                source={require('../../assets/google-icon.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </Pressable>
            <Pressable style={styles.loginWithBtn}>
              <Image
                source={require('../../assets/facebook-icon.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </Pressable>
            <Pressable style={styles.loginWithBtn}>
              <Image
                source={require('../../assets/twitter-icon.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </Pressable>
          </View>
        </View>

        <View>
          <View style={styles.inputField}>
            <Text style={[styles.text, styles.label]}>Email</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              style={styles.input}
            />
          </View>
          <View>
            <Text style={[styles.text, styles.label]}>Password</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="password"
              textContentType="password"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Pressable style={styles.loginBtn}>
            <Text style={styles.loginText}>Log in</Text>
          </Pressable>

          <Pressable style={styles.signupBtn}>
            <Text style={[styles.text, styles.signupText]}>
              Don't have an account?{' '}
              <Text style={styles.signupTextBold}>Sign up</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
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
  inputField: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#414141',
    borderColor: '#727272',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnContainer: {
    marginTop: 70,
  },
  loginBtn: {
    backgroundColor: '#CFCFCF',
    borderRadius: 7,
    paddingVertical: 10,
  },
  loginText: {
    color: '#222222',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupBtn: {
    marginTop: 15,
  },
  signupText: {
    textAlign: 'center',
  },
  signupTextBold: {
    fontWeight: 'bold',
  },
});
