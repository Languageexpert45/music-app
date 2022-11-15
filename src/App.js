import React, { useState, useEffect } from "react";
import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';
import { AppRoutes } from "./routes";


const playlistData = [
  {track: 'Elektro', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
  {track: 'I’m Fire', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
  {track: 'Non Stop', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
  {track: 'Elektro', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
  {track: 'I’m Fire', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
];

const playlists = [
  {playlistName: 'Day playlist', playlistHREF: 'https://', img: playlist01},
  {playlistName: 'Top 100 dance hits', playlistHREF: 'https://', img: playlist02},
  {playlistName: 'Indie hits', playlistHREF: 'https://', img: playlist03},
]

const artistsData =  ['Linkin Park', 'Placebo', 'Evanessence', 'Portishead'];

const yearsData =  ['2002', '2001', '2010', '2011'];

const genreData =  ['pop', 'funk', 'electro', 'rock'];

const filterValues = ['исполнителю', 'году выпуска', 'жанру'];

const currentSong = {
  songInfoURL: 'https//',
  artistInfoURL: 'https//',
  songName: 'Ты та...',
  artistName: 'Баста',
}


function App (props) {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
        setSongs(playlistData);
        setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
  
  return (
    <div className="wrapper">
      <AppRoutes
      artist={artistsData} 
      year={yearsData} 
      genre={genreData} 
      filterValues={filterValues} 
      loading={loading} 
      songs={songs} 
      songsSkeleton={playlistData} 
      playlists={playlists} 
      playlistsSkeleton={playlists}
      songInfoURL={currentSong.songInfoURL}
      artistInfoURL={currentSong.artistInfoURL}
      songName={currentSong.songName}
      artistName={currentSong.artistName} />
    </div>
  )
}

export default App;
