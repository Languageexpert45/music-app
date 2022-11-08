import React from "react";
import styles from'./Popup.module.css'


const PopupContent = (props) => {
    const artists = props.artists.map( artist => 
        <li className={styles.listItem} key={Math.random()}>{artist}</li>
    ) 
    return (  
        <ul className={styles.list}>
            {artists}
        </ul>
    )
}

export default PopupContent