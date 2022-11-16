import React from 'react'
import styles from './PlayList.module.css'
import {Link} from 'react-router-dom'



const PlayListItem = (props) => {
    return (
        
        <div className={styles.item}>
            <Link className={styles.link} to={props.playlistHREF}>
                <img className={styles.img} src={props.playlistImage} alt={props.playlistName}/>
            </Link>
        </div>
                    
    )
}
export default PlayListItem