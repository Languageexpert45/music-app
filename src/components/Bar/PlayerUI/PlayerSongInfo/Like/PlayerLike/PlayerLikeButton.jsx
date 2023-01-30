import React, { useState, useEffect } from 'react';
import PlayerLike_Dislike_logic_visual from './PlayerLike_Dislike_logic&visual';

const PlayerLikeButton = ({ id, favTracks, trackIndex }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [stroke, setStroke] = useState('#ACACAC');

  useEffect(() => {
    if (favTracks) {
      const favIds = favTracks.map((track) => track.id);
      if (favIds.includes(id)) {
        setIsLiked(true);
      }
    }
  }, [favTracks]);

  useEffect(() => {
    setIsLiked(false);
  }, [trackIndex]);

  return (
    <PlayerLike_Dislike_logic_visual
      id={id}
      isLiked={isLiked}
      setIsLiked={setIsLiked}
      hover={stroke}
      setHover={setStroke}
    />
  );
};

export default PlayerLikeButton;
