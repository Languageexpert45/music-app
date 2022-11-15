import React from 'react';
import volume from '../../../../../img/icon/volume.svg';
import styles from './Volume.module.css'

const Volume = (props) => {
    return (
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
    )
}
export default Volume