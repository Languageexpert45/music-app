import React, { useState, useEffect } from 'react';
import Like_Dislike_logic_visual from './Like_Dislike_logic&visual';

const LikeButton = ({ id }) => {
  const [likeDislike, setLikeDislike] = useState('transparent');
  const [stroke, setStroke] = useState('#ACACAC');

  return (
    <Like_Dislike_logic_visual
      id={id}
      likeDislike={likeDislike}
      setLikeDislike={setLikeDislike}
      hover={stroke}
      setHover={setStroke}
    />
  );
};

export default LikeButton;
