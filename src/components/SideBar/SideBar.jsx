import {React, useState, useEffect} from 'react';
import styles from './SideBar.module.scss';
import CompilationItem from './CompilationItem';
import PlayListSkeleton from '../../SkeletonComponents/PlayListSkeletonLoader';
import playlist1 from '../../img/playlist01.png';
import playlist2 from '../../img/playlist02.png';
import playlist3 from '../../img/playlist03.png';



const SideBar = ({ error, isLoading, compilationTracks}) => {

    const images = [
        {
            id: 1, 
            items: [playlist1, playlist2, playlist3]
        },
    ]


    const result = images.map((image) => image.items )




    // const skeletonItems = props.playlists.map((item, index) => <PlayListSkeleton key={index}/>)
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.personal}>
                <p className={styles.personal_name}>Sergey.Ivanov</p>
                <div className={styles.avatar}></div>
            </div>
            <div className={styles.block}>

                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : compilationTracks ? (

                    <div className={styles.list}>
                    {compilationTracks.map((playlist) =>
                        <CompilationItem 
                            key={playlist.id} 
                            playlistId={playlist.id}
                            image = {images[0].items[0]} 
                            />
                        )}
                    </div>                 
                ) : null}  
                   
                
            </div>
        </div>
    )
}
export default SideBar