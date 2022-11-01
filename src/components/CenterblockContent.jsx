import React from 'react';
import PlaylistItem from '../components/PlaylistItem';
import watch from '../img/icon/watch.svg';


const CenterblockContent = () => {
    return (
        <div className="centerblock__content">
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">ТРЕК</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <img className="playlist-title__svg" src = {watch} alt="time"></img>
                </div>
            </div>
            <div className="content__playlist playlist">
                <PlaylistItem/>
            </div>
        </div>
    )
}

export default CenterblockContent