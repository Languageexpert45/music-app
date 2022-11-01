import React, { useState } from "react"
import Logo from '../components/Logo';



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    return (
        <nav className="main__nav nav"> 
            <Logo/>
            <div onClick={handleToggle} className="nav__burger burger">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            <div className="nav__menu menu">
                <ul className={`${navbarOpen ? "menu__list menu__list_hidden" : "menu__list"}`}>
                    <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                    <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                    <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar