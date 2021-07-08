import React, { useState } from "react";
import { useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/auth";
import { ProcessedPiu, PiuId } from "../../models";
import api from "../../services/api";
import * as S from './styles';
import GrayHeart from '../../assets/icons/gray-heart-icon.png';
import PinkHeart from '../../assets/icons/pink-heart-icon.png';
import GrayStar from '../../assets/icons/gray-star-icon.png';
import YellowStar from '../../assets/icons/yellow-star-icon.png';

const PiuCard: React.FC<ProcessedPiu> = ({id, user, likes, text, liked, favd, mine} : ProcessedPiu) => {
  const { token, user: myUser } = useAuth();
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

  useEffect(() => {
  }, [likeCounter, displayed]);

  return(
    <S.Card displayed={displayed}>
      <View>
        <Image source={{uri: `${user.photo}`}}/>
      </View>
      <View>
        <View>
          <View>
            <Text>{user.first_name}</Text>
            <Text>{user.username}</Text>
          </View>
          <S.deleteIcon appears={mine} onPress={deletePiu}>
            <Image source={require('../../assets/icons/trash-icon.png')}/>
          </S.deleteIcon>
        </View>
        <View>
          <Text>{text}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={isLiked}/>
            <Text>{likeCounter}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={isFavd}/>
          </TouchableOpacity>
        </View>
      </View>
    </S.Card>
  );
}

export default PiuCard;