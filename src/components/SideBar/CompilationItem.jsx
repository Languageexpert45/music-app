import React from 'react'
import styles from './CompilationItem.module.scss'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'



const CompilationItem = (props) => {
    
    const navigate = useNavigate()

    const handleSelectionsSwitch = () => {
       navigate(`/main/compilation/${props.playlistId}`)
    }
    
    return (
      <div onClick={handleSelectionsSwitch} className={styles.item}>
        <img
          className={styles.img}
          src={props.image}
          alt={props.playlistName}
        />
        <p className={styles.playlist_name}>{props.playlistName}</p>
      </div>
    );
}
export default CompilationItem