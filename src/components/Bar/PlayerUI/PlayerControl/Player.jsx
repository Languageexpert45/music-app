import React, { useState, useEffect, useRef  } from "react";
import prev from '../../../../img/icon/prev.svg'
import play from '../../../../img/icon/play.svg';
import pause from '../../../../img/icon/pause.svg';
import next from '../../../../img/icon/next.svg';
import repeat from '../../../../img/icon/repeat.svg';
import shuffle from '../../../../img/icon/shuffle.svg';
import styles from './Player.module.scss';
import PlayerSongInfo from '../PlayerSongInfo/PlayerSongInfo'
import PlayerSongInfoSkeleton from '../../../../SkeletonComponents/PlayerSongInfoSkeleton';
import Volume from '../../PlayerUI/VolumeControl/Volume';





const Player = (props) => {



    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(props.tracks[0].audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);
    const { duration } = audioRef.current;

    const onPlayPauseClick = () => {
        setIsPlaying(!isPlaying) 
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);


    useEffect(() => {
    // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    // Handle setup when changing tracks
        useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(props.tracks[0].audioSrc);
            setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex]);


    const startTimer = () => {
	  // Clear any timers already running
	  clearInterval(intervalRef.current);

	  intervalRef.current = setInterval(() => {
	    if (audioRef.current.ended) {
	      toNextTrack();
	    } else {
	      setTrackProgress(audioRef.current.currentTime);
	    }
	  }, [1000]);
	}


    const onScrub = (value) => {
	// Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = () => {
    // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    }


    
    
    return (

        <div className={styles.bar}>
            <div className={styles.bar__content}>
                <input className={styles.bar__player_progress}
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                    />
                <div className={styles.bar__player_block}>
                    <div className={styles.bar__player}>
                        <div className={styles.player__controls}>
                            <div className={styles.player__btn_prev}>
                                <img className={styles.player__btn_prev_svg} src={prev} alt="prev"></img>
                            </div>
                            <div className={`${styles.player__btn_play} ${styles._btn}`}>
                                <img onClick={onPlayPauseClick} className={isPlaying? `${styles.player__btn_play_svg} ${styles.hidden} ` : `${styles.player__btn_play_svg}`} src={play} alt="play"></img>
                                <img onClick={onPlayPauseClick} className={!isPlaying? `${styles.player__btn_pause_svg} ${styles.hidden} ` : `${styles.player__btn_play_svg}`} src={pause} alt="pause"></img>
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
                        {!props.loading && <PlayerSongInfo {...props} />}
                    </div>
                    <Volume />
                </div>
            </div>
        </div>
        
        
                    
    )
}
export default Player