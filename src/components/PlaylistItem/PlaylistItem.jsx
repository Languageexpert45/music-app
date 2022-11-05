import React from 'react';
import note from '../img/icon/note.svg';
import like from '../img/icon/like.svg';
import styles from './PlaylistItem.module.css'

const PlaylistItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.track}>
                <div className={styles.title}>
                    <div className={styles.image}>
                        <img className={styles.svg} src={note} alt="music"></img>
                    </div>
                    <div className="track__title-text">
                        <a className={styles.link} href="http://">Guilt <span className={styles.span}></span></a>
                    </div>
                </div>
                <div className={styles.author}>
                    <a className={styles.author_link} href="http://">Nero</a>
                </div>
                <div className={styles.album}>
                    <a className={styles.album_link} href="http://">Welcome Reality</a>
                </div>
                <div className="track__time">
                    <img className={styles.track__time_svg} src={like} alt="time"></img>
                    <span className={styles.track__time_text}>4:44</span>
                </div>
            </div>
        </div>
    )
}
export default PlaylistItem