import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';

let renderEntireTree = () => {
    console.log('state changed');
}

export const state = {
    playlist: {
        allTracks: [
            {track: 'Elektro', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'I’m Fire', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
            {track: 'Non Stop', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
            {track: 'Elektro', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'I’m Fire', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
        ],
        dayPlaylistTracks: [
            {track: 'aaaaa', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'bbbbb', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
            {track: 'ccccc', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
            {track: 'ddddd', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'eeeee', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
        ],
        indieHitsTracks: [
            {track: 'fffffff', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'ggggggg', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
            {track: 'hhhhhhhh', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
            {track: 'iiiiiiii', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'jjjjjjjj', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
        ],
        top100HitsTracks: [
            {track: 'kkkkkkk', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'llllllll', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
            {track: 'mmmmmmmm', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
            {track: 'nnnnnnnn', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'oooooooo', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
        ],

        userTracks: [
            {track: 'ppppppppp', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'qqqqqqqqq', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
            {track: 'rrrrrrrrr', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
            {track: 'sssssssss', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'ttttttttt', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
        ],
        
        playlistsLinks: [
            {playlistName: 'Day playlist', playlistHREF: '/dayPl', img: playlist01},
            {playlistName: 'Top 100 dance hits', playlistHREF: '/top100Pl', img: playlist02},
            {playlistName: 'Indie hits', playlistHREF: '/indiePl', img: playlist03},
        ]
    },
    filter: {
        artistsData: ['Linkin Park', 'Placebo', 'Evanessence', 'Portishead'],
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
    userReg: {
        login: '',
        password: '',
    },
    userToken: '',
}


export const userReg = (login, password) => {
    state.userReg.login = login,
    state.userReg.password = password,
    renderEntireTree(state)

    
    console.log(state.userReg);
}


export const userLogin = (login, password) => {
    if (state.userReg.login !== login || state.userReg.password !== password) {
        console.log('пароль или логин не совпадают');
        renderEntireTree(state);
    }
    if (state.userReg.login === login && state.userReg.password === password) {
        state.userToken = 'token01';
        renderEntireTree(state);
    } 
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}