import React, { useState, useEffect } from "react";
import Navbar from './components/MusicPage/Navbar/Navbar';
import Search from './components/MusicPage/Search/Search';
import CenterblockHeader from './components/MusicPage/CenterblockHeader/CenterblockHeader';
import CenterblockFilter from './components/MusicPage/CenterblockFilter/CenterblockFilter';
import CenterblockContent from './components/MusicPage/CenterblockContent/CenterblockContent';
import SideBar from './components/MusicPage/SideBar/SideBar';
import Bar from './components/MusicPage/Bar/Bar';
import playlistData from "./js/PlayListData";
import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';

const artistsData =  ['Linkin Park', 'Placebo', 'Evanessence', 'Portishead'];

const yearsData =  ['2002', '2001', '2010', '2011'];

const genreData =  ['pop', 'funk', 'electro', 'rock'];

function App (props) {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
        setSongs(playlistData);
        setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
  
  return (
    <div className="wrapper">
        <div className="container">
          <main className="main">
            <Navbar/>
            <div className="main__centerblock centerblock"  >
              <Search />
              <CenterblockHeader />
              <CenterblockFilter artist = {artistsData} year = {yearsData} genre = {genreData} />
              <CenterblockContent songs = {songs} skeleton = {playlistData} loading = {loading} />
            </div>
            <SideBar playlist01 = {playlist01} playlist02 = {playlist02} playlist03 = {playlist03} loading = {loading} />
          </main>
          <Bar loading={loading}/>
        </div>
    </div>
  )
}


export default App;
