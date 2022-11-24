import {React, useState} from 'react';
import styles from './SideBar.module.css';
import PlayListItem from './PlayList';
import PlayListSkeleton from '../../../../SkeletonComponents/PlayListSkeletonLoader';
import { useParams } from "react-router-dom";



const SideBar = (props) => {

    const {name} = useParams()

    props.playlistPath(name)


    const PlaylistItems = props.playlists.map((playlist) =>
        <PlayListItem key={playlist.id} playlistId={playlist.id} playlistImage={playlist.img} />
    );

    // const skeletonItems = props.playlists.map((item, index) => <PlayListSkeleton key={index}/>)

    
    return (
        <div className={styles.sidebar}>
            <div className={styles.personal}>
                <p className={styles.personal_name}>Sergey.Ivanov</p>
                <div className={styles.avatar}>
                    
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.list}>
                   {PlaylistItems}

                </div>
            </div>
        </div>
    )
}
export default SideBar