import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const playlistData = [
        {track: 'Elektro', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
        {track: 'I’m Fire', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
        {track: 'Non Stop', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
        {track: 'Elektro', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
        {track: 'I’m Fire', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
        {track: 'Non Stop', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'}
    ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App songs={playlistData}/>);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

