import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";      

export const UsuarioContext = createContext();

const token = localStorage.getItem('token');


export function UsuariosContextProvider(props) {

      const [usuarios, setUsuarios] = useState([]);
      const [comentarios, setComentarios] = useState([]);
      const [autenticacion, setAutenticacion] = useState({});
      

      useEffect(() => {

            axios.get(`${API_URL}/api/usuarios/${1}`)
                  .then(e => console.log(e.data))
                  .catch(e => console.log(e))


            axios.get(`${API_URL}/api/usuarios-opinions/`)
                  .then(e => setComentarios(e.data.comments))
                  .catch(e => console.log(e))



      }, []);


      const publicarComentario = comentario => {

            // Le enviaremos el cuerpo y el token para autenticar si el usuario ha iniciado sesión
            return axios.post(`${API_URL}/api/usuarios-opinions/`, comentario, {

                  headers : {

                        Authorization :`${token}`
                  },

             })

                  .then(e => {

                        console.log(e.data)

                        return e    

                  })
                  .catch(error => {

                        return error
                  })


      }

      const autenticarUsuario = credenciales => {

            return axios.post(`${API_URL}/api/usuarios/`, credenciales)

                  .then(e => {

                        return e.data
                        
                  })
                  .catch(error => {

                        if (error.message) {

                              if (error.response.status === 200) {

                                    return 'Credenciales incorrectas. Por favor, inténtalo de nuevo.'

                              } else if (error.response.status === 201) {

                                    return "Credenciales incorrectas. Por favor, inténtalo de nuevo."

                              } else {

                                    return 'Error de respuesta del servidor:', error.response.status, error.response.data;
                              }

                        } else if (error.request) {

                              return 'Error de solicitud sin respuesta:', error.request;

                        } else {

                              return 'Error de configuración de la solicitud:', error.message;
                        }

                  });

      }

      return (

            <UsuarioContext.Provider value={{

                  comentarios: comentarios,
                  autenticarUsuario: autenticarUsuario,
                  publicarComentario

            }}>

                  {props.children}

            </UsuarioContext.Provider>


      )

}
