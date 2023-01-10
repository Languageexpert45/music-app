import React from 'react'
import styles from './PlayerSongInfo.module.scss'
import note from '../../../../img/icon/note.svg';
import LikeButton from './Like/LikeButton';

const PlayerSongInfo = () => {

    return (             
        <div className={styles.player__track_play}>
            <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                    <img className={styles.track_play__svg} src={note} alt="music"></img>
                </div>
                <div className={styles.track_play__author}>
                    <a className={styles.track_play__author_link} href='#'>{'author'}</a>
                </div>
                <div className={styles.track_play__album}>
                    <a className={styles.track_play__album_link} href='#'>{'song'}</a>
                </div>
            </div>
            <div className={styles.track_play__like_dis}>
                    <LikeButton />
            </div>
        </div>
    )
}

export default PlayerSongInfo