import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import * as S from './styles'
import { Piu } from "../../models";
import api from '../../services/api';
import Timeline from '../../components/timeline';
import { useEffect } from 'react';
import PinkHome from '../../assets/icons/pink-home-icon.png';
import ProfileIcon from '../../assets/icons/profile-icon.png';
import { ScrollView } from 'react-native';
import AddIcon from '../../assets/icons/add-icon.png';
import { useNavigation } from '@react-navigation/native';


const Feed: React.FC = () => {
  const { logout, postedNewPiu } = useAuth();
  const { navigate } = useNavigation();
  
  const [ pius, setPius ] = useState<Piu[]>([]);
  const [ reload, setReload ] = useState(0);
  const [ search, setSearch ] = useState('');

  const getPius = async () => {
    const response = await api.get("/pius");
    setPius(response.data);
  };

  useEffect(() => {
    getPius();
  }, [reload, postedNewPiu]);

  return(
    <S.Container >
      <StatusBar style="auto" />
        <S.FeedHeader>
          <S.LogoutButton onPress={() => {logout(); setReload(reload+1)}}>
            <S.ButtonText>Log Out</S.ButtonText>
          </S.LogoutButton>
          <S.BInput 
          placeholder='Pesquise no Piupiuwer' 
          onChangeText={text => setSearch(text)} 
          value={search}>
          </S.BInput>
        </S.FeedHeader>
      <ScrollView showsVerticalScrollIndicator={false} >
        <S.TL>
          <S.Timeline>
            <Timeline pius={pius} search={search}/>
          </S.Timeline>
        </S.TL>
      </ScrollView>
      <S.AddButtonView>
        <S.AddButton onPress={() => {navigate('PostPage')}}>
          <S.AddImage source={AddIcon}/>
        </S.AddButton>
      </S.AddButtonView>
      <S.NavigationBar>
        <S.NavButtons activeOpacity={0.5} onPress={() => {navigate('Feed')}}>
          <S.NavIcons source={PinkHome} />
        </S.NavButtons>
        <S.NavButtons activeOpacity={0.5} onPress={() => {navigate('Feed')}}>
          <S.NavIcons source={ProfileIcon}/>
        </S.NavButtons>
      </S.NavigationBar>
    </S.Container>
  );
};

export default Feed;