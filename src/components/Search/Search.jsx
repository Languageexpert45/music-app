import React from 'react';
import search from '../../img/icon/search.svg';
import styles from './Search.module.scss'
import { useState, useEffect } from 'react';
import { useGetAllTracksQuery } from '../../services/tracks';

const Search = ({ trackId, tracks }) => {

  const [searchInput, setSearchInput] = useState('');

  const [searchedTracks, setSearchedTracks] = useState(undefined);

  const [allTracks, setAllTracks] = useState(undefined);

  const [searchHidden, setSearchHidden] = useState(true);

  const [chosenTrack, setChosenTrack] = useState(undefined);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const getTrack = (e) => {
    e.preventDefault();
    setSearchInput(e.target.textContent);
    setChosenTrack(e.target.textContent);
    setSearchHidden(true);
  };

  useEffect(() => {
    if (searchedTracks === undefined) {
      return;
    }
    if (searchedTracks.length === 0) {
      setSearchHidden(true);
    }
  }, [searchedTracks]);

  useEffect(() => {
    if (chosenTrack) {
      const target = allTracks.find((track) => track.name === chosenTrack);
      trackId(target.id);
    }
  }, [chosenTrack]);

  useEffect(() => {
    if (tracks) {
      setAllTracks(tracks);
    }
  }, [tracks]);

  useEffect(() => {
    if (allTracks) {
      setSearchedTracks(
        allTracks.filter((track) => {
          return track.name.toLowerCase().match(searchInput.toLowerCase());
        })
      );
    }
    if (searchInput.length !== 0) {
      setSearchHidden(false);
    } else {
      setSearchHidden(true);
    }
  }, [searchInput]);

  return (
    <div className={styles.centerblock__search}>
      <img className={styles.search__svg} src={search}></img>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={handleChange}
        value={searchInput}
      />
      <div
        className={
          searchHidden === true
            ? `${styles.search__result_box} ${styles.search_hidden}`
            : `${styles.search__result_box}`
        }
      >
        {searchedTracks
          ? searchedTracks.map((track) => (
              <div
                onClick={getTrack}
                className={styles.search__result_item}
                key={track.id}
              >
                {track.name}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default Search