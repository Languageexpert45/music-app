import React from 'react';

const PlaylistItem = () => {
    return (
        <div class="playlist__item">
            <div class="playlist__track track">
                <div class="track__title">
                    <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                            <use xlink:href="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>
                    <div class="track__title-text">
                        <a class="track__title-link" href="http://">"Guilt" <span class="track__title-span"></span></a>
                    </div>
                </div>
                <div class="track__author">
                    <a class="track__author-link" href="http://">"Nero"</a>
                </div>
                <div class="track__album">
                    <a class="track__album-link" href="http://">"Welcome Reality"</a>
                </div>
                <div class="track__time">
                    <svg class="track__time-svg" alt="time">
                        <use xlink:href="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span class="track__time-text">"4:44"</span>
                </div>
            </div>
        </div>
    )
}
export default PlaylistItem