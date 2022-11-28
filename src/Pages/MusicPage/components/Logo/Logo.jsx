import {React, useState, useEffect} from 'react';
import logoImageWh from '../../../../img/logo_white.png';
import logoImageBl from '../../../../img/logo_black.png';
import logoStyles from './Logo.module.scss';

export const LogoWhite = (props) => {
    

    return (
        <div className={logoStyles.nav__logo}></div>
    )
}

export const LogoBlack = () => {
    return (
        <div className={logoStyles.nav__logo_bl}>
            <img className={logoStyles.logo__image_bl} src={logoImageBl} alt="logo"></img>
        </div>
    )
}
