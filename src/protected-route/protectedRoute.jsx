
import {Navigate, Outlet} from 'react-router-dom';



export const ProtectedRoute = ({ redirectPath = "/", isAllowed='token' }) => {
  if (isAllowed !== 'token') {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet/>;
};

export default ProtectedRoute