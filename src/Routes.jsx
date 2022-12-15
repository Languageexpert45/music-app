import {Routes, Route, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import Registration from './Pages/RegistrationPage/Registration';
import MainPage from './Pages/MainPage/MainPage';
import Error404 from './Pages/ErrorPage/Error404';
import LogIn from './Pages/LoginPage/LogIn';
import ProtectedRoute from './protected-route/protectedRoute';
import CompilationPage from './Pages/CompilationPage/CompilationPage';

export const AppRoutes = (props) => {

    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={localStorage.token}/>}>
                <Route path='/main/' element={<MainPage {...props}/>}/>
                <Route path='/main/compilation/:id' element={<CompilationPage {...props}/>}/>
            </Route>
            <Route path='/reg' element={<Registration {...props} />}/>
            <Route  path='/' element={<LogIn {...props}  />}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    );
};
