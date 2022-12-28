import React, { useState, useEffect } from 'react';
import { AppRoutes } from './Routes';
import { useRefreshMutation } from './services/user';
import { useDispatch } from 'react-redux';
import { tokenReceived } from './store/slices/auth';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from './store/selectors/auth';

const App = (props) => {
  const [tokenRefresh, result] = useRefreshMutation();

  const dispatch = useDispatch();

  const loggedIn = useSelector(isLoggedInSelector);



  useEffect(() => {
    if (loggedIn) {
      const timer = setTimeout(() => {
        tokenRefresh({ refresh: localStorage.getItem('tokenRefresh') });
      }, 300000);
      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(tokenReceived(result.data));
    }
  }, [result.isSuccess]);

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
  );
};

export default App;
