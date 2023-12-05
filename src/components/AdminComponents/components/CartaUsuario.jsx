import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDollar, faMoneyBill, faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";

function CartaUsuario({usuarioNombre, email, telefono}) {

      const getRandomColor = () => {

            const randomHue = Math.floor(Math.random() * 360);
            const randomSaturation = Math.floor(Math.random() * 100);
            const randomLightness = Math.floor(Math.random() * 50);

            const darkColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;

            return darkColor;
      };

      return (

            <div className="lg:mx-10 py-5 px-5">

                  <div>

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
                                          <h3 className="text-xl font-semibold">Usuario</h3>
                                    </div>

                                    <p className='py-1'>Username: <span className='font-bold'>{usuarioNombre}</span></p>
                                    <p className='py-1'>Email: <span className='font-bold'>{email}</span></p>
                                    <p className='py-1'>Telefono: <span className='font-bold'>{telefono}</span></p>

                              </div>
                        </div>

                  </div>
            </div>

      )
}

export default CartaUsuario;
