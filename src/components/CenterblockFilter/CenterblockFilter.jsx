import React, { useEffect, useState, useRef, Fragment } from "react";
import Popup from '../Popup/Popup';
import styles from './CenterblockFilter.module.scss'
import PopupContent from "../Popup/PopupContent";
import FilterButton from "./FilterButton";


const CenterblockFilter = (props) => {

    const filterValues = ['исполнителю', 'году выпуска', 'жанру']

    const [sortByArtist, setSortByArtist] = useState(false);
    const [sortByYear, setSortByYear] = useState(false);
    const [sortByGenre, setSortByGenre] = useState(false);

    const [pos, setPos] = useState('');

    
    const buttonClicked = (event) => {
        popupSwitch(event.target.textContent)
    }

    const popupSwitch = (status) => {

        if (status ==='исполнителю') {
            setSortByArtist(true)
            setSortByYear(false)
            setSortByGenre(false)
            setPos('1')
        }

        if (status ==='году выпуска') {
            setSortByArtist(false)
            setSortByYear(true)
            setSortByGenre(false)
            setPos('2')
        }

        if (status ==='жанру') {
            setSortByArtist(false)
            setSortByYear(false)
            setSortByGenre(true)
            setPos('3')
        }  
    }

    const listItems = filterValues.map((filterValue, index) =>
        <FilterButton 
            key={index} 
            filterValue = {filterValue} 
            buttonStatus={buttonClicked} 
        />
    );

    return (

        <Fragment>
            <div className={styles.centerblock__filter}>
                <div className={styles.filter__title}>Искать по:</div>
                {listItems}
            </div>
                <Popup position={pos} visible={sortByArtist} setVisible={setSortByArtist} >
                    <PopupContent sortItems = {props.artist} />
                </Popup>

                <Popup position={pos} visible={sortByYear} setVisible={setSortByYear} >
                    <PopupContent sortItems = {props.year} />
                </Popup>

                <Popup position={pos} visible={sortByGenre} setVisible={setSortByGenre} >
                    <PopupContent sortItems = {props.genre} />
                </Popup>   
        </Fragment>
    )
}
export default CenterblockFilter