import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AdministradorContext = createContext();

export function AdministradorContextProvider(props) {

      const [ingresos, setIngresos] = useState([]);
      const API_URL = import.meta.env.VITE_REACT_APP_API_URL
      const token = localStorage.getItem('token-admin');

      useEffect(() => {

            axios.get(`${API_URL}/api/administrador/ingresos/`, {
                  headers: {
                        Authorization: `${token}`
                  }
            })
                  .then(e => {

                        if (e.status == 200) {

                              setIngresos(e.data.Ingresos)

                        }

                  })
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