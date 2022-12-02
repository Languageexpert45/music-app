import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';
import track from '../src/media/Bobby_Marleni_Dropin.mp3';

// let renderEntireTree = () => {
//     console.log('the state was updeted');
// }

export const state = {

    playlists: [
        {
            id: 1,
            playlistName: 'Плейлист дня',
            tracks: [
                        {track: '1111111', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: '222222', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                        {track: '3333333', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                        {track: '4444444', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: '5555555', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                    ],
            img: playlist01},
        {
            id: 2,
            playlistName: '100 танцевальных хитов',
            tracks: [
                        {track: '6666666', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: '7777777', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                        {track: '8888888', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                        {track: '99999999', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: '00000000', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                    ],
            img: playlist02},
        {
            id: 3,
            playlistName: 'Инди-заряд',
            tracks: [
                        {track: '12121212', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: '23232323', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                        {track: '45454545', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                        {track: '56565656', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: '67676767', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                    ],
            img: playlist03
        },
        {
            id: 4,
            playlistName: 'Все трэки',
            tracks: [
                        {track: 'fffff', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: 'ggggg', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                        {track: 'hhhhh', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                        {track: 'iiiiii', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: 'jjjjjj', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                    ],
        },
        {
            id: 5,
            playlistName: 'Любимое',
            tracks: [
                        {track: 'kkkkkk', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: 'llllll', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                        {track: 'mmmmmm', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                        {track: 'nnnnnn', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                        {track: 'ooooooo', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                    ],
        },
    ],
    tracks: [
        {
            title: 'Dropin',
            artist: 'Bobby Marleni',
            audioSrc: track,
            image: '',
            color: '',
        },
    ],
    filter: {
        artistsData: ['Linkin Park', 'Placebo', 'Evanessence', 'Portishead','Linkin Park', 'Placebo', 'Evanessence', 'Portishead'],
        yearsData:  ['2002', '2001', '2010', '2011'],
        genreData:  ['pop', 'funk', 'electro', 'rock'],
        filterValues: ['исполнителю', 'году выпуска', 'жанру'],
    },
    currentSong: {
        songInfoURL: 'https//',
        artistInfoURL: 'https//',
        songName: 'Ты та...',
        artistName: 'Баста',
    },
}