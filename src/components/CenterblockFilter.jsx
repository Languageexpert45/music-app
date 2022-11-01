import { useEffect, useState } from "react";
import Popup from '../components/Popup';


const CenterblockFilter = () => {

    const [popupActive, setPopupActive] = useState(true);

    const handleToggle = () => {
        setPopupActive(!popupActive)
    }
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn-text" onClick={handleToggle} >исполнителю</div>
            <div className="filter__button button-year _btn-text" onClick={handleToggle} >году выпуска</div>
            <div className="filter__button button-genre _btn-text" onClick={handleToggle} >жанру</div>
            <Popup active = {popupActive} /> 
        </div>
    )
}
export default CenterblockFilter