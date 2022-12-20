import {React, useState, useEffect} from 'react';
import styles from './SideBar.module.scss';
import CompilationItem from './CompilationItem';
import PlayListSkeleton from '../../SkeletonComponents/PlayListSkeletonLoader';
import playlist1 from '../../img/playlist01.png';
import playlist2 from '../../img/playlist02.png';
import playlist3 from '../../img/playlist03.png';
import {useGetSelectionsQuery} from "../../services/allTracksRTK";



const SideBar = () => {

    const {data: selections, error, isLoading} = useGetSelectionsQuery()

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
                ) : selections ? (

                    <div className={styles.list}>
                   
                        <CompilationItem 
                            key={selections[0].id} 
                            playlistId={selections[0].id}
                            image = {playlist1}
                            playlistName = {selections[0].items[0].genre} 
                        />

                        <CompilationItem 
                            key={selections[1].id} 
                            playlistId={selections[1].id}
                            image = {playlist2}
                            playlistName = {selections[1].items[0].genre} 
                        />

                        <CompilationItem 
                            key={selections[2].id} 
                            playlistId={selections[2].id}
                            image = {playlist3}
                            playlistName = {selections[2].items[0].genre}  
                        />

                    </div>                 
                ) : null}  
                   
                
            </div>
        </div>
    )
}
export default SideBar