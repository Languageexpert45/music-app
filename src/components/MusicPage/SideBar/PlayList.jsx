import React from 'react'
import styles from './PlayList.module.css'


const PlayListItem = (props) => {
    return (
        
        <div className={styles.item}>
            <a className={styles.link} href={props.href}>
                <img className={styles.img} src={props.playlist} alt="day's playlist"/>
            </a>
        </div>
                    
    )
}
export default PlayListItem