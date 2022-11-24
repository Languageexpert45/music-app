import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';

let renderEntireTree = () => {
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

        userTracks: [
            {track: 'ppppppppp', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'qqqqqqqqq', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
            {track: 'rrrrrrrrr', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
            {track: 'sssssssss', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
            {track: 'ttttttttt', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
        ],
        
        playlistsLinks: [
            {
                id: 1,
                playlistName: 'Плейлист дня',
                tracks: [
                            {track: 'kkkkkkk', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                            {track: 'llllllll', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                            {track: 'mmmmmmmm', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                            {track: 'nnnnnnnn', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                            {track: 'oooooooo', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                        ],
                img: playlist01},
            {
                id: 2,
                playlistName: '100 танцевальных хитов',
                tracks: [
                            {track: 'fffffff', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                            {track: 'ggggggg', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                            {track: 'hhhhhhhh', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                            {track: 'iiiiiiii', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                            {track: 'jjjjjjjj', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                        ],
                img: playlist02},
                {
                id: 3,
                playlistName: 'Инди-заряд',
                tracks: [
                            {track: 'aaaaa', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                            {track: 'bbbbb', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'},
                            {track: 'ccccc', artist: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12'},
                            {track: 'ddddd', artist: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22'},
                            {track: 'eeeee', artist: 'Ali Bakgor', album: 'I’m Fire', time: '2:22'}
                        ],
                img: playlist03},
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
    userRegData: {
        login: '',
        password: '',
    },
}

export const getName = (name) => {
        return name
    }



export const onUserReg = (login, password) => {
    state.userRegData.login = login,
    state.userRegData.password = password,
    renderEntireTree(state)
    console.log(state);
}


export const onUserLogin = (login, password) => {
    if (state.userRegData.login !== login || state.userRegData.password !== password) {
        console.log('пароль или логин не совпадают');
        renderEntireTree(state);
    }
    if (state.userRegData.login === login && state.userRegData.password === password) {
        localStorage.setItem('token01', 'user')
        renderEntireTree(state);
    } 
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}