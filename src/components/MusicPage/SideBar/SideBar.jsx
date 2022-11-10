import React from 'react';
import styles from './SideBar.module.css';
import PlayListItem from './PlayList';
import PlayListSkeleton from '../../SkeletonComponents/PlayListSkeletonLoader';


const SideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.personal}>
                <p className={styles.personal_name}>Sergey.Ivanov</p>
                <div className={styles.avatar}>
                    
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.list}>
                    {props.loading && <PlayListSkeleton/>}
                    {!props.loading && <PlayListItem href = '#' playlist = {props.playlist01}/>}

                    {props.loading && <PlayListSkeleton/>}
                    {!props.loading && <PlayListItem href = '#' playlist = {props.playlist02}/>}

                    {props.loading && <PlayListSkeleton/>}
                    {!props.loading && <PlayListItem href = '#' playlist = {props.playlist03}/>}

                </div>
            </div>
        </div>
    )
}
export default SideBar