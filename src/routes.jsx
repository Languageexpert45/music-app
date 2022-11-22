import {Routes, Route} from 'react-router-dom';
import Registration from './Pages/RegistrationPage/Registration'
import Main from './Pages/MusicPage/Main'
import Error_404 from './Pages/ErrorPage/Error_404'
import LogIn from './Pages/LoginPage/LogIn'
import ProtectedRoute from './protected-route/protectedRoute';

export const AppRoutes = (props) => {


    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={localStorage.getItem('token01')}/>}>
                <Route path='/main/' element={<Main {...props} header='Все треки' />}/>
                <Route path='/dayPl/' element={<Main {...props} tracks={props.dayPlaylist} header='Плейлист Дня'/>}/>
                <Route path='/top100Pl/' element={<Main {...props} tracks={props.top100DanceHits} header='Топ 100' />}/>
                <Route path='/indiePl' element={<Main {...props} tracks={props.indieHits} header='Инди' />}/>
                <Route path='/userPl' element={<Main {...props} tracks={props.favorite}  header='Ваши любимые композиции' />}/>
            </Route>
            
            <Route path='/reg' element={<Registration userReg={props.userReg} />}/>
            <Route  path='/' element={<LogIn userLogin={props.userLogin} />}/>
            <Route path='*' element={<Error_404/>}/>
        </Routes>
    );
};