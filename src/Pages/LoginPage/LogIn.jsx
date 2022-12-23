import React, { useEffect, useState, useRef } from 'react';
import styles from './LogIn.module.scss';
import { LogoBlack } from '../../components/Logo/Logo';
import { Link, Navigate } from 'react-router-dom';
import { useLoginMutation, useTokenMutation } from '../../services/user';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInSelector } from '../../store/selectors/auth';
import { tokenReceived } from '../../store/slices/auth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const loginInput = useRef(null);
  const passwordInput = useRef(null);
  const dispatch = useDispatch();
  const loggedIn = useSelector(isLoggedInSelector);
  const [userSignIn] = useLoginMutation();
  const [userToken, result] = useTokenMutation();

  useEffect(() => {
    dispatch(tokenReceived(result.data));
  }, [result.data]);

  useEffect(() => {
    if (result.error) {
      console.log(result.error.data.detail);
    }
  }, [result]);

  if (loggedIn) {
    return <Navigate to='/main'/>
  }


  const inputLogin = () => {
    setEmail(loginInput.current.value);
  };

  const inputPassword = () => {
    setPassword(passwordInput.current.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      userSignIn({ email, password });
      userToken({ email, password });
    }
    if (!email || !password) {
      console.log('поле пароль и/или логин не заполнено ');
    }
    setEmail('');
    setPassword('');
    passwordInput.current.value = '';
    loginInput.current.value = '';
  };

  return (
    <div className={styles.reg__container}>
      <div className={styles.reg__box}>
        <div className={styles.reg__logo}>
          <LogoBlack />
        </div>
        <form onSubmit={handleSignIn} className={styles.reg__form}>
          <input
            ref={loginInput}
            onChange={inputLogin}
            className={styles.reg__input}
            type="text"
            name="login"
            id="login"
            placeholder="Логин"
          />
          <input
            ref={passwordInput}
            onChange={inputPassword}
            className={styles.reg__input}
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
          />

          <button className={styles.login__button}>Войти</button>

          <Link to="/reg">
            <button className={styles.reg__button}>Зарегистрироваться</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
