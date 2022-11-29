import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { onUserReg, onUserLogin} from './state';



const App = (props) => {


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
        onUserLogin={onUserLogin}
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
