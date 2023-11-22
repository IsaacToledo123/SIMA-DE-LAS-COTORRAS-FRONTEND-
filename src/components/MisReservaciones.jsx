import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDollar, faMoneyBill, faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";

const MisReservaciones = ({ servicio, fecha_de_pago, precio_servicio, fecha_servicio }) => {

      const getRandomColor = () => {

            const randomHue = Math.floor(Math.random() * 360);
            const randomSaturation = Math.floor(Math.random() * 100);
            const randomLightness = Math.floor(Math.random() * 50);

            const darkColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;

            return darkColor;
      };

      return (

            <div className="lg:mx-10 py-5 px-5">

                  <div className="">

                        <div
                              className="bg-white rounded-lg shadow-md border border-gray-200"
                        >
                              <div className="p-4 flex items-center justify-center text-4xl mb-4 rounded-t-lg" style={
                                    { backgroundColor: getRandomColor() }
                              }
                              >
                                    <FontAwesomeIcon icon={faBookmark} className="text-gray-300" />

                              </div>
                              <div className="p-4">

                                    <div className="flex items-center mb-2">
                                          <FontAwesomeIcon icon={faUser} className="text-green-500 mr-2" />
                                          <h3 className="text-xl font-semibold">{servicio}</h3>
                                    </div>

                                    <p className='py-1'>Fecha: <span className='font-bold'>{fecha_servicio}</span></p>
                                    <p className='py-1'>Precio: <span className='font-bold'>{precio_servicio}</span></p>
                                    <p className='py-1'>Fecha de pago: <span className='font-bold'>{fecha_de_pago}</span></p>

                              </div>
                        </div>

                  </div>
            </div>

      )

}



export default MisReservaciones
