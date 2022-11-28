import React from "react";
import styles from'./Popup.module.scss'


const PopupContent = (props) => {
    const sortItems = props.sortItems.map( sortItem => 
        <li className={styles.listItem} key={Math.random()}>{sortItem}</li>
    ) 
    return (  
        <ul className={styles.list}>
            {sortItems}
        </ul>
    )
}

export default PopupContent