import React from 'react';
import PlaylistItem from './components/PlaylistItem';

const CenterblockContent = () => {
    return (
        <div class="centerblock__content">
            <div class="content__title playlist-title">
                <div class="playlist-title__col col01">"ТРЕК"</div>
                <div class="playlist-title__col col02">"ИСПОЛНИТЕЛЬ"</div>
                <div class="playlist-title__col col03">"АЛЬБОМ"</div>
                <div class="playlist-title__col col04">
                    <svg class="playlist-title__svg" alt="time">
                        <use xlink:href="img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                </div>
            </div>
            <div class="content__playlist playlist">
            <PlaylistItem/>
            </div>
        </div>
    )
}
export default CenterblockContent