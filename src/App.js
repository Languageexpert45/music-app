import React, { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import {state} from './state'



function App (props) {

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
        userReg={props.userReg}
        artist={props.state.filter.artistsData} 
        year={props.state.filter.yearsData} 
        genre={props.state.filter.genreData} 
        filterValues={props.state.filter.filterValues} 
        // loading={loading} 
        songs={state.playlist.allTracks} 
        dayPlaylist={state.playlist.dayPlaylistTracks}
        top100DanceHits={state.playlist.top100HitsTracks}
        indieHits={state.playlist.indieHitsTracks}
        // songsSkeleton={state.playlist.tracks} 
        playlists={props.state.playlist.playlistsLinks} 
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
