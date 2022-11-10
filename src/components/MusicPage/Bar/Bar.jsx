import React from 'react';
import styles from './Bar.module.css';
import Player from './Player';
import Volume from './Volume';

const Bar = (props) => {
    return (
        <div className={styles.bar}>
            <div className={styles.bar__content}>
                <div className={styles.bar__player_progress}></div>
                <div className={styles.bar__player_block}>
                    <Player loading={props.loading} />
                    <Volume />
                </div>
            </div>
        </div>
    )
}
export default Bar