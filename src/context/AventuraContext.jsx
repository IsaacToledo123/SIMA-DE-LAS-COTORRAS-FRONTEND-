import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";

export const AventuraContext = createContext()

export function AventuraContextProvider(props) {

      const [aventuras, setAventuras] = useState([]);

      useEffect(() => {

            axios.get(`${API_URL}/api/aventuras/`)
                  .then(e => setAventuras(e.data.aventuras))
                  .catch(e => console.log(e))

      }, []);

      return (

            <AventuraContext.Provider value={{

                  aventuras : aventuras


            }}>

            {props.children}

            </AventuraContext.Provider>


      )


}

export default AventuraContext;