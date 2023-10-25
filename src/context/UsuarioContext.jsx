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

            axios.post(`${API_URL}/api/usuarios/`, credenciales)

                  .then(e => console.log(e.data.message))
                  .catch(error => {

                        if (error.message) {

                              if (error.response.status === 401) {

                                    console.log('Credenciales incorrectas. Por favor, inténtalo de nuevo.');

                              } else {

                                    console.log('Error de respuesta del servidor:', error.response.status, error.response.data);
                              }

                        } else if (error.request) {
                              
                              console.error('Error de solicitud sin respuesta:', error.request);

                            } else {
                              
                              console.error('Error de configuración de la solicitud:', error.message);
                            }

                  });

      }

      return (

            <UsuarioContext.Provider value={{

                  comentarios: comentarios,
                  autenticarUsuario: autenticarUsuario

            }}>

                  {props.children}

            </UsuarioContext.Provider>


      )

}
