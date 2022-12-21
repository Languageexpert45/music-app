import React, { useState, useEffect } from "react";
import { AppRoutes } from "./Routes";
import { useGetRefreshUserTokenMutation } from "./services/tracks";






const App = (props) => {

    // const [tokenRefresh, result] = useGetRefreshUserTokenMutation();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         tokenRefresh({"refresh":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MTU0MzE0NiwiaWF0IjoxNjcxNDU2NzQ2LCJqdGkiOiJkMGE5OThlYWZiNDg0YzBlODY1MGU1NWMwZGRmOTczMCIsInVzZXJfaWQiOjkwfQ.9N78QEPsczLSw_HcOizGcJdK7K0cVoVyPUAyBHbN1iA"})
    //     }, 600000);
    //     return () => clearTimeout(timer);
    // });

    // console.log(result.data);

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
