import React from 'react';
import logoImageWh from '../../../../img/logo_white.png';
import logoImageBl from '../../../../img/logo_black.png';
import logoStyles from './Logo.module.css';

export const LogoWhite = () => {
    return (
        <div className={logoStyles.nav__logo}>
            <img className={logoStyles.logo__image_wh} src={logoImageWh} alt="logo"></img>
        </div>
    )
}

export const LogoBlack = () => {
    return (
        <div className={logoStyles.nav__logo_bl}>
            <img className={logoStyles.logo__image_bl} src={logoImageBl} alt="logo"></img>
        </div>
    )
}
