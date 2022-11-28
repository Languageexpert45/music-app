import React, { useEffect, useState } from "react";
import styles from './LogIn.module.scss';
import {LogoBlack} from '../MusicPage/components/Logo/Logo';
import {Link} from 'react-router-dom';

const LogIn = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')



    const inputLogin = (event) => {
        setLogin(event.target.value)
    }

    const inputPassword = (event) => {
        setPassword(event.target.value)
    }

    const userLogin = () => {

        if (login === '' || password === '') {
            console.log('введите логин и пароль или зарегистрируйтесь');
            return
        }
        props.onUserLogin(login, password)

    }

    return (
        <div className={styles.reg__container}>
            <div className={styles.reg__box}>
                <div className={styles.reg__logo}>
                    <LogoBlack/>
                </div>
                <form className={styles.reg__form}>
                    <input onChange={inputLogin} className={styles.reg__input} type="text" name="login" id="login" placeholder="Логин" />
                    <input onChange={inputPassword} className={styles.reg__input} type="password" name="password" id="password" placeholder="Пароль" />
                    <Link to={`/main/${props.playlists[3].id}`}>
                        <button 
                            onClick={userLogin}
                            className={styles.login__button}>
                                Войти
                        </button>
                    </Link>
                    
                    <Link to='/reg'>
                        <button 
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