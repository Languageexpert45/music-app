import React, { useState, useEffect } from "react";
import { AppRoutes } from "./Routes";
import {useSelector} from "react-redux";
import { usersSelector } from "./store/selectors/addUser";


const App = (props) => {

  const users = useSelector(usersSelector)
 
 

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
        // checkUserReg={checkUserReg}
        // password={userPassword}
        // user={users}
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
