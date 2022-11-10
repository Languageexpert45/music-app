import React from 'react';
import prev from '../img/icon/prev.svg';
import play from '../img/icon/play.svg';
import next from '../img/icon/next.svg';
import repeat from '../img/icon/repeat.svg';
import shuffle from '../img/icon/shuffle.svg';
import note from '../img/icon/note.svg';
import like from '../img/icon/like.svg';
import dislike from '../img/icon/dislike.svg';
import volume from '../img/icon/volume.svg';
import styles from './Bar.module.css'

const Bar = () => {
    return (
        <div className={styles.bar}>
            <div className={styles.bar__content}>
                <div className={styles.bar__player_progress}></div>
                <div className={styles.bar__player_block}>
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
                        
                        <div className={styles.player__track_play}>
                            <div className={styles.track_play__contain}>
                                <div className={styles.track_play__image}>
                                    <img className={styles.track_play__svg} src={note} alt="music"></img>
                                </div>
                                <div className={styles.track_play__author}>
                                    <a className={styles.track_play__author_link} href="http://">Ты та...</a>
                                </div>
                                <div className={styles.track_play__album}>
                                    <a className={styles.track_play__album_link} href="http://">Баста</a>
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
                    </div>
                    <div className={styles.bar__volume_block}>
                        <div className={styles.volume__content}>
                            <div className={styles.volume__image}>
                                <img className={styles.volume__svg} src={volume} alt="volume"></img>
                            </div>
                            <div className={`${styles.volume__progress} ${styles._btn}`}>
                                <input className={`${styles.volume__progress_line} ${styles._btn}`} type="range" name="range"></input>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bar