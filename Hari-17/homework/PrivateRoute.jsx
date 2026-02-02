// Nomor 1 
import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;
