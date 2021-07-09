import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from 'react';
import * as S from './styles'
import { useAuth } from '../../hooks/auth';

const LoginScreen: React.FC = () => {
  const { login } = useAuth();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar style="auto" />
        <S.BInput 
        placeholder='Email' 
        secureTextEntry={false} 
        onChangeText={text => setUserEmail(text)} 
        value={userEmail}>
        </S.BInput>
        <S.BInput 
        placeholder='Senha' 
        secureTextEntry={true} 
        onChangeText={text => setUserPassword(text)} 
        value={userPassword}>
        </S.BInput>
        <S.LoginButton onPress={() => login({email: `${userEmail}`, password: `${userPassword}`})}>
          <S.ButtonText>Log In</S.ButtonText>
        </S.LoginButton>
      </View>
    );
  }

  export default LoginScreen;