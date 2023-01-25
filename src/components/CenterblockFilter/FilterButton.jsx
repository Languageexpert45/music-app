import React from "react";
import styles from './FilterButton.module.scss'
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { useState, useEffect } from 'react';

function FilterButton({ filterValue, buttonStatus, buttonActive }) {
  const navigate = useNavigate();

  const getFilterValue = () => {
    buttonStatus(filterValue);
    buttonActive(true);
    navigate('/main')
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