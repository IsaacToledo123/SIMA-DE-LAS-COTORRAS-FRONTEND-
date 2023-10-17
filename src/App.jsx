import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import './App.css'
import {BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Reservas from './components/Reservas'
import Registro from './components/Registro'
import CabañaInfo from './components/CabñaInfo'  
import LadingPage from './components/LadingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        {/* <Nav></Nav> */}
        <Routes>
          <Route path='/' element={<Nav/>}>
              <Route index element={<LadingPage/>} />
              <Route path='/registro' element={<Registro/>} />
              <Route path='/reservas' element={<Reservas/>}/>
              <Route path='/cabañasInfo' element={<CabañaInfo/>}/>

          </Route>
 
        </Routes>
          {/* <Registro></Registro> */}
    </BrowserRouter>
  )
}

export default App
