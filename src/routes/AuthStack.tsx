import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../pages/LandingScreen';
import LoginScreen from '../pages/LoginScreen';
import SignUpScreen from '../pages/SignUpScreen';

const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => {
  return(
    <Navigator initialRouteName="Landing" screenOptions={{headerShown: false}} >
      <Screen name="Landing" component={LandingScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  )
};

export default AuthStack;