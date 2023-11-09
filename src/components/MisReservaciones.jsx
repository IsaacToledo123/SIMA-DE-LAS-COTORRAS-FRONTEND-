import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDollar, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const MisReservaciones = ({ servicio, fecha_de_pago, precio_servicio, fecha_servicio }) => {

      return (

            <div className='font-extralight md:text-2xl'>

                  <h1 className='py-2'>{servicio}</h1>
                  <div className='grid grid-cols-2 py-2'>
                        <FontAwesomeIcon icon={faMoneyBill} />
                        <p>{fecha_de_pago}</p>
                  </div>
                  <div className='grid grid-cols-2 py-2'>
                        <FontAwesomeIcon icon={faDollar} />
                        <p>${precio_servicio}</p>
                  </div>
                  <div className='grid grid-cols-2 py-2'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>{fecha_servicio}</p>
                  </div>

            </div>

      )

}



export default MisReservaciones
