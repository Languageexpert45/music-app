import { useEffect, useState } from "react";
import Popup from '../Popup/Popup';
import styles from './CenterblockFilter.module.css'

const filterValues = ['исполнителю', 'году выпуска', 'жанру'];

let popupPos = '';


const CenterblockFilter = () => {

    const [popupActive, setPopupActive] = useState(true);

    const handleToggle = (index) => {
        setPopupActive(!popupActive)
        showProperPopup(index)
        console.log(popupPos);
    }

    const showProperPopup = (index) => {
        if (index === 0) {
            return popupPos = 'left_0';
        }

        if (index === 1) {
            return popupPos = 'left_1';
        }

        if (index === 2) {
            return popupPos = 'left_2';
        }
    }

    const listItems = filterValues.map((filterValue, index) =>
        <div className={`${styles.filter__button} ${styles.effects}`} onClick={() => handleToggle(index)} key={index} >{filterValue}</div>   
    );
    return (
        <div className={styles.centerblock__filter}>
            <div className={styles.filter__title}>Искать по:</div>
            {listItems}
            <Popup position="350" active = {popupActive} /> 
        </div>
    )
}
export default CenterblockFilter