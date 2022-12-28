import { React, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import CenterblockHeader from '../../components/CenterblockHeader/CenterblockHeader';
import CenterblockFilter from '../../components/CenterblockFilter/CenterblockFilter';
import MainContent from '../../components/CenterblockContent/MainContent';
import CompilationsContent from '../../components/CenterblockContent/CompilationsContent';
import FavoritesContent from '../../components/CenterblockContent/FavoritesContent';
import SideBar from '../../components/SideBar/SideBar';
import Bar from '../../components/Bar/Bar';
import useLocalStorage from 'use-local-storage';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPage = (props) => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const { id } = useParams();



  const getTracksFromChosenPlaylist = (tracks) => {
    setSourceTracks(tracks);
  }
  const [sourceTracks, setSourceTracks] = useState(null);

  useEffect(() => {
    if (sourceTracks) {
     setSourceTracks(sourceTracks);
    }
  }, [sourceTracks]);



  const [tracksContent, setTracksContent] = useState(null);

  useEffect(() => {
    if (id === '1' || id === '2' || id === '3') {
      setTracksContent(<CompilationsContent tracks={getTracksFromChosenPlaylist} />);
    }
    if (id === '4') {
      setTracksContent(<FavoritesContent />);
    }
    if (id === undefined) {
      setTracksContent(<MainContent tracks={getTracksFromChosenPlaylist} />);
    }
  }, [id]);

  return (
    <div className="container" data-theme={theme}>
      <main className="main">
        <Navbar {...props} switchTheme={switchTheme} />
        <div className="main__centerblock centerblock">
          <Search />
          <CenterblockHeader />
          <CenterblockFilter {...props} />
          {tracksContent}
        </div>
        <SideBar />
      </main>
      <Bar tracks={sourceTracks} />
    </div>
  );
};

export default MainPage;
