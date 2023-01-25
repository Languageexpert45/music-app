import React, { useState, useEffect } from 'react';
import { AppRoutes } from './Routes';
import { useRefreshMutation } from './services/user';
import { useDispatch } from 'react-redux';
import { tokenReceived } from './store/slices/auth';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from './store/selectors/auth';

const App = () => {
  const [tokenRefresh, result] = useRefreshMutation();

  const dispatch = useDispatch();

  const loggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (window.performance) {
      tokenRefresh({ refresh: localStorage.getItem('tokenRefresh') });
    }
  }, [window.performance]);

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
      <AppRoutes />
    </div>
  );
};

export default App;
