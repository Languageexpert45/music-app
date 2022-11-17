import React from "react";
import styles from './FilterButton.module.css'



function FilterButton({filterValue, buttonStatus}) {

    const toggle = (event) => {
        buttonStatus(event)
    }

    return ( 
        <div 
            className={`${styles.filter__button} ${styles.effects}`} 
            onClick={toggle}>
            {filterValue}
        </div>    
     );
}

export default FilterButton;