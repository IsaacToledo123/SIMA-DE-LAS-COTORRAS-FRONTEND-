import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { API_URL } from "../config";
import { UsuarioContext } from "../context/UsuarioContext";
import MisReservaciones from './MisReservaciones';

function ActividadUsuario() {

      const { usuarioAutenticado } = useContext(UsuarioContext);
      const [misReservacionesAventura, setMisReservacionesAventura] = useState([]);
      const [misReservacionesCabaña, setMisReservacionesCabaña] = useState([]);

      console.log(misReservacionesAventura)
      console.log(misReservacionesCabaña)

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

                  <h1>Mi actividad</h1>

                  <div className='bg-green-600 text-white'>

                        {misReservacionesAventura.map(aventura => {

                              const { nombre_aventura, fecha_de_pago, precio_aventura, fecha_aventura } = aventura;

                              return (<MisReservaciones servicio = {nombre_aventura} fecha_de_pago = {fecha_de_pago} precio_servicio = {precio_aventura} fecha_servicio = {fecha_aventura}/>)


                        })}

                  </div>

                  <div>

                        {misReservacionesCabaña.map(cabaña => {

                              const {nombre_cabaña, fecha_de_pago, precio_cabaña, fecha_de_estancia} = cabaña;

                              return (<MisReservaciones servicio = {nombre_cabaña} fecha_de_pago = {fecha_de_pago} precio_servicio = {precio_cabaña} fecha_servicio = {fecha_de_estancia}/>)


                        })}

                  </div>

            </div>

      )
}

export default ActividadUsuario;