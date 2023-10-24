import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

export const UsuarioContext = createContext();

export function UsuariosContextProvider(props) {

      const [usuarios, setUsuarios] = useState([]);
      const [comentarios, setComentarios] = useState([]);
      const [autenticacion, setAutenticacion] = useState({});

      useEffect(() => {
            // Obteniendo todos los comentarios de la pagina
            axios.get(`${API_URL}/api/usuarios-opinions/`)
                  .then(e => setComentarios(e.data.comments))
                  .catch(e => console.log(e))

      }, []);

      const autenticarUsuario = credenciales => {

            console.log("Hola estamos autenticando usaurio");

            axios.post(`${API_URL}/api/usuarios/`, {credenciales})
                  .then(e => console.log(e))
                  .catch(e => console.log(e));
            

      }

      return (

            <UsuarioContext.Provider value={{

                  comentarios : comentarios,
                  autenticarUsuario : autenticarUsuario

            }}>

                  {props.children}

            </UsuarioContext.Provider>


      )

}
