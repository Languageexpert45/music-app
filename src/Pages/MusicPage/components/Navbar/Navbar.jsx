import React, { useEffect, useState, useRef } from "react";
import {LogoWhite} from '../Logo/Logo';
import navbar from './Navbar.module.css'
import listenForOutsideClicks from '../../../../js/listenForOutsideClicks'
import {Link} from 'react-router-dom'



const Navbar = () => {
    const menuRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [isOpen, setIsOpen] = useState(false);  
    const toggle = () => setIsOpen(!isOpen);

    useEffect(listenForOutsideClicks(
        listening,
        setListening,
        menuRef,
        setIsOpen,
    ));

    return (
        <nav className={navbar.main__nav}> 
            <LogoWhite/>
            <div ref={menuRef} onClick={toggle} className={navbar.nav__burger}>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
            </div>
            <div className={navbar.nav__menu}>
                <ul className={!isOpen ? `${navbar.menu__list} ${navbar.menu__list_hidden}` : navbar.menu__list}>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link} to='/main'>Главное</Link></li>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link}to='/userPl'>Мой плейлист</Link></li>
                    <li className={navbar.menu__item}><Link className={navbar.menu__link} to='/'>Войти</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar