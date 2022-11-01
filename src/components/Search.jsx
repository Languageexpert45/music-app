import React from 'react';
import search from '../img/icon/search.svg';

const Search = () => {
    return (
        <div className="centerblock__search search">
                <img className="search__svg" src={search}></img>
                <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
    )
}
export default Search