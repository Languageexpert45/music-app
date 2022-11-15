import React from 'react';
import styles from './SongsSkeletonLoader.module.css'

const SongsSkeletonLoader = () => {

  return (
    <div className={styles.track}>
      <div className={styles.trackIcon}></div>
      <div className={styles.trackName}></div>
      <div className={styles.trackArtist}></div>
      <div className={styles.trackAlbum}></div>
      <div className={styles.trackTime}></div>
    </div>
  )
};

export default SongsSkeletonLoader