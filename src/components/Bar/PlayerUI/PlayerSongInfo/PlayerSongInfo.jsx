import React from 'react'
import styles from './PlayerSongInfo.module.scss'
import note from '../../../../img/icon/note.svg';
import PlayerLikeButton from './Like/PlayerLike/PlayerLikeButton';
import { useState, useEffect } from 'react';
import { useGetFavoritesQuery } from '../../../../services/favorites';

const PlayerSongInfo = ({ trackInfo, id, trackIndex }) => {
  const [trackAuthor, setTrackAuthor] = useState(undefined);

  const [trackName, setTrackName] = useState(undefined);

  const { data: favTracks, error, isLoading } = useGetFavoritesQuery();

  useEffect(() => {
    if (trackInfo) {
      setTrackAuthor(trackInfo.author);
      setTrackName(trackInfo.name);
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
        <PlayerLikeButton
          favTracks={favTracks}
          id={id}
          trackIndex={trackIndex}
        />
      </div>
    </div>
  );
};

export default PlayerSongInfo