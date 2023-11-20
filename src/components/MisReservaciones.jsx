import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDollar, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const MisReservaciones = ({ servicio, fecha_de_pago, precio_servicio, fecha_servicio }) => {

      return (

            <div className='font-extralight md:text-xl pb-3'>
                  <table className='min-w-full border-2 border-gray-200 bg-gray-700 text-white'>

                        <thead>
                              <tr>
                                    <th className='md:py-2 md:px-4 py-1 px-2 border-b border-2 w-1/4'>Reservación</th>
                                    <th className='md:py-2 md:px-4 py-1 px-2 border-b border-2 w-1/4'>Fecha de pago</th>
                                    <th className='md:py-2 md:px-4 py-1 px-2 border-b border-2 w-1/4'>Precio del servicio</th>
                                    <th className='md:py-2 md:px-4 py-1 px-2 border-b border-2 w-1/4'>Fecha de la reservación</th>
                              </tr>
                        </thead>

                        <tbody>
                              <tr>
                                    <td className='md:py-4 md:px-4 py-1 px-2 border-b text-center border-2 w-1/4'><h1>{servicio}</h1></td>
                                    <td className='md:py-4 md:px-4 py-1 px-2 border-b text-center border-2 w-1/4'><p>{fecha_de_pago}</p></td>
                                    <td className='md:py-4 md:px-4 py-1 px-2 border-b text-center text-green-600 font-bold border-2 w-1/4'><p>${precio_servicio}</p></td>
                                    <td className='md:py-4 md:px-4 py-1 px-2 border-b text-center border-2 w-1/4'><p>{fecha_servicio}</p></td>
                              </tr>
                        </tbody>

                  </table>
            </div>


      )

}



export default MisReservaciones
