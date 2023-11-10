import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import { UsuarioContext } from "../context/UsuarioContext";
import MisReservaciones from './MisReservaciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faHouseChimney } from "@fortawesome/free-solid-svg-icons";

function ActividadUsuario() {

      const { usuarioAutenticado } = useContext(UsuarioContext);
      const [misReservacionesAventura, setMisReservacionesAventura] = useState([]);
      const [misReservacionesCabaña, setMisReservacionesCabaña] = useState([]);

      useEffect(() => {

            if ((usuarioAutenticado)) {

                  axios.get(`${API_URL}/api/reservaciones-aventura/${usuarioAutenticado.id}/`)
                        .then(e => setMisReservacionesAventura(e.data.reservaciones))
                        .catch(e => console.log(e))



                  axios.get(`${API_URL}/api/reservaciones-cabaña/${usuarioAutenticado.id}`)
                        .then(e => setMisReservacionesCabaña(e.data.reservaciones))
                        .catch(e => console.log(e))
            }

      }, [])

      return (

            <div>

                  <h1 className='text-3xl text-center pt-5'>Mi actividad</h1>

                  <div className='grid md:grid-cols-2 grid-cols-1 md:p-10 p-2'>

                        <div className='bg-green-700 text-white p-5 rounded-2xl mr-2 mb-2'>

                              <div className='w-24 h-24 rounded-full flex items-center justify-center text-white text-6xl mb-4'>

                                    <FontAwesomeIcon icon={faMountainSun} />

                              </div>

                              {misReservacionesAventura.map(aventura => {

                                    const { nombre_aventura, fecha_de_pago, precio_aventura, fecha_aventura } = aventura;

                                    return (<MisReservaciones servicio={nombre_aventura} fecha_de_pago={fecha_de_pago} precio_servicio={precio_aventura} fecha_servicio={fecha_aventura} />)


                              })}

                        </div>

                        <div className='bg-green-600 text-white p-5 rounded-2xl md:ml-2 mb-2 mr-2'>

                              <div className='w-24 h-24 rounded-full flex items-center justify-center text-white text-6xl mb-4'>

                              <FontAwesomeIcon icon={faHouseChimney} />

                              </div>      

                              {misReservacionesCabaña.map(cabaña => {

                                    const { nombre_cabaña, fecha_de_pago, precio_cabaña, fecha_de_estancia } = cabaña;                                    

                                    return (<MisReservaciones servicio={nombre_cabaña} fecha_de_pago={fecha_de_pago} precio_servicio={precio_cabaña} fecha_servicio={fecha_de_estancia} />)


                              })}

                        </div>
                  </div>

            </div>

      )
}

export default ActividadUsuario;