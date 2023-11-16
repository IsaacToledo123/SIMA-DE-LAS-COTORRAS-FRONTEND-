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

                  if (informacionServicio) {

                        Swal.fire('Success', "Order placed! You will receive an email confirmation.", 'success');

                        // localStorage.removeItem('servicio')
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