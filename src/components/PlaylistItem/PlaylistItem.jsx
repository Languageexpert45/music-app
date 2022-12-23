import React from 'react';
import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';
import styles from './PlaylistItem.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import LikeButton from '../Bar/PlayerUI/PlayerSongInfo/Like/LikeButton';

const PlaylistItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.track}>
        <div className={styles.title}>
          <div className={styles.image}>
            <img className={styles.svg} src={note} alt="music"></img>
          </div>
          <div className="track__title-text">
            <a className={styles.link}>
              {props.track} <span className={styles.span}></span>
            </a>
          </div>
        </div>
        <div className={styles.author}>
          <a className={styles.author_link}>{props.artist}</a>
        </div>
        <div className={styles.album}>
          <a className={styles.album_link}>{props.album}</a>
        </div>
        <div className={styles.track__like_time_box}>
          <LikeButton />
          <span className={styles.track__time_text}>{props.time}</span>
        </div>
      </div>
    </div>
  );
};
export default PlaylistItem;
