import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AdministradorContext = createContext();

export function AdministradorContextProvider(props) {

      const [ingresos, setIngresos] = useState([]);
      const API_URL = import.meta.env.VITE_REACT_APP_API_URL
      const token = localStorage.getItem('token')

      useEffect(() => {

            axios.get(`${API_URL}/api/administrador/ingresos/`, {
                  headers: {
                        Authorization: `${token}`
                  }
            })
                  .then(e => console.log(e))
                  .catch(e => console.log(e))

      }, []);

      return (

            <AdministradorContext.Provider value={{

                  ingresos

            }}>

                  {props.children}

            </AdministradorContext.Provider>

      )
}