import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const ProtectedRoute = () => {

      const token = localStorage.getItem('token');
      console.log("aqui" + token)

      if (!token) {
            console.log("Primer condicion")
            return <Navigate to="/login" />

      }

      const decodeToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodeToken.exp < currentTime) {
            console.log("Segunda condicion")
            return <Navigate to="/login" />

      }

      return <Outlet />

}

export default ProtectedRoute;