import React from 'react';
import logo from '../img/logo.png';

const Logo = () => {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src={logo} alt="logo"></img>
        </div>
    )
}
export default Logo