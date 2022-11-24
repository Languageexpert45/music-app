import {Routes, Route} from 'react-router-dom';
import { useState } from "react";
import Registration from './Pages/RegistrationPage/Registration'
import Main from './Pages/MusicPage/Main'
import Error_404 from './Pages/ErrorPage/Error_404'
import LogIn from './Pages/LoginPage/LogIn'
import ProtectedRoute from './protected-route/protectedRoute';

export const AppRoutes = (props) => {

    let [path, setPath] = useState(0)

    const getName = (name) => {
        setPath(name)
    }

    const playlists = props.playlists
    const playlist = playlists.find((playlist) => playlist.id === 1);
    


    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={localStorage.getItem('token01')}/>}>
                <Route path='/main/' element={<Main {...props} tracks={props.tracks.allTracks} header='Все треки' />}/>
                <Route path='/playlist/:name' element={<Main {...props} returnName = {getName} tracks={playlist.tracks} header={playlist.playlistName} />}/>
            </Route>
            
            <Route path='/reg' element={<Registration userReg={props.userReg} />}/>
            <Route  path='/' element={<LogIn userLogin={props.userLogin} />}/>
            <Route path='*' element={<Error_404/>}/>
        </Routes>
    );
};