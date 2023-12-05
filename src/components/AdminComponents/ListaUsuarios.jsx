import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDollar, faMoneyBill, faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";
import CartaUsuario from "./components/CartaUsuario";

const socket = new WebSocket('ws://localhost:8000/ws/notifications/sala1/');
const username = localStorage.getItem('username');

const ListaUsuarios = () => {

      const [pagos, setPagos] = useState([]);

      useEffect(() => {

            const storedPagos = JSON.parse(localStorage.getItem("pagos")) || [];
            setPagos(storedPagos);

      }, []);

      useEffect(() => {

            socket.onopen = event => {

                  console.log('websocket conectado ' + event);

            }

            socket.onclose = event => {

                  console.log('websocket desconectado ' + event);

            }

      }, []);

      socket.onmessage = (message) => {

            try {

                  const dataFromServer = JSON.parse(message.data);

                  console.log("DATA FROM SERVER");
                  console.log(dataFromServer);


                  if (dataFromServer) {

                        const updatedPagos = [...pagos, { message: dataFromServer.message }];

                        setPagos(updatedPagos);

                        localStorage.setItem("pagos", JSON.stringify(updatedPagos));

                  }
            } catch (error) {

                  console.error('Error parsing WebSocket message:', error);

            }
      };




      return (

            <div className="">

                  <h1 className="text-4xl uppercase font-bold text-emerald-700 text-center mb-4 mt-4">
                        Pagos
                  </h1>

                  <div className=''>

                        <div className='rounded-xl'>

                              {pagos.map((pago, index) => (

                                    <div className="mt-4 p-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded-md shadow-md mx-20">
                                          <p className="text-lg font-semibold text-white dark:text-gray-300">
                                                {pago.message}
                                          </p>
                                    </div>


                              ))}


                        </div>

                  </div>

            </div>
      )



}

export default ListaUsuarios;