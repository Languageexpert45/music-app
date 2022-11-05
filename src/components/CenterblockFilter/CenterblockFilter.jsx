import { useEffect, useState } from "react";
import Popup from '../Popup/Popup';
import styles from './CenterblockFilter.module.css'


const CenterblockFilter = () => {

    const [popupActive, setPopupActive] = useState(true);

    const handleToggle = () => {
        setPopupActive(!popupActive)
    }
    return (
        <div className={styles.centerblock__filter}>
            <div className={styles.filter__title}>Искать по:</div>
            <div className={`${styles.filter__button} ${styles.effects}`} onClick={handleToggle} >исполнителю</div>
            <div className={`${styles.filter__button} ${styles.effects}`}  onClick={handleToggle} >году выпуска</div>
            <div className={`${styles.filter__button} ${styles.effects}`}  onClick={handleToggle} >жанру</div>
            <Popup active = {popupActive} /> 
        </div>
    )
}
export default CenterblockFilter