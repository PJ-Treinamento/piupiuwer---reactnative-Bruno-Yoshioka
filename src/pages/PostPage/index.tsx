import React, { useState } from "react";
import { useAuth } from "../../hooks/auth";
import * as S from './styles';
import ExitIcon from '../../assets/icons/exit-icon.png';
import { useNavigation } from "@react-navigation/native";
import { PiuText } from "../../models";
import api from "../../services/api";

const PostPage: React.FC = () => {
  const { user, postedNewPiu, setPostedNewPiu } = useAuth();
  const { navigate } = useNavigation();

  const [ piuText, setPiuText ] = useState('');
  const [overLimit, setOverLimit] = useState(false);

  const handleChange = (e: any) => {
    const userInput = e.currentTarget?.value;
    setPiuText(userInput);
    userInput.length > 140 ? setOverLimit(true) : setOverLimit(false);
  };

  const postPiu = async ({ text }: PiuText) => {
    if (piuText.length >= 0 && piuText.length <= 140) {
      await api.post(
        "/pius",
        { text: text },
      );
      setPiuText("");
      setPostedNewPiu(postedNewPiu+1);
      navigate('Feed');
    }
  };

  return(
    <S.Container>
      <S.PostHeader>
        <S.ExitButton onPress={() => {navigate('Feed')}}>
          <S.ExitIcon source={ExitIcon}/>
        </S.ExitButton>
        <S.PiuButton onPress={() => postPiu({ text: `${piuText}` })}>
          <S.PiuButtonText>Piar</S.PiuButtonText>
        </S.PiuButton>
      </S.PostHeader>
      <S.ViewBody>
        <S.ViewPhoto>
          <S.UserPhoto source={{uri: `${user.photo}`}}/>          
        </S.ViewPhoto>
        <S.TextWrapper>
          <S.PullTopWrapper>
            <S.TxtArea
            overLimit={overLimit}
            placeholder='O que você está pensando?'
            placeholderTextColor='#FFFFFF'
            onChange={(e) => {
              handleChange(e);
            }} 
            value={piuText}
            multiline={true}
            >
            </S.TxtArea>
          </S.PullTopWrapper>
          <S.PullTopWrapper>
            <S.Contagem overLimit={overLimit}>{piuText.length}/140</S.Contagem>
          </S.PullTopWrapper>
        </S.TextWrapper>
      </S.ViewBody>
    </S.Container>
  );
}

export default PostPage;