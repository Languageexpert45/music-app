import React from 'react';
import styles from './Bar.module.css';
import Player from './PlayerUI/PlayerControl/Player';
import Volume from './PlayerUI/VolumeControl/Volume';

const Bar = (props) => {
    return (
        <div className={styles.bar}>
            <div className={styles.bar__content}>
                <div className={styles.bar__player_progress}></div>
                <div className={styles.bar__player_block}>
                    <Player {...props} />
                    <Volume />
                </div>
            </div>
        </div>
    )
}
export default Bar