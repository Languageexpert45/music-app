import React from 'react'
import styles from './PlayerSongInfo.module.scss'
import note from '../../../../img/icon/note.svg';
import LikeButton from './Like/LikeButton';
import { useState, useEffect } from 'react';

const PlayerSongInfo = ({ trackInfo }) => {
  const [trackAuthor, setTrackAuthor] = useState(undefined);

  const [trackName, setTrackName] = useState(undefined);

  const [trackId, setTrackId] = useState(undefined);

  useEffect(() => {
    if (trackInfo) {
      setTrackAuthor(trackInfo.author);
      setTrackName(trackInfo.name);
      setTrackId(trackInfo.id);
    }
  });

  return (
    <div className={styles.player__track_play}>
      <div className={styles.track_play__contain}>
        <div className={styles.track_play__image}>
          <img className={styles.track_play__svg} src={note} alt="music"></img>
        </div>
        <div className={styles.track_play__author}>
          <a className={styles.track_play__author_link} href="#">
            {trackAuthor}
          </a>
        </div>
        <div className={styles.track_play__album}>
          <a className={styles.track_play__album_link} href="#">
            {trackName}
          </a>
        </div>
      </div>
      <div className={styles.track_play__like_dis}>
        <LikeButton id={trackId} />
      </div>
    </div>
  );
};

export default PlayerSongInfo