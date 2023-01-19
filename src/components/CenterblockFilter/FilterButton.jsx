import React from "react";
import styles from './FilterButton.module.scss'
import Popup from "../Popup/Popup";
import { useState, useEffect } from 'react';

function FilterButton({ filterValue, buttonStatus }) {
  const [active, setActive] = useState(false);

  const getFilterValue = () => {
    // setActive(!active);
    buttonStatus(filterValue);
  };

  return (
    <div
      className={`${styles.filter__button} ${styles.effects}`}
      onClick={getFilterValue}
    >
      {filterValue}
    </div>
  );
}

export default FilterButton;