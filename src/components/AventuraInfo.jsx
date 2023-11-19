import rappel from "../img/aventuras/rappel.jpg"
import medio_rappel from "../img/aventuras/rappel_2.jpg"
import caminata from "../img/aventuras/PINTURA-MANITAS.jpg"
import tirolesa from "../img/aventuras/tirolesa.jpeg"
import paquete from "../img/aventuras/caminata.jpg"
import gran_paqueta from "../img/aventuras/gran_paquete.jpg"
import { UsuarioContext } from "../context/UsuarioContext"
import { Children, useContext, useEffect, useState } from "react"
import { motion } from 'framer-motion'
import Modal from "./Modal"
import Footer from "./Footer"
import Swal from "sweetalert2";
import axios from "axios"

const AventuraInfo = () => {

      const aventura = JSON.parse(localStorage.getItem('aventura'));
      const { usuarioAutenticado } = useContext(UsuarioContext);
      const [modalPago, setModalPago] = useState(false);
      const [imagen, setImagen] = useState("");
      const [fechaEntrada, setFechaEntrada] = useState("");

      const imagenesAventura = [

            rappel,
            medio_rappel,
            caminata,
            tirolesa,
            paquete,
            gran_paqueta

      ]

      console.log(aventura)

      useEffect(() => {

            const imagenAventura = imagenesAventura.map((imagen, index) => {

                  if ((index + 1) == aventura.id) {

                        setImagen(imagen)

                  }

            })

      }, []);

      const crearSesion = e => {

            if (fechaEntrada) {

                  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

                  axios.post(`${API_URL}/api/create-checkout-session/${aventura.id}/`, {'servicio': 'aventura'})

                        .then(e => {

                              const informacionServicio = {

                                    "servicio": "aventura",
                                    "idServicio": aventura.id,
                                    "titulo": aventura.nombre,
                                    "idUsuario": usuarioAutenticado.id,
                                    "precio_servicio": aventura.precio,
                                    "fecha_reservacion" : fechaEntrada

                              }

                              const infoServicio = JSON.stringify(informacionServicio)

                              localStorage.setItem('servicio', infoServicio);

                              window.location.href = e.data.session;

                        })
                        .catch(e => {

                              console.log(e);

                        })
            } else {

                  Swal.fire('Ojito ahí', 'Debes seleccionar una fecha de reservación', 'info');
            
            }
      }

      const reservarServicio = e => {

            e.preventDefault();

            // Solo funciona si el usuario está autenticado
            if (!usuarioAutenticado) {

                  Swal.fire('Necesitas autenticarte', 'Por favor, inicia sesión primero', 'info');

            } else {

                  crearSesion();

            }

      }

      const handleSubmit = e => {

            e.preventDefault();

            setModalPago(false);

      }

      const container = {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
      };

      const tituloAjustes = {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
      };

      return (
            <div>
                  <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={tituloAjustes}
                        transition={{ duration: 0.3 }}
                  >
                        <div className="bg-red-800 p-5 text-center mb-10">
                              <h1 className="capitalize md:uppercase md:text-4xl text-2xl text-white font-inter font-bold">
                                    {aventura.nombre}
                              </h1>
                        </div>
                  </motion.div>
                  <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={container}
                        transition={{ duration: 0.3 }}
                  >
                        {/* Sección de la aventura */}
                        <div className="pt-10 grid sm:grid-cols-2 grid-cols-1 pb-10">

                              {/* Sección de Imágenes */}
                              <div className="w-full md:w-2/3 h-full mx-auto relative px-10">

                                    <h1 className="text-3xl font-thin text-center pb-4">Fotografía:</h1>

                                    <div className="relative overflow-hidden rounded-lg shadow-md">

                                          <img src={imagen} alt="" />

                                    </div>
                              </div>


                              {/* Sección de Información */}
                              <div className="px-10 md:text-xl text-lg text-center py-10 md:border-l-2">

                                    <h1 className="text-3xl font-thin text-center pt-8 md:pt-0">Descripción:</h1>

                                    <div className="mt-4">

                                          <p className="md:text-2xl text-justify opacity-50 md:p-5 text-lg p-2">{aventura.descripcion}</p>

                                    </div>

                                    <div className="mb-4">

                                          <label className="block text-sm font-medium text-gray-600 mb-1">Fecha de Reservación:</label>
                                          <input type="date" onChange={e => setFechaEntrada(e.target.value)} className="p-2 border-2 shadow-md rounded-md" />

                                    </div>

                                    <div className="flex justify-center items-center space-x-4 pb-10 pt-10">
                                          {/* Diseño del Precio */}
                                          <div className="bg-gray-100 p-3 rounded-md">
                                                <span className="text-lg font-semibold">Precio:</span>
                                                <span className="text-2xl text-green-600 pl-3">${aventura.precio}</span>
                                          </div>

                                          {/* Diseño del Botón */}
                                          <button
                                                className="px-6 py-3 rounded-md text-lg text-white bg-gray-700 hover:bg-gray-800 font-bold"
                                                onClick={reservarServicio}
                                          >
                                                Reserva Ahora
                                          </button>
                                    </div>

                              </div>

                        </div>

                  </motion.div>

                  <Footer />

            </div>

      )


}

export default AventuraInfo;