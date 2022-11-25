import React from 'react';
import styles from './CenterblockHeader.module.scss'
import { useParams } from "react-router-dom";

const CenterblockHeader = (props) => {
    
    const {name} = useParams()

    const playlists = props.playlists

    const playlist = playlists.find((playlist) => playlist.id === Number(name));


    return (
        <h2 className={styles.header}>{playlist.playlistName}</h2>
    )
}
export default CenterblockHeader