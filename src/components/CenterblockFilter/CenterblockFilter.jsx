import React, { useEffect, useState, useRef, Fragment } from "react";
import Popup from '../Popup/Popup';
import styles from './CenterblockFilter.module.scss'
import PopupContent from "../Popup/PopupContent";
import FilterButton from "./FilterButton";


const CenterblockFilter = ({ tracks, trackId, filteredTracks }) => {
  const filterValues = ['исполнителю', 'году выпуска', 'жанру'];

  const [targetFilterValue, setTargetFilterValue] = useState(undefined);

  const [visible, setVisible] = useState(false);

  const [pos, setPos] = useState(0);

  const getButtonStatus = (value) => {
    setTargetFilterValue(value);
  };

  useEffect(() => {
    if (targetFilterValue === 'исполнителю') {
      setPos(1);
      setVisible(true);
    }

    if (targetFilterValue === 'году выпуска') {
      setPos(2);
      setVisible(true);
    }

    if (targetFilterValue === 'жанру') {
      setPos(3);
      setVisible(true);
    }
  }, [targetFilterValue]);

  const listItems = filterValues.map((filterValue, index) => (
    <FilterButton
      key={index}
      filterValue={filterValue}
      buttonStatus={getButtonStatus}
    />
  ));

  return (
    <Fragment>
      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>
        {listItems}
      </div>
      <Popup
        position={pos}
        setPosition={setPos}
        visible={visible}
        setVisible={setVisible}
      >
        <PopupContent sortItems={tracks} position={pos} trackId={trackId} filteredTracks={filteredTracks} />
      </Popup>
    </Fragment>
  );
};
export default CenterblockFilter