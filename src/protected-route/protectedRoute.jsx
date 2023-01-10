
import {Navigate, Outlet} from 'react-router-dom';



export const ProtectedRoute = ({ isAllowed, redirectTo = '/' }) =>
  isAllowed ? <Outlet /> : <Navigate to={redirectTo} />;

export default ProtectedRoute