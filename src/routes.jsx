import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import Registration from './Pages/RegistrationPage/Registration'
import Main from './Pages/MusicPage/Main'
import Error404 from './Pages/ErrorPage/Error404'
import LogIn from './Pages/LoginPage/LogIn'
import ProtectedRoute from './protected-route/protectedRoute';

export const AppRoutes = (props) => {

    const playlistPath = (name) => {
        console.log(name);
    }


    const playlists = props.playlists
    const playlist = playlists.find((playlist) => playlist.id === 1);
    


    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={localStorage.getItem('token01')}/>}>
                <Route path='/main/' element={<Main {...props} playlistPath={playlistPath} tracks={props.tracks.allTracks} header='Все треки' />}/>
                <Route path='/playlist/:name' element={<Main {...props} playlistPath={playlistPath}  tracks={playlist.tracks} header={playlist.playlistName} />}/>
            </Route>
            
            <Route path='/reg' element={<Registration {...props} />}/>
            <Route  path='/' element={<LogIn {...props}  />}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    );
};