import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { userReg, userLogin, state } from './state';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App state={state} userReg={userReg} userLogin={userLogin} />
</BrowserRouter>    
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

