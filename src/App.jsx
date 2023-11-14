import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reservas from "./components/Reservas";
import Registro from "./components/Registro";
import CabañaInfo from "./components/CabñaInfo";
import LadingPage from "./components/LadingPage";
import ActividadUsuario from "./components/ActividadUsuario";
import Menu from "./components/AdminComponents/components/Menu";
import GraficosSeccionados from "./components/AdminComponents/components/PaginaGraficas";
import ReservasView from "./components/AdminComponents/components/PaginaReservas";
import Layout from "./Layout";
import Home from "./components/AdminComponents/components/Home";
import TablaIngresosYReservaciones from "./components/AdminComponents/components/Increase";
import TablaEgresos from "./components/AdminComponents/components/Decrease"
import Login from "./components/AdminComponents/components/Login";
import ProtectedRoute from "./components/AdminComponents/components/ProtectedRoute";


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
          <Route path="/actividad-usuario" element={<ActividadUsuario />} />
        </Route>

        {/*<Route path="/admin" element={<NavAdmin />}>
          <Route index element={<AdminVista />} />
          <Route path="paginaEgresos" element={<EgresosView />} />
          <Route path="Graficas" element={<GraficosSeccionados />} />
          <Route path="paginaIngresos" element={<IngresosView />} />
          <Route path="Reservas" element={<ReservasView />} />
          <Route path="Menu" element={<Menu />} />
          </Route>*/}

        {/* Se ha agregado */}
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute/>}>
          <Route
            path="/admin/*"
            element={
              <Layout>

                <Routes>
                  <Route index element={<Home />} />
                  <Route path="paginaEgresos" element={<TablaEgresos />} />
                  <Route path="Graficas" element={<GraficosSeccionados />} />
                  <Route path="paginaIngresos" element={<TablaIngresosYReservaciones />} />
                  <Route path="Reservas" element={<ReservasView />} />
                  <Route path="Menu" element={<Menu />} />
                </Routes>
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
