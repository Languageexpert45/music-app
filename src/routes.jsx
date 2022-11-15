import {Routes, Route} from 'react-router-dom';
import Registration from './Pages/RegistrationPage/Registration'
import Main from './Pages/MusicPage/Main'
import Error_404 from './Pages/ErrorPage/Error_404'
import LogIn from './Pages/LoginPage/LogIn'

export const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path='/main' element={<Main {...props} />}/>
            <Route path='/reg' element={<Registration/>}/>
            <Route path='/' element={<LogIn/>}/>
            <Route path='*' element={<Error_404/>}/>
        </Routes>
    );
};