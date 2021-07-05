import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';

function SignUpScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignUp Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

export default SignUpScreen;