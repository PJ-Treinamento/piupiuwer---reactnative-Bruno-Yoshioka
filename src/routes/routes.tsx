import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks/auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const { token } = useAuth();
  
  return (
    <NavigationContainer>
      {token? <AppStack/> : <AuthStack/> }
    </NavigationContainer>
  );
}
