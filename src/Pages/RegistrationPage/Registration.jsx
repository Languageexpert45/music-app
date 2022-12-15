import React, { useEffect, useState, useRef } from "react";
import styles from './Registration.module.scss';
import {LogoBlack} from '../../components/Logo/Logo'
import {Link} from 'react-router-dom';
import { useAddUserSignUpMutation } from "../../services/allTracksRTK";


const Registration = (props) => {

    const [userSignUp] = useAddUserSignUpMutation()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const loginButton = useRef(null)
    const emailButton = useRef(null)
    const passwordButton = useRef(null)
    const confirmPasswordButton = useRef(null)

    const canSave = [username, email, password, confirmPassword].every(Boolean)
    

    const inputLogin = () => {
        setUsername(loginButton.current.value)
    }

    const inputEmail = () => {
        setEmail(emailButton.current.value)
    }
    
    const inputPassword = () => {
        setPassword(passwordButton.current.value)
    }
    
    const inputConfirmPassword = () => {
        setConfirmPassword(confirmPasswordButton.current.value)
    }

    const registerUser = async () => {

        if (canSave) {
        try {
           await userSignUp({username, email, password}).unwrap()

        } catch (err) {
            console.log(err.data.email[0])
            console.log(err.data.password[0])
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
                    <input ref={loginButton} onChange={inputLogin} className={styles.reg__input} type="text" name="username" id="username" placeholder="username" />
                    <input ref={emailButton} onChange={inputEmail} className={styles.reg__input} type="text" name="email" id="email" placeholder="email" />
                    <input ref={passwordButton} onChange={inputPassword} className={styles.reg__input} type="password" name="password" id="password" placeholder="password" />
                    <input ref={confirmPasswordButton} onChange={inputConfirmPassword} className={styles.reg__input} type="password" name="confirm_password" id="confirm_password" placeholder="confirm password" />
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