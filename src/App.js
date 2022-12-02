import React, { useState, useEffect } from "react";
import { AppRoutes } from "./Routes";



const App = (props) => {


  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const[token, setToken] = useState('')
  

  const onUserReg = (login, password) => {
    setUserLogin(login)
    setUserPassword(password)
    localStorage.setItem(login, 'token')
    setToken(localStorage.getItem(login))
  }

  const checkUserReg = (login, password) => {
    if (!login || !password) {
      console.log('enter login and password or sing up');
      return
    }
    if (login === userLogin && password === userPassword) {
      console.log('login and password are correct');
    }
    else {
      console.log('login or password are incorrect');
    }
  }

  // const [songs, setSongs] = useState([]);
  // const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //       setLoading(true);
  //       const timer = setTimeout(() => {
  //       setSongs(state.playlist.tracks);
  //       setLoading(false);
  //       }, 1000);
  //       return () => clearTimeout(timer);
  //   }, []);
  
  return (
    <div className="wrapper">
      <AppRoutes
        checkUserReg={checkUserReg}
        password={userPassword}
        user={userLogin}
        token={token}
        onUserReg={onUserReg}
        playlists={props.state.playlists}
        tracks={props.state.tracks} 
        artist={props.state.filter.artistsData} 
        year={props.state.filter.yearsData} 
        genre={props.state.filter.genreData} 
        filterValues={props.state.filter.filterValues} 
        // loading={loading} 
        // songsSkeleton={state.playlist.tracks} 
        // playlistsSkeleton={props.state.playlist.UserPlaylists}
        songInfoURL={props.state.currentSong.songInfoURL}
        artistInfoURL={props.state.currentSong.artistInfoURL}
        songName={props.state.currentSong.songName}
        artistName={props.state.currentSong.artistName} 
      />
    </div>
  )
}

export default App;
