import React from 'react';
import styles from './SideBar.module.css';
import PlayListItem from './PlayList';
import PlayListSkeleton from '../../../../SkeletonComponents/PlayListSkeletonLoader';



const SideBar = (props) => {


    const PlaylistItems = props.playlists.map((playlist, index) =>
        <PlayListItem key={index} playlistName={playlist.playlistName} playlistHREF={playlist.playlistHREF} playlistImage={playlist.img} />
    );

    const skeletonItems = props.playlists.map((item, index) => <PlayListSkeleton key={index}/>)

    
    return (
        <div className={styles.sidebar}>
            <div className={styles.personal}>
                <p className={styles.personal_name}>Sergey.Ivanov</p>
                <div className={styles.avatar}>
                    
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.list}>
                    {props.loading && skeletonItems}
                    {!props.loading && PlaylistItems}

                </div>
            </div>
        </div>
    )
}
export default SideBar