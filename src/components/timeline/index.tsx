import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { useAuth } from "../../hooks/auth";
import { InterfaceTimeline, ProcessedPiu } from "../../models";
import PiuCard from "../piu";
import GrayHeart from '../../assets/icons/gray-heart-icon.png';
import PinkHeart from '../../assets/icons/pink-heart-icon.png';
import GrayStar from '../../assets/icons/gray-star-icon.png';
import YellowStar from '../../assets/icons/yellow-star-icon.png';

const Timeline: React.FC<InterfaceTimeline> = ({pius}) => {
  const { user } = useAuth();
  
  const [ processedPius, setProcessedPius ] = useState<ProcessedPiu[]>([]);

  const getProcessedPius =  () => {
    const array = [];
    for(let i = 0; i<pius.length; i++) {
      let liked = GrayHeart;
      pius[i].likes.map((like) => {
        if (like.user.id === user.id) liked = PinkHeart;
      })
      let favd = GrayStar;
      user.favorites.map((fav) => {
        if (fav.id === pius[i].id) favd = YellowStar;
      })
      let mine = false;
      if (pius[i].user.username === user.username) mine = true;
      array.push({
        id: pius[i].id,
        user: pius[i].user,
        likes: pius[i].likes,
        text: pius[i].text,
        favd: favd,
        liked: liked,
        mine: mine,
      })
    }
    setProcessedPius(array);
  }

  useEffect(() => {
    getProcessedPius();
  },[pius])

  return(
    <>
      {processedPius.map((piu) => {
        return (
        <PiuCard
          id={piu.id}
          user={piu.user}
          likes={piu.likes}
          text={piu.text}
          liked={piu.liked}
          favd={piu.favd}
          mine={piu.mine}
        />
      )})}
    </>
  );
}

export default Timeline;