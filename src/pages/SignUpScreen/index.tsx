import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

const SignUpScreen: React.FC = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignUp Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

export default SignUpScreen;