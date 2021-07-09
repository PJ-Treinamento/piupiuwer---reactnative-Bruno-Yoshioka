import React, { useState } from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/auth";
import { ProcessedPiu, PiuId } from "../../models";
import api from "../../services/api";
import * as S from './styles';
import GrayHeart from '../../assets/icons/gray-heart-icon.png';
import PinkHeart from '../../assets/icons/pink-heart-icon.png';
import GrayStar from '../../assets/icons/gray-star-icon.png';
import YellowStar from '../../assets/icons/yellow-star-icon.png';

const PiuCard: React.FC<ProcessedPiu> = ({id, user, likes, text, liked, favd, mine} : ProcessedPiu) => {
  const { user: myUser } = useAuth();
  const [ isLiked, setIsLiked ] = useState(liked);
  const [ isFavd, setIsFavd ] = useState(favd);
  const [ likeCounter, setLikeCounter] = useState(likes.length);
  const [displayed, setDisplayed ] = useState(true);

  const likePiu = async ({id} : PiuId) => {
    const response = await api.post('/pius/like', {'piu_id': id});
    if (response.data.operation === "like") {
      setIsLiked(PinkHeart);
      setLikeCounter(likeCounter+1);
    } else {
      setIsLiked(GrayHeart);
      setLikeCounter(likeCounter-1);
    }	
  };

  const FavPiu = async ({id} : PiuId) => {
		if(isFavd === GrayStar) {
			setIsFavd(YellowStar);
			await api.post('/pius/favorite', {'piu_id': id});
		} else {
			setIsFavd(GrayStar);
			await api.post('/pius/unfavorite', {'piu_id': id});
		}	
	};

  const deletePiu = async () => {
		if (user.username === myUser.username) {
			await api.delete('/pius', 
		{	data : { piu_id : id}}
		);
    setDisplayed(false);
		}
	}

  return(
    <S.Card displayed={displayed}>
      <S.PhotoView>
        <S.UserPhoto source={{uri: `${user.photo}`}}/>
      </S.PhotoView>
      <S.ContentView>
        <S.ViewContentHeader>
          <S.HeaderText>
            <S.UserFirstName>{user.first_name}</S.UserFirstName>
            <S.UserUsername>@{user.username}</S.UserUsername>
          </S.HeaderText>
          <S.deleteIcon appears={mine} onPress={deletePiu}>
            <S.deleteButtonText>delete</S.deleteButtonText>
          </S.deleteIcon>
        </S.ViewContentHeader>
        <View>
          <S.PiuText>{text}</S.PiuText>
        </View>
        <S.Interactions>
          <S.InteractiveButtons onPress={()=> {likePiu({id: `${id}`})}}>
            <S.ButtonImage source={isLiked} />
            <Text>{likeCounter}</Text>
          </S.InteractiveButtons>
          <S.InteractiveButtons onPress={()=> {FavPiu({id: `${id}`})}}>
            <S.ButtonImage source={isFavd}/>
          </S.InteractiveButtons>
        </S.Interactions>
      </S.ContentView>
    </S.Card>
  );
}

export default PiuCard;