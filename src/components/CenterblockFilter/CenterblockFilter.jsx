import { useEffect, useState } from "react";
import Popup from '../Popup/Popup';
import styles from './CenterblockFilter.module.css'
import PopupContent from "../Popup/PopupContent";




const CenterblockFilter = (props) => {

    const filterValues = ['исполнителю', 'году выпуска', 'жанру'];

    const artistsData =  ['Linkin Park', 'Placebo', 'Evanessence', 'Portishead',];
    const yearsData =  ['2002', '2001', '2010', '2011']
    const genreData =  ['pop', 'funk', 'electro', 'rock']

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [pos, setPos] = useState('');

    let position = ''

    const handleToggle = (event) => {

        if (event.target.textContent ==='исполнителю') {
            setModal1(true)
            setModal2(false)
            setModal3(false)
            position = '350px'
        }

        if (event.target.textContent ==='году выпуска') {
            setModal1(false)
            setModal2(true)
            setModal3(false)
            position = '550px'
        }

        if (event.target.textContent ==='жанру') {
            setModal1(false)
            setModal2(false)
            setModal3(true)
            position = '750px'
        }
        setPos(position)
    }

    const listItems = filterValues.map((filterValue) =>
        <div className={`${styles.filter__button} ${styles.effects}`} onClick={(event) => handleToggle(event)} key={Math.random()}>
            {filterValue}
        </div>   
    );
    return (
        <div className={styles.centerblock__filter}>
            <div className={styles.filter__title}>Искать по:</div>
            {listItems}
            <Popup position={pos} visible={modal1} setVisible={setModal1} >
                <PopupContent artists = {artistsData} />
            </Popup>

            <Popup position={pos} visible={modal2} setVisible={setModal2} >
                <PopupContent artists = {yearsData} />
            </Popup>

            <Popup position={pos} visible={modal3} setVisible={setModal3} >
                <PopupContent artists = {genreData} />
            </Popup>

        </div>
    )
}
export default CenterblockFilter