import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import { UsuarioContext } from "../context/UsuarioContext";
import MisReservaciones from './MisReservaciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faHouseChimney, faSadCry, faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

function ActividadUsuario() {

      const { misReservacionesAventura, misReservacionesCabaña } = useContext(UsuarioContext);

      console.log(misReservacionesAventura)
      console.log(misReservacionesCabaña)

      useEffect(() => {
            // Check to see if this is a redirect back from Checkout
            const query = new URLSearchParams(window.location.search);

            console.log(query.get('success'));

            if (query.get("success")) {

                  // ===== Haremos la petición a la base de datos =====
                  const informacionServicio = JSON.parse((localStorage.getItem('servicio')))
                  const API_URL = import.meta.env.VITE_REACT_APP_API_URL

                  if (informacionServicio) {

                        if (informacionServicio.servicio === "cabaña") {

                              const informacion_para_pagar = {

                                    "pago": {
                                          "monto": informacionServicio.precio_cabaña,
                                          "numero_transaccion": ""
                                    },
                                    "fecha_de_reservacion": informacionServicio.fecha_entrada,
                                    "fecha_de_salida": informacionServicio.fecha_salida,
                                    "usuario": informacionServicio.idUsuario,
                                    "cabaña": informacionServicio.idServicio

                              }

                              axios.post(`${API_URL}/api/reservaciones-cabaña/`, informacion_para_pagar)

                                    .then(e => {

                                          if (e.data.status == 200) {

                                                Swal.fire('Reservación Exitosa', 'El administrador verá su reservación', 'success')

                                          }

                                    })
                                    .catch(e => {

                                          console.log("Algo ha salido mal")

                                    })


                        } else {

                              // Realizamos el pago pero por aventura
                              console.log(informacionServicio);
                              const informacion_para_pagar = {

                                    "pago": {

                                          "monto": informacionServicio.precio_servicio,
                                          "numero_transaccion": ""

                                    },
                                    "aventura": informacionServicio.idServicio,
                                    "usuario": informacionServicio.idUsuario,
                                    "fecha_reservacion": informacionServicio.fecha_reservacion

                              }
                              
                              axios.post(`${API_URL}/api/reservaciones-aventura/`, informacion_para_pagar)

                                    .then(e => {

                                          if (e.data.status == 200) {

                                                Swal.fire('Reservación Exitosa', 'El administrador verá su reservación', 'success')

                                          }

                                    })
                                    .catch(e => {

                                          console.log("Algo ha salido mal")

                                    })

                        }

                        // Eliminamos el servicio de localStorage
                        localStorage.removeItem('servicio')
                  }

            }

            if (query.get("canceled")) {

                  Swal.fire('Oh no!', "Order canceled -- continue to shop around and checkout when you're ready.", 'error');

            }

      }, []);

      return (

            <div>

                  <div className='md:p-10 p-2'>

                        {misReservacionesAventura.length == 0 && misReservacionesCabaña.length == 0
                              ?
                              <div className='grid grid-cols-1 place-items-center pt-10'>

                                    <div className='pt-44'>
                                          <p className='md:text-3xl text-lg font-bold'>Cuando hagas reservaciones aparecerán aquí</p>
                                    </div>

                                    <div className='pt-10'>
                                          <FontAwesomeIcon icon={faFaceSmileWink} className='h-40 text-white bg-black rounded-full border border-black' />
                                    </div>

                              </div>
                              :
                              <div>

                                    <div className='my-5 rounded-xl'>

                                          <div className='pl-10 grid grid-cols-2 place-items-center'>
                                                <FontAwesomeIcon icon={faHouseChimney} className='h-10' />
                                                <p className='font-thin md:text-2xl'>Reservación de cabañas:</p>
                                          </div>

                                          {misReservacionesCabaña.length > 0
                                                ?
                                                <div className='md:p-10 p-2'>

                                                      {misReservacionesCabaña.map(cabaña => {

                                                            const { nombre_cabaña, fecha_de_pago, precio_cabaña, fecha_de_estancia } = cabaña;

                                                            return (<MisReservaciones servicio={nombre_cabaña} fecha_de_pago={fecha_de_pago} precio_servicio={precio_cabaña} fecha_servicio={fecha_de_estancia} key={cabaña.id} />)
                                                      })}

                                                </div>
                                                :
                                                <div>

                                                      <h1 className='font-thin'>Aún no has reservado alguna cabaña</h1>

                                                </div>
                                          }
                                    </div>

                                    <div className='my-5 rounded-xl'>

                                          <div className='pl-10 grid grid-cols-2 place-items-center'>
                                                <FontAwesomeIcon icon={faMountainSun} className='h-10' />
                                                <p className='font-thin md:text-2xl'>Reservación de aventuras:</p>
                                          </div>

                                          {misReservacionesAventura.length > 0
                                                ?
                                                <div className='md:p-10 p-2'>

                                                      {misReservacionesAventura.map(aventura => {

                                                            const { nombre_aventura, fecha_de_pago, precio_aventura, fecha_aventura } = aventura;

                                                            return (<MisReservaciones servicio={nombre_aventura} fecha_de_pago={fecha_de_pago} precio_servicio={precio_aventura} fecha_servicio={fecha_aventura} key={aventura.id} />)
                                                      })}
                                                </div>


                                                :
                                                <div>

                                                      <h1 className='font-thin'>Aún no has reservado alguna aventura</h1>

                                                </div>
                                          }
                                    </div>

                              </div>
                        }


                  </div>

            </div>

      )
}

export default ActividadUsuario;