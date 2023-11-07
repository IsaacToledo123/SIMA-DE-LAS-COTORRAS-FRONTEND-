import React from 'react'

const MisReservaciones = ({ servicio, fecha_de_pago, precio_servicio, fecha_servicio }) => {

      return (

            <div>

                  <h1>{servicio}</h1>
                  <p>{fecha_de_pago}</p>
                  <p>{precio_servicio}</p>
                  <p>{fecha_servicio}</p>

            </div>

      )

}



export default MisReservaciones
