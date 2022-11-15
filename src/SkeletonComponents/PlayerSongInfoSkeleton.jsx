import React from 'react';
import styles from './PlayerSongInfoSkeleton.module.css';


const PlayerSongInfoSkeleton = (props) => {
    return (
       <div className={styles.container}>
            <div className={styles.container__image}></div>
            <div className={styles.container__info}>
                <div className={styles.container__info_song}></div>
                <div className={styles.container__info_artist}></div>
            </div>
       </div>
                    
    )
}
export default PlayerSongInfoSkeleton