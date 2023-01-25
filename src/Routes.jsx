import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Registration from './Pages/RegistrationPage/Registration';
import MainPage from './Pages/MainPage/MainPage';
import Error404 from './Pages/ErrorPage/Error404';
import LogIn from './Pages/LoginPage/LogIn';
import ProtectedRoute from './protected-route/protectedRoute';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from './store/selectors/auth';

export const AppRoutes = (props) => {
  
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Routes>
      <Route path="/reg" element={<Registration {...props} />} />
      <Route path="/" element={<LogIn {...props} />} />
      <Route path="*" element={<Error404 />} />
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
        <Route path="/main/" element={<MainPage {...props} />} />
        <Route path="/main/compilation/:id" element={<MainPage {...props} />} />
      </Route>
    </Routes>
  );
};
