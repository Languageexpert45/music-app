import React, { useState } from "react";
import {LogoWhite} from '../Logo/Logo';
import navbar from './Navbar.module.css'
import listenForOutsideClicks from '../../../../js/listenForOutsideClicks'
import {Link} from 'react-router-dom'



const Navbar = () => {
    const [active, setActive] = useState(false)
    const toggle = () => {
        setActive(!active)
    }

    return (
        <nav className={navbar.main__nav}> 
            <LogoWhite/>
            <div onClick={toggle} className={navbar.nav__burger}>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
            </div>
            <div className={navbar.nav__menu}>
                <ul className={!active ? `${navbar.menu__list} ${navbar.menu__list_hidden}` : navbar.menu__list}>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link} to='/main/token'>Главное</Link></li>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link}to='/userPl'>Мой плейлист</Link></li>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link} to='/'>Войти</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar