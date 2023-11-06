import Nav from "./components/Nav";

import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Reservas from "./components/Reservas";
import Registro from "./components/Registro";
import CabañaInfo from "./components/CabñaInfo";
import LadingPage from "./components/LadingPage";
import PagoConStripe from "./components/PagoConStripe";
import AdminVista from "./components/AdminComponents/components/AdminVista";
import NavAdmin from "./components/AdminComponents/components/NavAdmin";
import IngresosView from "./components/AdminComponents/components/PaginaIngresos";
import Menu from "./components/AdminComponents/components/Menu";
import GraficosSeccionados from "./components/AdminComponents/components/PaginaGraficas";
import EgresosView from "./components/AdminComponents/components/PaginaEgresos";
import ReservasView from "./components/AdminComponents/components/PaginaReservas";

function App() {
  return (
    <BrowserRouter>
      {/* <Nav></Nav> */}
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LadingPage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/cabañasInfo" element={<CabañaInfo />} />
          <Route path="/pago-stripe" element={<PagoConStripe />} />
        </Route>
        <Route path="/admin" element={<NavAdmin />}>
          <Route path="/admin/MenuPrincipal" element={<AdminVista />} />
          <Route path="/admin/paginaEgresos" element={<EgresosView />} />
          <Route path="/admin/Graficas" element={<GraficosSeccionados />} />
          <Route path="/admin/paginaIngresos" element={<IngresosView />} />
          <Route path="/admin/Reservas" element={<ReservasView />} />
          <Route path="/admin/Menu" element={<Menu />} />
        </Route>
      </Routes>
      {/* <Registro></Registro> */}
    </BrowserRouter>
  );
}

export default App;
