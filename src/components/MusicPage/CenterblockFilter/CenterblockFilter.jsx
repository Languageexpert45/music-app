import { useEffect, useState } from "react";
import Popup from '../Popup/Popup';
import styles from './CenterblockFilter.module.css'
import PopupContent from "../Popup/PopupContent";


const CenterblockFilter = (props) => {

    const filterValues = ['исполнителю', 'году выпуска', 'жанру'];

    const [sortByArtist, setSortByArtist] = useState(false);
    const [sortByYear, setSortByYear] = useState(false);
    const [sortByGenre, setSortByGenre] = useState(false);
    const [pos, setPos] = useState('');

    const popupSwitch = (event) => {

        if (event.target.textContent ==='исполнителю') {
            setSortByArtist(true)
            setSortByYear(false)
            setSortByGenre(false)
            setPos('1')
        }

        if (event.target.textContent ==='году выпуска') {
            setSortByArtist(false)
            setSortByYear(true)
            setSortByGenre(false)
            setPos('2')
        }

        if (event.target.textContent ==='жанру') {
            setSortByArtist(false)
            setSortByYear(false)
            setSortByGenre(true)
            setPos('3')
        }
        
    }

    const listItems = filterValues.map((filterValue) =>
        <div className={`${styles.filter__button} ${styles.effects}`} onClick={(event) => popupSwitch(event)} key={Math.random()}>
            {filterValue}
        </div>   
    );
    return (
        <div className={styles.centerblock__filter}>
            <div className={styles.filter__title}>Искать по:</div>
            {listItems}
            <Popup position={pos} visible={sortByArtist} setVisible={setSortByArtist} >
                <PopupContent sortItems = {props.artist} />
            </Popup>

            <Popup position={pos} visible={sortByYear} setVisible={setSortByYear} >
                <PopupContent sortItems = {props.year} />
            </Popup>

            <Popup position={pos} visible={sortByGenre} setVisible={setSortByGenre} >
                <PopupContent sortItems = {props.genre} />
            </Popup>

        </div>
    )
}
export default CenterblockFilter