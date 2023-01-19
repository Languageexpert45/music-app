import { React, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import CenterblockHeader from '../../components/CenterblockHeader/CenterblockHeader';
import CenterblockFilter from '../../components/CenterblockFilter/CenterblockFilter';
import MainContent from '../../components/CenterblockContent/MainContent';
import CompilationsContent from '../../components/CenterblockContent/CompilationsContent';
import FavoritesContent from '../../components/CenterblockContent/FavoritesContent';
import SideBar from '../../components/SideBar/SideBar';
import useLocalStorage from 'use-local-storage';
import { useParams } from 'react-router-dom';
import Player from '../../components/Bar/PlayerUI/PlayerControl/Player';
import { useGetAllTracksQuery } from '../../services/tracks';

const MainPage = (props) => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const { data: allTracks, error, isLoading } = useGetAllTracksQuery();

  const { id } = useParams();

  const [sourceTracks, setSourceTracks] = useState(undefined);

  const [trackId, setTrackId] = useState(undefined);

  const [searchedTrackId, setSearchedTrackId] = useState(undefined);

  const getTracksFromChosenPlaylist = (tracks) => {
    if (tracks) {
      setSourceTracks(tracks);
    }
  };

  const getTrackId = (id) => {
    setTrackId(id);
  };

  const getSearchedTrackId = (id) => {
    setSearchedTrackId(id);
  };

  const [tracksContent, setTracksContent] = useState(null);

  useEffect(() => {
    if (id === '1' || id === '2' || id === '3') {
      setTracksContent(
        <CompilationsContent
          tracks={getTracksFromChosenPlaylist}
          trackId={getTrackId}
        />
      );
    }
    if (id === '4') {
      setTracksContent(
        <FavoritesContent
          tracks={getTracksFromChosenPlaylist}
          trackId={getTrackId}
        />
      );
    }
    if (id === undefined) {
      setTracksContent(
        <MainContent
          tracks={getTracksFromChosenPlaylist}
          trackId={getTrackId}
        />
      );
    }
  }, [id]);

  return (
    <div className="container" data-theme={theme}>
      <main className="main">
        <Navbar switchTheme={switchTheme} />
        <div className="main__centerblock centerblock">
          <Search tracks={allTracks} trackId={getSearchedTrackId} />
          <CenterblockHeader />
          <CenterblockFilter tracks={allTracks} trackId={getTrackId} filteredTracks={getTracksFromChosenPlaylist} />
          {tracksContent}
        </div>
        <SideBar />
      </main>
      <Player
        searchedTracks={allTracks}
        tracks={sourceTracks}
        id={trackId}
        searchedTrackId={searchedTrackId}
      />
    </div>
  );
};

export default MainPage;
