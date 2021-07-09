import React from 'react';
import * as S from '../../pages/LandingScreen/styles';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <S.container>
      <StatusBar style='dark'/>
      <S.EntryPage>
        <S.Logo source={require('../../assets/logo.png')} />
        <Text>Seja bem vindo ao Piupiuwer</Text>
        <View>
          <Text>Já tem uma conta?</Text>
          <S.EntryButtons onPress={()=>{navigate('Login')}}>
            <S.EntryButtonsText>Entre</S.EntryButtonsText>
          </S.EntryButtons>
          <Text>Crie uma conta</Text>
          <S.EntryButtons onPress={()=>{navigate('SignUp')}}>
            <S.EntryButtonsText>Cadastre-se</S.EntryButtonsText>
          </S.EntryButtons>
        </View>
      </S.EntryPage>
    </S.container>
  );
}

export default LandingScreen;