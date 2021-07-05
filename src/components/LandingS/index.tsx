import * as S from './styles';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Button } from 'react-native';

function LandingScreen({ navigation } : any) {
    return (
      <S.container>
        <StatusBar style='dark'/>
        <Text>Landing Screen</Text>
        <Button
          title="Entre"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Cadastre-se"
          onPress={() => navigation.navigate('SignUp')}
        />
      </S.container>
    );
  }

export default LandingScreen;