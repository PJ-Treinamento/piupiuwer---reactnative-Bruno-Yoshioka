import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import * as S from './styles'
import { Piu } from "../../models";
import api from '../../services/api';
import Timeline from '../../components/timeline';
import { useEffect } from 'react';
import SearchIcon from '../../assets/icons/search-icon.png';
import PinkHome from '../../assets/icons/pink-home-icon.png';
import ProfileIcon from '../../assets/icons/profile-icon.png';
import { ScrollView } from 'react-native';

const Feed: React.FC = () => {
  const { logout, token } = useAuth();
  const [ pius, setPius ] = useState<Piu[]>([]);
  const [ reload, setReload ] = useState(0);

  const getPius = async () => {
    const response = await api.get("/pius");
    setPius(response.data);
  };


  useEffect(() => {
    getPius();
  }, [reload]);

  return(
    <S.Container >
      <StatusBar style="auto" />
        <S.FeedHeader>
          <S.LogoutButton onPress={() => {logout(); setReload(reload+1)}}>
            <S.ButtonText>Log Out</S.ButtonText>
          </S.LogoutButton>
          <S.SearchButton>
            <S.NavIconsSearch source={SearchIcon}/>
          </S.SearchButton>
        </S.FeedHeader>
      <ScrollView>
        <S.Timeline>
          <Timeline pius={pius}/>
        </S.Timeline>
      </ScrollView>
      <S.NavigationBar>
          <S.NavButtons activeOpacity={0.9}>
            <S.NavIcons source={PinkHome}/>
          </S.NavButtons>
          <S.NavButtons activeOpacity={0.9}>
            <S.NavIcons source={ProfileIcon}/>
          </S.NavButtons>
        </S.NavigationBar>
    </S.Container>
  );
};

export default Feed;