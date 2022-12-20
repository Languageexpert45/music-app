import React from 'react'
import styles from './CompilationItem.module.scss'
import {Link} from 'react-router-dom'



const CompilationItem = (props) => {
    
    return (
        <Link className={styles.link} to={`/main/compilation/${props.playlistId}`}>
            <div className={styles.item}>
                <img className={styles.img} src={props.image} alt={props.playlistName}/>
                <p className={styles.playlist_name}>{props.playlistName}</p>
            </div>
        </Link>
                    
    )
}
export default CompilationItem