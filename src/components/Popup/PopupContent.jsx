import React from "react";
import styles from'./Popup.module.scss'
import { useState, useEffect } from 'react';

const PopupContent = ({ sortItems, position, filteredTracks }) => {
  const [trackData, setTrackData] = useState(undefined);

  const getTracksByGenre = (event) => {
    const result = sortItems.filter((track) => {
      return track.genre.match(event.target.textContent);
    });
    filteredTracks(result);
  };

  const getTracksByArtist = (event) => {
    const result = sortItems.filter((track) => {
      return track.author.match(event.target.textContent);
    });
    filteredTracks(result);
  };

  const getTracksByReleaseDate = (event) => {
    const target = event.target.textContent;

    const result = sortItems.filter(
      (sortItem) => sortItem.release_date === target
    );

    filteredTracks(result);
  };

  useEffect(() => {
    if (position === 1) {
      const trackAuthorData = sortItems.map((sortItem) => sortItem.author);
      const nonDuplicatedAuthorData = [...new Set(trackAuthorData)];

      setTrackData(
        nonDuplicatedAuthorData.map((sortItem, index) => (
          <li
            onClick={getTracksByArtist}
            className={styles.listItem}
            key={index}
          >
            {sortItem}
          </li>
        ))
      );
    }
    if (position === 2) {
      const releaseData = sortItems.map((sortItem) => sortItem.release_date);
      const nonDuplicatedYears = [...new Set(releaseData)];
      const resultDates = nonDuplicatedYears.sort();

      setTrackData(
        resultDates.map((sortItem, index) => (
          <li
            onClick={getTracksByReleaseDate}
            className={styles.listItem}
            key={index}
          >
            {sortItem}
          </li>
        ))
      );
    }

    if (position === 3) {
      const genreData = sortItems.map((sortItem) => sortItem.genre);
      const nonDuplicatedGenreData = [...new Set(genreData)];

      setTrackData(
        nonDuplicatedGenreData.map((sortItem, index) => (
          <li
            onClick={getTracksByGenre}
            className={styles.listItem}
            key={index}
          >
            {sortItem}
          </li>
        ))
      );
    }
  }, [position]);

  return <ul className={styles.list}>{trackData}</ul>;
};

export default PopupContent