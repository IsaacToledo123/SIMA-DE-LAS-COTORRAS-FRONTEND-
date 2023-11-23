import { createContext, useState, useEffect } from "react";
import axios from "axios";
//import { API_URL } from "../config";

export const AventuraContext = createContext()

export function AventuraContextProvider(props) {

      const [aventuras, setAventuras] = useState([]);
      const [cabañas, setCabañas] = useState([]);
      const API_URL = import.meta.env.VITE_REACT_APP_API_URL

      useEffect(() => {

            axios.get(`${API_URL}/api/aventuras/`)
                  .then(e => setAventuras(e.data.aventuras))
                  .catch(e => console.log(e))


            axios.get(`${API_URL}/api/cabañas/`)
                  .then(e => setCabañas(e.data.message))
                  .catch(e => console.log(e))

      }, []);

      return (

            <AventuraContext.Provider value={{

                  aventuras : aventuras,
                  cabañas : cabañas

            }}>

            {props.children}

            </AventuraContext.Provider>


      )


}

export default AventuraContext;