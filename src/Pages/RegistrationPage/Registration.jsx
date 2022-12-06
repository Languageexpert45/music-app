import React, { useEffect, useState, useRef } from "react";
import styles from './Registration.module.scss';
import {LogoBlack} from '../MusicPage/components/Logo/Logo'
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addUser } from "../../store/actions/creators/addUser";


const Registration = (props) => {

    const dispatch = useDispatch()

    

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const loginButton = useRef(null)
    const passwordButton = useRef(null)
    const confirmPasswordButton = useRef(null)
    

    const inputLogin = () => {
        setLogin(loginButton.current.value)
    }
    
    const inputPassword = () => {
        setPassword(passwordButton.current.value)
    }
    
    const inputConfirmPassword = () => {
        setConfirmPassword(confirmPasswordButton.current.value)
    }

    const registerUser = () => {
        

        if (password === confirmPassword && password !== '' && confirmPassword !== '') {
            const token = 'token'
            dispatch(addUser(login, password, token))
            console.log('Вы успешно зарегистрированы, чтобы войти, введите логин и пароль');  
        } 

        if (login === '') {
            console.log('вы не заполнили поле "Логин"')
        }

        if (password === '') {
            console.log('вы не заполнили поле "Пароль"')
        }

        if (password !== confirmPassword ) {
            console.log('Пароли не совпадают');
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
                    <input ref={confirmPasswordButton} onChange={inputConfirmPassword} className={styles.reg__input} type="password" name="confirm_password" id="confirm_password" placeholder="Повторите пароль" />
                    <Link to='/'>
                        <button
                            onClick={registerUser} 
                            className={styles.reg__button}>
                                Зарегистрироваться
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Registration