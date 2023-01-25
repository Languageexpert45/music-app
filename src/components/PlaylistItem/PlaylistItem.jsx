import React from 'react';
import note from '../../img/icon/note.svg';
import styles from './PlaylistItem.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import LikeButton from '../Bar/PlayerUI/PlayerSongInfo/Like/LikeButton';
import { trackId } from '../../store/slices/tracks';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllTracksQuery } from '../../services/tracks';

const PlaylistItem = ({ id, track, artist, album, time, trackId }) => {
  const handleTrackId = () => {
    trackId(id);
  };

  function fancyTimeFormat(duration) {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
    let ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  }

  return (
    <div onClick={handleTrackId} className={styles.item}>
      <div className={`${styles.track}`}>
        <div className={styles.title}>
          <div className={styles.image}>
            <img className={styles.svg} src={note} alt="music"></img>
          </div>
          <div className="track__title-text">
            <a className={styles.link}>
              {track} <span className={styles.span}></span>
            </a>
          </div>
        </div>
        <div className={styles.author}>
          <a className={styles.author_link}>{artist}</a>
        </div>
        <div className={styles.album}>
          <a className={styles.album_link}>{album}</a>
        </div>
        <div className={styles.track__like_time_box}>
          <LikeButton id={id} />
          <span className={styles.track__time_text}>
            {fancyTimeFormat(time)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default PlaylistItem;
