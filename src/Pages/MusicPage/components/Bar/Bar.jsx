import React from 'react';
import styles from './Bar.module.css';
import Player from './PlayerUI/PlayerControl/Player';

const Bar = (props) => {
    return (
        <Player {...props}/>
    )
}
export default Bar