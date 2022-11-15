import React from 'react';
import prev from '../../../../../img/icon/prev.svg'
import play from '../../../../../img/icon/play.svg';
import next from '../../../../../img/icon/next.svg';
import repeat from '../../../../../img/icon/repeat.svg';
import shuffle from '../../../../../img/icon/shuffle.svg';
import styles from './Player.module.css';
import PlayerSongInfo from '../PlayerSongInfo/PlayerSongInfo'
import PlayerSongInfoSkeleton from '../../../../SkeletonComponents/PlayerSongInfoSkeleton';
const Player = (props) => {
    return (
        <div className={styles.bar__player}>
            <div className={styles.player__controls}>
                <div className={styles.player__btn_prev}>
                    <img className={styles.player__btn_prev_svg} src={prev} alt="prev"></img>
                </div>
                <div className={`${styles.player__btn_play} ${styles._btn}`}>
                    <img className={styles.player__btn_play_svg} src={play} alt="play"></img>
                </div>
                <div className={styles.player__btn_next}>
                    <img className={styles.player__btn_next_svg} src={next} alt="next"></img>
                </div>
                <div className={`${styles.player__btn_repeat} ${styles._btn_icon}`}>
                    <img className={styles.player__btn_repeat_svg} src={repeat} alt="repeat"></img>
                </div>
                <div className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}>
                    <img className={styles.player__btn_shuffle_svg} src={shuffle} alt="shuffle"></img>
                </div>
            </div>
            {props.loading && <PlayerSongInfoSkeleton/>}
            {!props.loading && <PlayerSongInfo songInfoURL= {props.songInfoURL} artistInfoURL= {props.artistInfoURL} songName={props.songName} artistName={props.artistName} />}
            
        </div>
                    
    )
}
export default Player