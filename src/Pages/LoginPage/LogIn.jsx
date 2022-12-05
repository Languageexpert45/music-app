import React, { useEffect, useState, useRef } from "react";
import styles from './LogIn.module.scss';
import {LogoBlack} from '../MusicPage/components/Logo/Logo';
import {Link} from 'react-router-dom';


const LogIn = (props) => {

    

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState()

    const loginButton = useRef(null)
    const passwordButton = useRef(null)


    const inputLogin = () => {
        setLogin(loginButton.current.value)
    }

    const inputPassword = () => {
        setPassword(passwordButton.current.value)
    }

    const checkUserReg = () => {
        if (!login || !password) {
        console.log('enter login and password or register');
        return
        }
        else if (login === localStorage.login && password === localStorage.password) {
        console.log('login and password are correct');
        }
        else {
        console.log('login or password are incorrect')
        }
    }

    return (
        <div className={styles.reg__container}>
            <div className={styles.reg__box}>
                <div className={styles.reg__logo}>
                    <LogoBlack/>
                </div>
                <form className={styles.reg__form}>
                    <input ref={loginButton} onChange={inputLogin} className={styles.reg__input} type="text" name="login" id="login" placeholder="Логин" />
                    <input ref={passwordButton} onChange={inputPassword} className={styles.reg__input} type="password" name="password" id="password" placeholder="Пароль" />
                    <Link to={`/main/${props.playlists[3].id}`}>
                        <button 
                            onClick={checkUserReg}
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