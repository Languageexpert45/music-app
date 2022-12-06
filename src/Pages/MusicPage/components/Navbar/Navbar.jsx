import React, { useState } from "react";
import {LogoWhite} from '../Logo/Logo';
import styles from './Navbar.module.scss'
import {Link} from 'react-router-dom'



const Navbar = (props) => {

    
    const [active, setActive] = useState(false)
    const toggle = () => {
        setActive(!active)
    }

    return (
        <nav className={styles.main__nav}> 
            <LogoWhite switchLogo = {props.switchTheme}/>
            <div onClick={toggle} className={styles.nav__burger}>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
                <span className={styles.burger__line}></span>
            </div>
            <div className={styles.nav__menu}>
                <ul className={!active ? `${styles.menu__list} ${styles.menu__list_hidden}` : styles.menu__list}>
                    <li className={styles.menu__item}><Link className={styles.menu__link} to={`/main/${props.playlists[3].id}`}>Главное</Link></li>
                    <li className={styles.menu__item}><Link className={styles.menu__link}to={`/main/${props.playlists[4].id}`}>Мой плейлист</Link></li>
                    <li className={styles.menu__item}><Link className={styles.menu__link} to='/'>Выйти</Link></li>
                </ul>
            </div>
            <div className={styles.menu__theme_button} onClick={props.switchTheme}></div>
        </nav>
    )
}
export default Navbar