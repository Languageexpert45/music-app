import {Routes, Route, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import Registration from './Pages/RegistrationPage/Registration'
import Main from './Pages/MusicPage/Main'
import Error404 from './Pages/ErrorPage/Error404'
import LogIn from './Pages/LoginPage/LogIn'
import ProtectedRoute from './protected-route/protectedRoute';

export const AppRoutes = (props) => {

    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={'token'}/>}>
                <Route path='/main/:name' element={<Main {...props}/>}/>
            </Route>
            <Route path='/reg' element={<Registration {...props} />}/>
            <Route  path='/' element={<LogIn {...props}  />}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    );
};
