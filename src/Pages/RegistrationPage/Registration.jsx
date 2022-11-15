import React from "react";
import styles from './Registration.module.css';
import {LogoBlack} from '../MusicPage/components/Logo/Logo'

const Registration = () => {

    return (
        <div className={styles.reg__container}>
            <div className={styles.reg__box}>
                <div className={styles.reg__logo}>
                    <LogoBlack/>
                </div>
                <form className={styles.reg__form}>
                    <input className={styles.reg__input} type="text" name="login" id="login" placeholder="Логин" />
                    <input className={styles.reg__input} type="text" name="password" id="password" placeholder="Пароль" />
                    <input className={styles.reg__input} type="text" name="confirm_password" id="confirm_password" placeholder="Повторите пароль" />
                    <button className={styles.reg__button}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
}

export default Registration