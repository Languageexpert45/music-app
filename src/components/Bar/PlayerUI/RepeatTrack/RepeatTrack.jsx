import React from 'react';
import styles from './RepeatTrack.module.scss';
import RepeatButton from './RepeatButton';
import { useState } from 'react';

const Repeat = ({setIsRepeated, isRepeated }) => {
   const handleRepeated = () => {
    setIsRepeated(!isRepeated);
  };
  return (
    <div
      onClick={handleRepeated}
      className={`${styles.player__btn_repeat} ${styles._btn_icon}`}
    >
      <RepeatButton isRepeated={isRepeated} />
    </div>
  );
};
export default Repeat;
