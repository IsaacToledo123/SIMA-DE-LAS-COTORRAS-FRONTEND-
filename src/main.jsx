import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AventuraContextProvider } from './context/AventuraContext.jsx'
import { UsuariosContextProvider } from './context/UsuarioContext.jsx'
import { AdministradorContextProvider } from './context/AdminContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AdministradorContextProvider>

      <AventuraContextProvider>

        <UsuariosContextProvider>

          <App />

        </UsuariosContextProvider>

      </AventuraContextProvider>
      
    </AdministradorContextProvider>

  </React.StrictMode>,

)
