import Nav from './components/Nav'
import './App.css'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Reservas from './components/Reservas'
import Registro from './components/Registro'
import CabañaInfo from './components/CabñaInfo'
import LadingPage from './components/LadingPage'
import PagoConStripe from './components/PagoConStripe'
import AdminVista from './components/AdminComponents/components/AdminVista'
  

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
          <Route path='/admin-vista' element={<AdminVista/>}/> 
        </Route>

      </Routes>
      {/* <Registro></Registro> */}
    </BrowserRouter>
  )
}

export default App
