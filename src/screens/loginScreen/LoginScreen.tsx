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
import {AuthHeader} from '../../components/authHeader/AuthHeader';
import {InputField} from '../../components/inputField/InputField';
import {Layout} from '../../components/layout/Layout';
import {LoginWithButton} from '../../components/loginWithButton/LoginWithButton';
import {LoginWithSection} from '../../components/loginWithSection/LoginWithSection';
import {RootStackParams} from '../../navigation/Navigation';
import {theme} from '../../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const LoginScreen = ({navigation}: Props) => {
  return (
    <Layout>
      <View>
        <AuthHeader action={() => navigation.pop()} title="Log in" />

        <LoginWithSection text="Log in with one of the following steps">
          <LoginWithButton action={() => console.log('Google')}>
            <Image
              source={require('../../assets/google-icon.png')}
              style={styles.iconSize}
            />
          </LoginWithButton>
          <LoginWithButton action={() => console.log('facebook')}>
            <Image
              source={require('../../assets/facebook-icon.png')}
              style={styles.iconSize}
            />
          </LoginWithButton>
          <LoginWithButton action={() => console.log('twitter')}>
            <Image
              source={require('../../assets/twitter-icon.png')}
              style={styles.iconSize}
            />
          </LoginWithButton>
        </LoginWithSection>

        <View>
          <InputField label="Email">
            <TextInput
              keyboardType="email-address"
              placeholder="Enter your email here"
              placeholderTextColor="#727272"
              textContentType="emailAddress"
              style={styles.input}
            />
          </InputField>
          <InputField label="Password">
            <TextInput
              keyboardType="email-address"
              placeholder="Enter your password here"
              placeholderTextColor="#727272"
              textContentType="password"
              style={styles.input}
            />
          </InputField>
        </View>

        <View style={styles.btnContainer}>
          <Pressable style={styles.loginBtn}>
            <Text style={styles.loginText}>Log in</Text>
          </Pressable>

          <Pressable style={styles.signupBtn}>
            <Text style={[theme.text, styles.signupText]}>
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
  iconSize: {
    width: 30,
    height: 30,
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
