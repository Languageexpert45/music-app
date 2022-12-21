import React, { useEffect, useState, useRef } from "react";
import styles from './LogIn.module.scss';
import {LogoBlack} from '../../components/Logo/Logo';
import {Await, Link} from 'react-router-dom';
import { useLoginMutation, useTokenMutation } from "../../services/user";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/user";


const LogIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    const loginButton = useRef(null)
    const passwordButton = useRef(null)

    const [userSignIn] = useLoginMutation()


    const [userToken, {data: result}] = useTokenMutation()

    // const saveToken = (result) => {
    //     console.log(result);
    // }

    

    // useEffect(() => {
    //     console.log(result);
    // }, [result])

    



    const canSave = [email, password].every(Boolean)


    const inputLogin = () => {
        setEmail(loginButton.current.value)
    }

    const inputPassword = () => {
        setPassword(passwordButton.current.value)
    }

    const checkUserReg = async () => {

        if (canSave) {
        try {
            await userSignIn({email, password}).unwrap();

            await userToken ({email, password}).unwrap();

            console.log(result)

        } catch (err) {
            console.log(err.data.detail)
        }
        
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
                    
                    <Link onClick={checkUserReg} to={`/main`}>
                        <button 
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