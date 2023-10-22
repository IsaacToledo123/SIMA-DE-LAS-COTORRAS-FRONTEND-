import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AventuraContextProvider } from './context/AventuraContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AventuraContextProvider>

      <App />
      
    </AventuraContextProvider>

  </React.StrictMode>,

)
