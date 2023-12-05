import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const ProtectedRoute = () => {

      const token = localStorage.getItem('token-admin');      

      if (!token) {            
            return <Navigate to="/login" />

      }

      const decodeToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodeToken.exp < currentTime) {            
            return <Navigate to="/login" />

      }

      return <Outlet />

}

export default ProtectedRoute;