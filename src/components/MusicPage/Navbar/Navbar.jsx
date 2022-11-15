import React, { useEffect, useState, useRef } from "react";
import Logo from '../Logo/Logo';
import navbar from './Navbar.module.css'
import listenForOutsideClicks from '../../../js/listenForOutsideClicks'



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
            <Logo/>
            <div ref={menuRef} onClick={toggle} className={navbar.nav__burger}>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
            </div>
            <div className={navbar.nav__menu}>
                <ul className={!isOpen ? `${navbar.menu__list} ${navbar.menu__list_hidden}` : navbar.menu__list}>
                    <li className={navbar.menu__item}><a href="http://" className={navbar.menu__link}>Главное</a></li>
                    <li className={navbar.menu__item}><a href="http://" className={navbar.menu__link}>Мой плейлист</a></li>
                    <li className={navbar.menu__item}><a href="http://" className={navbar.menu__link}>Войти</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar