import React from 'react';
import playlist01 from '../img/playlist01.png';
import playlist02 from '../img/playlist02.png';
import playlist03 from '../img/playlist03.png';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.personal}>
                <p className={styles.personal_name}>Sergey.Ivanov</p>
                <div className={styles.avatar}>
                    
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <a className={styles.link} href="#">
                            <img className={styles.img} src={playlist01} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className={styles.item}>
                        <a className={styles.link} href="#">
                            <img className={styles.img} src={playlist02} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className={styles.item}>
                        <a className={styles.link} href="#">
                            <img className={styles.img} src={playlist03} alt="day's playlist"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar