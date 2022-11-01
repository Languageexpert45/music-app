import React from 'react';
import note from '../img/icon/note.svg';
import like from '../img/icon/like.svg';

const PlaylistItem = () => {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <img className="track__title-svg" src={note} alt="music"></img>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">Guilt <span className="track__title-span"></span></a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">Nero</a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">Welcome Reality</a>
                </div>
                <div className="track__time">
                    <img className="track__time-svg" src={like} alt="time"></img>
                    <span className="track__time-text">4:44</span>
                </div>
            </div>
        </div>
    )
}
export default PlaylistItem