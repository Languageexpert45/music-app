import React from 'react';
import volume from '../../../../img/icon/volume.svg';
import styles from './Volume.module.scss'
import VolumeButton from './VolumeButton';
import { useState } from 'react';

const Volume = ({ mute, isMuted, onVolumeChange, volumeProgress }) => {


  return (
    <div className={styles.bar__volume_block}>
      <div className={styles.volume__content}>
        <div onClick={mute} className={styles.volume__image}>
          <VolumeButton isMuted={isMuted} />
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input
            className={`${styles.volume__progress_line} ${styles._btn}`}
            type="range"
            name="range"
            onChange={(e) => onVolumeChange(e.target.value)}
            step="1"
            value={isMuted ? 0 : volumeProgress * 100}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Volume