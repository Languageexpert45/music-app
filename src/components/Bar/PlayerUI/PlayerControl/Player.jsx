import React, { useState, useEffect, useRef } from 'react';
import prev from '../../../../img/icon/prev.svg';
import play from '../../../../img/icon/play.svg';
import pause from '../../../../img/icon/pause.svg';
import next from '../../../../img/icon/next.svg';
import repeat from '../../../../img/icon/repeat.svg';
import shuffle from '../../../../img/icon/shuffle.svg';
import styles from './Player.module.scss';
import PlayerSongInfo from '../PlayerSongInfo/PlayerSongInfo';
import PlayerSongInfoSkeleton from '../../../../SkeletonComponents/PlayerSongInfoSkeleton';
import Volume from '../../PlayerUI/VolumeControl/Volume';

const Player = ({ tracks, id }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(tracks));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const [playlist, setPlaylist] = useState();
  const [isMuted, setIsMuted] = useState(false);
  const [volumeProgress, setVolumeProgress] = useState(0);

  useEffect(() => {
    if (tracks) {
      setPlaylist(tracks);
    }
  }, [tracks]);

  useEffect(() => {
    if (id) {
      audioRef.current.pause();
      const track = playlist.find((track) => track.id === id);
      audioRef.current = new Audio(track.track_file);
      setTrackProgress(audioRef.current.currentTime);
      setTrackIndex(playlist.indexOf(track));
      setIsMuted(false);
    }
  }, [id]);

  const onPlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };
  const handleMuteTrack = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (isMuted) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  }, [isMuted]);

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
    };
  }, []);

  // Handle setup when changing tracks

  useEffect(() => {
    if (playlist) {
      audioRef.current.pause();
      audioRef.current = new Audio(playlist[trackIndex].track_file);
      //   setCurrentTrack(playlist[trackIndex]);
      setTrackProgress(audioRef.current.currentTime);
      setIsMuted(false);
    }

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
  };

  const onVolumeChange = (value) => {
    audioRef.current.volume = value/100
    setVolumeProgress(value)
  }

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(playlist.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < playlist.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <input
          className={styles.bar__player_progress}
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
              <div onClick={toPrevTrack} className={styles.player__btn_prev}>
                <img
                  className={styles.player__btn_prev_svg}
                  src={prev}
                  alt="prev"
                ></img>
              </div>
              <div className={`${styles.player__btn_play} ${styles._btn}`}>
                <img
                  onClick={onPlayPauseClick}
                  className={
                    isPlaying
                      ? `${styles.player__btn_play_svg} ${styles.hidden} `
                      : `${styles.player__btn_play_svg}`
                  }
                  src={play}
                  alt="play"
                ></img>
                <img
                  onClick={onPlayPauseClick}
                  className={
                    !isPlaying
                      ? `${styles.player__btn_pause_svg} ${styles.hidden} `
                      : `${styles.player__btn_play_svg}`
                  }
                  src={pause}
                  alt="pause"
                ></img>
              </div>
              <div onClick={toNextTrack} className={styles.player__btn_next}>
                <img
                  className={styles.player__btn_next_svg}
                  src={next}
                  alt="next"
                ></img>
              </div>
              <div
                className={`${styles.player__btn_repeat} ${styles._btn_icon}`}
              >
                <img
                  className={styles.player__btn_repeat_svg}
                  src={repeat}
                  alt="repeat"
                ></img>
              </div>
              <div
                className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}
              >
                <img
                  className={styles.player__btn_shuffle_svg}
                  src={shuffle}
                  alt="shuffle"
                ></img>
              </div>
            </div>
            <PlayerSongInfo />
            {/* {props.loading && <PlayerSongInfoSkeleton />}
            {!props.loading && <PlayerSongInfo />} */}
          </div>
          <Volume mute={handleMuteTrack} isMuted={isMuted} onVolumeChange={onVolumeChange} volumeProgress={volumeProgress} />
        </div>
      </div>
    </div>
  );
};
export default Player;
