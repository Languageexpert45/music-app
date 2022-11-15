import React from 'react'
import styles from './PlayList.module.css'


const PlayListItem = (props) => {
    return (
        
        <div className={styles.item}>
            <a className={styles.link} href={props.playlistHREF}>
                <img className={styles.img} src={props.playlistImage} alt={props.playlistName}/>
            </a>
        </div>
                    
    )
}
export default PlayListItem