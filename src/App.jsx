import Nav from './components/Nav'

import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Reservas from './components/Reservas'
import Registro from './components/Registro'
import CabañaInfo from './components/CabñaInfo'
import LadingPage from './components/LadingPage'
import PagoConStripe from './components/PagoConStripe'
import AdminVista from './components/AdminComponents/components/AdminVista'
import NavAdmin from './components/AdminComponents/components/NavAdmin'
import PaginaEgresos from './components/AdminComponents/components/PaginaEgresos'
import PaginaGraficas from './components/AdminComponents/components/PaginaGraficas'
import PaginaIngresos from './components/AdminComponents/components/PaginaIngresos'
import PaginaReservas from './components/AdminComponents/components/PaginaReservas'
import ReservasOption from './components/AdminComponents/components/ReservasOpcion'
import Menu from './components/AdminComponents/components/Menu'
function App() {

  return (
    <BrowserRouter>
      {/* <Nav></Nav> */}
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<LadingPage />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/cabañasInfo' element={<CabañaInfo />} />
          <Route path='/pago-stripe' element={<PagoConStripe />} />
          

        </Route>
        <Route  path='/admin' element={<NavAdmin />}>
        <Route path='/admin/MenuPrincipal' element={<AdminVista />} />
<Route path='/admin/paginaEgresos' element={<PaginaEgresos/>}/>
<Route path='/admin/Graficas' element={<PaginaGraficas/>}/>
<Route path='/admin/paginaIngresos' element={<PaginaIngresos/>}/>
<Route path='/admin/Reservas' element={<PaginaReservas/>}/>
<Route path='/admin/reservasOpcion' element={<ReservasOption  />}/>
<Route path='/admin/Menu' element={<Menu />}/>


        </Route>

      </Routes>
      {/* <Registro></Registro> */}
    </BrowserRouter>
  )
}

export default App
