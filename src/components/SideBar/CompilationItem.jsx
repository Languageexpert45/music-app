import React from 'react'
import styles from './CompilationItem.module.scss'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"



const CompilationItem = (props) => {

    const {id} = useParams();
    
    return (
        <Link className={styles.link} to={`/main/compilation/${props.playlistId}`}>
            <div className={styles.item}>
                    <img className={styles.img} src={props.image} alt={props.playlistName}/>
            </div>
        </Link>
                    
    )
}
export default CompilationItem