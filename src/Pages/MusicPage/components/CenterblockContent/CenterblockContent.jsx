import React, { useState, useEffect } from "react";
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import watch from '../../../../img/icon/watch.svg';
import styles from './CenterblockContent.module.css';
import SongsSkeletonLoader from '../../../../SkeletonComponents/SongsSkeletonLoader'



const CenterblockContent = (props) => {

    const playlistElements = props.songs.map((element, index) => 
        <PlaylistItem 
            track={element.track} 
            artist={element.artist} 
            album={element.album} 
            time={element.time} 
            key={index}
        />
    )

    
    // const skeletonElements = props.skeleton.map((element, index) => 
    //     <SongsSkeletonLoader 
    //         key={index}
    //     />
    // )


    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <div className={`${styles.title__col} ${styles.col01}`}>ТРЕК</div>
                <div className={`${styles.title__col} ${styles.col02}`}>ИСПОЛНИТЕЛЬ</div>
                <div className={`${styles.title__col} ${styles.col03}`}>АЛЬБОМ</div>
                <div className={`${styles.title__col} ${styles.col04}`}>
                    <img className={styles.title__svg} src = {watch} alt="time"></img>
                </div>
            </div>
            <div className={styles.playlist}>
                {playlistElements}
            </div>
        </div>
    )
}

export default CenterblockContent