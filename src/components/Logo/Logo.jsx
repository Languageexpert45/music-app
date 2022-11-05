import React from 'react';
import logoImage from '../img/logo.png';
import logoStyles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={logoStyles.nav__logo}>
            <img className={logoStyles.logo__image} src={logoImage} alt="logo"></img>
        </div>
    )
}
export default Logo