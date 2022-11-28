import React, { useState } from "react";
import {LogoWhite} from '../Logo/Logo';
import navbar from './Navbar.module.scss'
import {Link} from 'react-router-dom'



const Navbar = (props) => {

    
    const [active, setActive] = useState(false)
    const toggle = () => {
        setActive(!active)
    }

    return (
        <nav className={navbar.main__nav}> 
            <LogoWhite switchLogo = {props.switchTheme}/>
            <div onClick={toggle} className={navbar.nav__burger}>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
            </div>
            <div className={navbar.nav__menu}>
                <ul className={!active ? `${navbar.menu__list} ${navbar.menu__list_hidden}` : navbar.menu__list}>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link} to={`/main/${props.playlists[3].id}`}>Главное</Link></li>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link}to={`/main/${props.playlists[4].id}`}>Мой плейлист</Link></li>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link} to='/'>Выйти</Link></li>
                </ul>
            </div>
            <button onClick={props.switchTheme}>switch color</button>
        </nav>
    )
}
export default Navbar