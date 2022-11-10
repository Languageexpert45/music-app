import React from 'react'
import styles from './PlayerSongInfo.module.css'
import note from '../../../img/icon/note.svg';
import like from '../../../img/icon/like.svg';
import dislike from '../../../img/icon/dislike.svg';

const Player = (props) => {
    return (             
        <div className={styles.player__track_play}>
            <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                    <img className={styles.track_play__svg} src={note} alt="music"></img>
                </div>
                <div className={styles.track_play__author}>
                    <a className={styles.track_play__author_link} href="http://">{props.songName}</a>
                </div>
                <div className={styles.track_play__album}>
                    <a className={styles.track_play__album_link} href="http://">{props.artistName}</a>
                </div>
            </div>
            <div className={styles.track_play__like_dis}>
                <div className={`${styles.track_play__like} ${styles._btn_icon}`}>
                    <img className={styles.track_play__like_svg} src={like} alt="like"></img>
                </div>
                <div className={`${styles.track_play__dislike} ${styles._btn_icon}`}>
                    <img className={styles.track_play__dislike_svg} src={dislike} alt="dislike"></img>
                </div>
            </div>
        </div>
    )
}

export default Player