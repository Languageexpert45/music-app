import React, { useState } from "react"
import Logo from '../Logo/Logo';
import navbar from './Navbar.module.css'



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    return (
        <nav className={navbar.main__nav}> 
            <Logo/>
            <div onClick={handleToggle} className={navbar.nav__burger}>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
                <span className={navbar.burger__line}></span>
            </div>
            <div className={navbar.nav__menu}>
                <ul className={navbarOpen ? `${navbar.menu__list} ${navbar.menu__list_hidden}` : navbar.menu__list}>
                    <li className={navbar.menu__item}><a href="http://" className={navbar.menu__link}>Главное</a></li>
                    <li className={navbar.menu__item}><a href="http://" className={navbar.menu__link}>Мой плейлист</a></li>
                    <li className={navbar.menu__item}><a href="http://" className={navbar.menu__link}>Войти</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar