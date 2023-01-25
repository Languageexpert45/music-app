import React, { useEffect, useState, Fragment } from "react";
import Popup from '../Popup/Popup';
import styles from './CenterblockFilter.module.scss'
import PopupContent from "../Popup/PopupContent";
import FilterButton from "./FilterButton";


const CenterblockFilter = ({ tracks, trackId, filteredTracks }) => {
  
  const filterValues = ['исполнителю', 'году выпуска', 'жанру'];
  const [targetFilterValue, setTargetFilterValue] = useState(undefined);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState(undefined);

  const getButtonStatus = (value) => {
    setTargetFilterValue(value);
  };

  const isButtonActive = (value) => {
    setVisible(value)
  }

  useEffect(() => {
    if (targetFilterValue === 'исполнителю') {
      setPos(1);
    }

    if (targetFilterValue === 'году выпуска') {
      setPos(2);
    }

    if (targetFilterValue === 'жанру') {
      setPos(3);
    }
  }, [targetFilterValue]);

  const filterButtons = filterValues.map((filterValue, index) => (
    <FilterButton
      key={index}
      filterValue={filterValue}
      buttonStatus={getButtonStatus}
      buttonActive={isButtonActive}
    />
  ));

  return (
    <Fragment>
      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>
        {filterButtons}
      </div>
      <Popup
        position={pos}
        visible={visible}
        setVisible={setVisible}
      >
        <PopupContent
          sortItems={tracks}
          position={pos}
          trackId={trackId}
          filteredTracks={filteredTracks}
        />
      </Popup>
    </Fragment>
  );
};
export default CenterblockFilter