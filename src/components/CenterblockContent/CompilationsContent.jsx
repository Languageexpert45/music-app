import React, { useState, useEffect } from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import watch from '../../img/icon/watch.svg';
import styles from './CenterblockContent.module.scss';
import SongsSkeletonLoader from '../../SkeletonComponents/SongsSkeletonLoader';
import { useParams } from 'react-router-dom';
import { useGetSelectionsQuery } from '../../services/selections';
import { useDispatch } from 'react-redux';

const CompilationContent = ({ tracks, trackId }) => {
  const { id } = useParams();

  const { data: selections, error, isLoading } = useGetSelectionsQuery();

  const compilationsTracks = selections.find(
    (trackList) => trackList.id === Number(id)
  );

  useEffect(() => {
    if (compilationsTracks) {
      tracks(compilationsTracks.items);
    }
  }, [compilationsTracks]);

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <div className={`${styles.title__col} ${styles.col01}`}>ТРЕК</div>
        <div className={`${styles.title__col} ${styles.col02}`}>
          ИСПОЛНИТЕЛЬ
        </div>
        <div className={`${styles.title__col} ${styles.col03}`}>АЛЬБОМ</div>
        <div className={`${styles.title__col} ${styles.col04}`}>
          <img className={styles.title__svg} src={watch} alt="time"></img>
        </div>
      </div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : selections ? (
        <div className={styles.playlist}>
          {compilationsTracks
            ? compilationsTracks.items.map((element, index) => (
                <PlaylistItem
                  trackId={trackId}
                  id={element.id}
                  track={element.name}
                  artist={element.author}
                  album={element.album}
                  time={element.duration_in_seconds}
                  key={index}
                />
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default CompilationContent;
