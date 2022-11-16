import React, { useEffect, useState } from "react";
import styles from './Registration.module.css';
import {LogoBlack} from '../MusicPage/components/Logo/Logo'
import {Link} from 'react-router-dom';

const Registration = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [path, setPath] = useState('')

    const inputLogin = (event) => {
        setLogin(event.target.value)
    }
    
    const inputPassword = (event) => {
        setPassword(event.target.value)
    }
    
    const inputConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }


    const registerUser = () => {

        if (password === confirmPassword && password !== '' && confirmPassword !== '') {
            setPath('/main');
            props.userReg(login, password);
            alert('Вы успешно зарегистрированы');
            console.log(path);
            
        } 

        if (login === '') {
            alert('вы не заполнили поле "Логин"')
        }

        if (password === '') {
            alert('вы не заполнили поле "Пароль"')
        }

        if (password !== confirmPassword ) {
            alert('Пароли не совпадают')
        } 
    }


    return (
        <div className={styles.reg__container}>
            <div className={styles.reg__box}>
                <div className={styles.reg__logo}>
                    <LogoBlack/>
                </div>
                <form className={styles.reg__form}>
                    <input onChange={inputLogin} className={styles.reg__input} type="text" name="login" id="login" placeholder="Логин" />
                    <input  onChange={inputPassword} className={styles.reg__input} type="text" name="password" id="password" placeholder="Пароль" />
                    <input  onChange={inputConfirmPassword} className={styles.reg__input} type="text" name="confirm_password" id="confirm_password" placeholder="Повторите пароль" />
                    <Link to={path}>
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