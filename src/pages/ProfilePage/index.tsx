import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import * as S from './styles'
import { Piu } from "../../models";
import api from '../../services/api';
import { useEffect } from 'react';
import Home from '../../assets/icons/home-icon.png';
import PinkProfileIcon from '../../assets/icons/pink-profile-icon.png';
import { ScrollView, Text, View } from 'react-native';
import AddIcon from '../../assets/icons/add-icon.png';
import { useNavigation } from '@react-navigation/native';
import MyTimeline from '../../components/myTimeline';


const ProfilePage: React.FC = () => {
  const { user, logout, postedNewPiu } = useAuth();
  const { navigate } = useNavigation();
  
  const [ pius, setPius ] = useState<Piu[]>([]);
  const [ reload, setReload ] = useState(0);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    const getPius = async () => {
      const response = await api.get("/pius");
      setPius(response.data);
    };
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
        <S.ProfileView>
          <S.ProfilePhotoView>
            <S.ProfilePhoto  source={{uri: `${user.photo}`}}/>
          </S.ProfilePhotoView>
          <S.UserInfo>
            <S.UserInfoText>
              {user.first_name+" "+user.last_name+"   @"+user.username}
            </S.UserInfoText>
            <S.UserInfoText>
              {user.followers.length+" followers   "+user.following.length+" following"}
            </S.UserInfoText>
          </S.UserInfo>
        </S.ProfileView>
        <S.TL>
          <S.Timeline>
            <MyTimeline pius={pius} search={search}/>
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
          <S.NavIcons source={Home} />
        </S.NavButtons>
        <S.NavButtons activeOpacity={0.5} onPress={() => {navigate('ProfilePage')}}>
          <S.NavIcons source={PinkProfileIcon}/>
        </S.NavButtons>
      </S.NavigationBar>
    </S.Container>
  );
};

export default ProfilePage;