import React, { useState, useEffect } from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import watch from '../../img/icon/watch.svg';
import styles from './CenterblockContent.module.scss';
import SongsSkeletonLoader from '../../SkeletonComponents/SongsSkeletonLoader';
import { useParams } from 'react-router-dom';
import { store } from '../../store/store';
import { useGetFavoritesQuery } from '../../services/favorites';

const FavoritesContent = ({ tracks, trackId }) => {
  const { data: favTracks, error, isLoading } = useGetFavoritesQuery();

   useEffect(() => {
     if (favTracks) {
       tracks(favTracks);
     }
   }, [favTracks]);

   const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];
   const skeletonItems = skeletonArray.map(index => (
     <SongsSkeletonLoader key={index} />
   ));

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
         <div className={styles.playlist}>{skeletonItems}</div>
       ) : favTracks ? (
         <div className={styles.playlist}>
           {favTracks.map((element, index) => (
             <PlaylistItem
               trackId={trackId}
               id={element.id}
               track={element.name}
               favTracks={favTracks}
               artist={element.author}
               album={element.album}
               time={element.duration_in_seconds}
               key={index}
             />
           ))}
         </div>
       ) : null}
     </div>
   );
};

export default FavoritesContent;
