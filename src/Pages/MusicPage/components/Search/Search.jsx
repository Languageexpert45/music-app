import React from 'react';
import search from '../../../../img/icon/search.svg';
import styles from './Search.module.css'

const Search = () => {
    return (
        <div className={styles.centerblock__search}>
                <img className={styles.search__svg} src={search}></img>
                <input className={styles.search__text} type="search" placeholder="Поиск" name="search"/>
        </div>
    )
}
export default Search