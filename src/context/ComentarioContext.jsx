import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";

export const ComentarioContext = createContext();

export function ComentarioContextProvider(props) {

      const [comentarios, setComentarios] = useState([]);

      useEffect(() => {

            axios.get(`${API_URL}/api/usuarios-opinions/`)
                  .then(e => setComentarios(e.data.comments))
                  .catch(e => console.log(e))

      }, []);

      return (

            <ComentarioContext.Provider value={{

                  comentarios: comentarios

            }}>

                  {props.children}

            </ComentarioContext.Provider>

      )


}

export default ComentarioContext