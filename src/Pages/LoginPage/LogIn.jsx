import React from "react";
import styles from './LogIn.module.css';
import {LogoBlack} from '../MusicPage/components/Logo/Logo';
import {Link} from 'react-router-dom';

const LogIn = () => {

    const userLogin = (event) => {
        event.preventDefault()
        console.log('click');
    }

    const userRegister = (event) => {
        console.log('click2');
    }

    return (
        <div className={styles.reg__container}>
            <div className={styles.reg__box}>
                <div className={styles.reg__logo}>
                    <LogoBlack/>
                </div>
                <form className={styles.reg__form}>
                    <input className={styles.reg__input} type="text" name="login" id="login" placeholder="Логин" />
                    <input className={styles.reg__input} type="text" name="password" id="password" placeholder="Пароль" />
                    <button onClick={userLogin} className={styles.login__button}>Войти</button>
                    <Link to='/reg'>
                        <button 
                            onClick={userRegister} 
                            className={styles.reg__button}>
                            Зарегистрироваться
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LogIn