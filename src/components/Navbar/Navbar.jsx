import React, { useState } from 'react';
import { LogoWhite } from '../Logo/Logo';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/slices/auth';

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <nav className={styles.main__nav}>
      <LogoWhite switchLogo={props.switchTheme} />
      <div onClick={toggle} className={styles.nav__burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={styles.nav__menu}>
        <ul
          className={
            !active
              ? `${styles.menu__list} ${styles.menu__list_hidden}`
              : styles.menu__list
          }
        >
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to={`/main`}>
              Главное
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to={`/main/compilation/4`}>
              Мой плейлист
            </Link>
          </li>
          <li onClick={handleLogout} className={styles.menu__item}>
            <Link className={styles.menu__link} to="/">
              Выйти
            </Link>
          </li>
          <div
            className={styles.menu__theme_button}
            onClick={props.switchTheme}
          ></div>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
