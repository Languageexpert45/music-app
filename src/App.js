import React, { useState, useEffect, useParams } from "react";
import { AppRoutes } from "./routes";
import { userReg, userLogin} from './state';



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
        userLogin={userLogin}
        userReg={userReg}
        artist={props.state.filter.artistsData} 
        year={props.state.filter.yearsData} 
        genre={props.state.filter.genreData} 
        filterValues={props.state.filter.filterValues} 
        // loading={loading} 
        tracks={props.state.playlist} 
        // dayPlaylist={props.state.playlist.dayPlaylistTracks}
        // top100DanceHits={props.state.playlist.top100HitsTracks}
        // indieHits={props.state.playlist.indieHitsTracks}
        favorite={props.state.playlist.userTracks}
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
