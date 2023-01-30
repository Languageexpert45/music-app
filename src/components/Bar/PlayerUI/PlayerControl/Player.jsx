import React, { useState, useEffect, useRef } from 'react';
import prev from '../../../../img/icon/prev.svg';
import play from '../../../../img/icon/play.svg';
import pause from '../../../../img/icon/pause.svg';
import next from '../../../../img/icon/next.svg';
import styles from './Player.module.scss';
import PlayerSongInfo from '../PlayerSongInfo/PlayerSongInfo';
import PlayerSongInfoSkeleton from '../../../../SkeletonComponents/PlayerSongInfoSkeleton';
import Volume from '../../PlayerUI/VolumeControl/Volume';
import Shuffle from '../ShuffleTracks/ShuffleTracks';
import Repeat from '../RepeatTrack/RepeatTrack';

const Player = ({ tracks, id, searchedTrackId, searchedTracks, isLoading }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const [playlist, setPlaylist] = useState(undefined);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeProgress, setVolumeProgress] = useState(0.5);
  const [currentTrack, setCurrentTrack] = useState(undefined);
  const [trackInfo, setTrackInfo] = useState(undefined);
  const [shuffled, setShuffled] = useState(false);
  const [repeated, setRepeated] = useState(false);

  useEffect(() => {
    if (tracks) {
      setPlaylist(tracks);
    }
  }, [tracks]);

  // useEffect(() => {
  //   console.log(audioRef.current);
  // }, [audioRef.current]);

  useEffect(() => {
    if (repeated) {
      console.log('repeat!');
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }
  }, [repeated]);

  useEffect(() => {
    if (currentTrack === undefined && playlist) {
      setCurrentTrack(playlist[0]);
    }
  }, [playlist]);

  useEffect(() => {
    if (id) {
      setCurrentTrack(playlist.find((track) => track.id === id));
    }
  }, [id]);

  useEffect(() => {
    if (searchedTrackId) {
      setCurrentTrack(
        searchedTracks.find((track) => track.id === searchedTrackId)
      );
    }
  }, [searchedTrackId]);

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.pause();
      audioRef.current = new Audio(currentTrack.track_file);
      setTrackProgress(audioRef.current.currentTime);
      audioRef.current.volume = volumeProgress;
      setTrackIndex(playlist.indexOf(currentTrack));
      setIsMuted(false);
      setTrackInfo(currentTrack);
    }
  }, [currentTrack]);

  useEffect(() => {
    if (playlist) {
      setCurrentTrack(playlist[trackIndex]);
      setTrackProgress(audioRef.current.currentTime);
    }
  }, [trackIndex]);

  useEffect(() => {
    if (isMuted) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = volumeProgress;
    }
  }, [isMuted]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  });

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Handle setup when changing tracks

  useEffect(() => {
    setRepeated(false);
    if (isReady.current) {
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
        clearInterval(intervalRef.current);
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onPlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const onMute = () => {
    setIsMuted(!isMuted);
  };

  const onVolumeChange = (value) => {
    audioRef.current.volume = value / 100;
    setVolumeProgress(audioRef.current.volume);
  };

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
    setRepeated(false);
    if (trackIndex - 1 < 0) {
      setTrackIndex(playlist.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    setRepeated(false);
    if (trackIndex < playlist.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  function shuffleTracks(array) {
    array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    if (shuffled) {
      const clone = Object.assign([], playlist);
      shuffleTracks(clone);
      setPlaylist(clone);
    } else {
      setPlaylist(tracks);
    }
  }, [shuffled]);

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
              <Repeat setIsRepeated={setRepeated} isRepeated={repeated} />
              <Shuffle setIsShuffled={setShuffled} isShuffled={shuffled} />
            </div>

            {isLoading && <PlayerSongInfoSkeleton />}
            {!isLoading && (
              <PlayerSongInfo
                trackInfo={trackInfo}
                id={id}
                trackIndex={trackIndex}
              />
            )}
          </div>
          <Volume
            mute={onMute}
            isMuted={isMuted}
            onVolumeChange={onVolumeChange}
            volumeProgress={volumeProgress}
          />
        </div>
      </div>
    </div>
  );
};
export default Player;
