import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import { UsuarioContext } from "../context/UsuarioContext";
import MisReservaciones from './MisReservaciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

function ActividadUsuario() {

      const { misReservacionesAventura, misReservacionesCabaña } = useContext(UsuarioContext);

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

                  <h1 className='text-3xl text-center pt-5'>Mi actividad</h1>

                  <div className='grid md:grid-cols-2 grid-cols-1 md:p-10 p-2'>

                        <div className='bg-green-700 text-white p-5 rounded-2xl mr-2 mb-2'>

                              <div className='w-24 h-24 rounded-full flex items-center justify-center text-white text-6xl mb-4'>

                                    <FontAwesomeIcon icon={faMountainSun} />

                              </div>

                              {misReservacionesAventura.map(aventura => {

                                    const { nombre_aventura, fecha_de_pago, precio_aventura, fecha_aventura } = aventura;

                                    return (<MisReservaciones servicio={nombre_aventura} fecha_de_pago={fecha_de_pago} precio_servicio={precio_aventura} fecha_servicio={fecha_aventura} key={aventura.id}/>)


                              })}

                        </div>

                        <div className='bg-green-600 text-white p-5 rounded-2xl md:ml-2 mb-2 mr-2'>

                              <div className='w-24 h-24 rounded-full flex items-center justify-center text-white text-6xl mb-4'>

                                    <FontAwesomeIcon icon={faHouseChimney} />

                              </div>

                              {misReservacionesCabaña.map(cabaña => {

                                    const { nombre_cabaña, fecha_de_pago, precio_cabaña, fecha_de_estancia } = cabaña;

                                    return (<MisReservaciones servicio={nombre_cabaña} fecha_de_pago={fecha_de_pago} precio_servicio={precio_cabaña} fecha_servicio={fecha_de_estancia} key={cabaña.id}/>)


                              })}

                        </div>
                  </div>

            </div>

      )
}

export default ActividadUsuario;