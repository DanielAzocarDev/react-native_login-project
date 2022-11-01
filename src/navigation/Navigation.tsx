import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {LandingScreen} from '../screens/landingScreen/LandingScreen';
import {LoginScreen} from '../screens/loginScreen/LoginScreen';
import {SignupScreen} from '../screens/signupScreen/SignupScreen';

export type RootStackParams = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
