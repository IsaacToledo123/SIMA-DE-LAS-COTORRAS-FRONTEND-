import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import { UsuarioContext } from "../context/UsuarioContext";
import MisReservaciones from './MisReservaciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faHouseChimney, faSadCry, faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

function ActividadUsuario() {

      const { misReservaciones } = useContext(UsuarioContext);
      const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

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

                        <h1 className="text-4xl uppercase font-bold text-emerald-700 text-center mb-4 mt-4">
                              MIS RESERVAS
                        </h1>

                        {misReservaciones.length == 0
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
                              <div className=''>

                                    <div className='rounded-xl'>

                                          {misReservaciones.length > 0 && (

                                                <div className='md:p-5 p-2 grid lg:md:grid-cols-3 grid-cols-1 md:grid-cols-2'>

                                                      {misReservaciones.map(reservacion => {

                                                            const { nombre_servicio, fecha_de_pago, precio_servicio, fecha_servicio } = reservacion;

                                                            return (<MisReservaciones servicio={nombre_servicio} fecha_de_pago={fecha_de_pago} precio_servicio={precio_servicio} fecha_servicio={fecha_servicio}/>)
                                                      })}

                                                </div>
                                          )

                                          }


                                    </div>

                              </div>
                        }

                  </div>

            </div>

      )
}

export default ActividadUsuario;