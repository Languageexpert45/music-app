import React, { useEffect, useState, useRef } from "react";
import styles from './FilterButton.module.css'
import listenForOutsideClicks from '../../../../js/listenForOutsideClicks'



function FilterButton({filterValue, buttonStatus}) {

    const menuRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [isOpen, setIsOpen] = useState(false);  
    const toggle = () => setIsOpen(!isOpen);

    useEffect(listenForOutsideClicks(
        listening,
        setListening,
        menuRef,
        setIsOpen,
    ));

    const buttonToggle = (event) => {
        buttonStatus(event)
        toggle()
    }

    return ( 
        <div 
            ref={menuRef} 
            className={isOpen ? `${styles.filter__button} ${styles.effects} ${styles. active}` : `${styles.filter__button} ${styles.effects}`} 
            onClick={buttonToggle}>
            {filterValue}
        </div>    
     );
}

export default FilterButton;