import {Routes, Route} from 'react-router-dom';
import Registration from './Pages/RegistrationPage/Registration'
import Main from './Pages/MusicPage/Main'
import Error_404 from './Pages/ErrorPage/Error_404'
import LogIn from './Pages/LoginPage/LogIn'
import DayPlayListPage from './Pages/PlaylistPages/DayPlayListPage';

export const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path='/main' element={<Main {...props} header='Все треки' />}/>
            <Route path='/dayPl' element={<Main {...props} songs={props.dayPlaylist} header='Плейлист Дня'/>}/>
            <Route path='/top100Pl' element={<Main {...props} songs={props.top100DanceHits} header='Топ 100' />}/>
            <Route path='/indiePl' element={<Main {...props} songs={props.indieHits} header='Инди' />}/>
            <Route path='/userPl' element={<Main {...props} songs={props.indieHits} header='Ваши любимые композиции' />}/>
            <Route path='/reg' element={<Registration userReg={props.userReg}/>}/>
            <Route path='/' element={<LogIn/>}/>
            <Route path='*' element={<Error_404/>}/>
        </Routes>
    );
};