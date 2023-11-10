import Nav from "./components/Nav";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Reservas from "./components/Reservas";
import Registro from "./components/Registro";
import CabañaInfo from "./components/CabñaInfo";
import LadingPage from "./components/LadingPage";
import ActividadUsuario from "./components/ActividadUsuario";
import AdminVista from "./components/AdminComponents/components/AdminVista";
import NavAdmin from "./components/AdminComponents/components/NavAdmin";
import IngresosView from "./components/AdminComponents/components/PaginaIngresos";
import Menu from "./components/AdminComponents/components/Menu";
import GraficosSeccionados from "./components/AdminComponents/components/PaginaGraficas";
import EgresosView from "./components/AdminComponents/components/PaginaEgresos";
import ReservasView from "./components/AdminComponents/components/PaginaReservas";
import Ubicacion from "./components/ubicacion";
// import ReservasOption from './components/AdminComponents/components/ReservasOpcion'
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LadingPage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/cabañasInfo" element={<CabañaInfo />} />
          <Route path="/actividad-usuario" element = {<ActividadUsuario />} />
          <Route path="/ubicacion" element = {<Ubicacion />} />

        </Route>
        <Route path="/admin" element={<NavAdmin />}>
          <Route path="MenuPrincipal" element={<AdminVista />} />
          <Route path="paginaEgresos" element={<EgresosView />} />
          <Route path="Graficas" element={<GraficosSeccionados />} />
          <Route path="paginaIngresos" element={<IngresosView />} />
          <Route path="Reservas" element={<ReservasView />} />
          <Route path="Menu" element={<Menu />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
