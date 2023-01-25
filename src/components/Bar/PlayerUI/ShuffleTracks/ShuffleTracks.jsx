import React from 'react';
import styles from './ShuffleTracks.module.scss';
import ShuffleButton from './ShuffleButton';
import { useState } from 'react';

const Shuffle = ({ setIsShuffled, isShuffled }) => {
  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
  };
  return (
    <div
      onClick={handleShuffle}
      className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}
    >
      <ShuffleButton isShuffled={isShuffled} />
    </div>
  );
};
export default Shuffle;
