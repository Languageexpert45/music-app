import React from "react";
import styles from'./Popup.module.scss'
import { useState, useEffect } from 'react';

const PopupContent = ({ sortItems, position, trackId, filteredTracks }) => {
  const [trackData, setTrackData] = useState(undefined);

  const getTrackByArtist = () => {
    console.log(trackData);
  };

//   useEffect(() => {
//     if (trackData) {
//       console.log(trackData);
//     }
//   }, [trackData]);

  useEffect(() => {
    if (position === 1) {
      setTrackData(
        sortItems.map((sortItem) => (
          <li
            onClick={getTrackByArtist}
            className={styles.listItem}
            key={sortItem.id}
          >
            {sortItem.author}
          </li>
        ))
      );
    }
    if (position === 2) {
    //   const releaseData = sortItems.map((sortItem) => sortItem.release_date)
    //   const result = releaseData.forEach(element => {
    //     element+element
    //   });
    //   console.log(result);
        setTrackData(
          sortItems.map((sortItem) => (
            <li className={styles.listItem} key={sortItem.id}>
              {sortItem.release_date}
            </li>
          ))
        );
    }

    if (position === 3) {
      const genreData = sortItems.map((sortItem) => sortItem.genre);

      const notDuplicatedGenreData = [...new Set(genreData)];

      setTrackData(
        notDuplicatedGenreData.map((sortItem, index) => (
          <li className={styles.listItem} key={index}>
            {sortItem}
          </li>
        ))
      );
    }
  }, [position]);

  return <ul className={styles.list}>{trackData}</ul>;
};

export default PopupContent