import { useContext, useState, useEffect } from "react";
import CabañaInfor from "../img/cabañaInfo.png";
import Footer from "../components/Footer";
import Bañera from "../img/bañera.png";
import Estacionamiento from "../img/estacionamiento.png";
import Wifi from "../img/wifi.png";
import Tamaño from "../img/tamaño.png";
import Mascotas from "../img/mascotas.png";
import { motion } from 'framer-motion'
import { UsuarioContext } from "../context/UsuarioContext";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { API_URL } from "../config";
import fotografias_cabaña1 from "../img/fotografias_cabaña/fotografia_cabaña1.jpeg"
import fotografias_cabaña2 from "../img/fotografias_cabaña/fotografia_cabaña2.jpeg"
import fotografias_cabaña3 from "../img/fotografias_cabaña/fotografia_cabaña3.jpeg"
import fotografias_cabaña4 from "../img/fotografias_cabaña/fotografia_cabaña4.jpeg"
import fotografias_cabaña5 from "../img/fotografias_cabaña/fotografia_cabaña5.jpeg"
import fotografias_cabaña6 from "../img/fotografias_cabaña/fotografia_cabaña6.jpeg"
import fotografias_cabaña7 from "../img/fotografias_cabaña/fotografia_cabaña7.jpeg"
import fotografias_cabaña8 from "../img/fotografias_cabaña/fotografia_cabaña8.jpeg"
import axios from "axios";
import DatePicker from 'react-datepicker';
import { toast } from 'react-hot-toast'
import 'react-datepicker/dist/react-datepicker.css';

const CabñaInfo = () => {

  const { usuarioAutenticado } = useContext(UsuarioContext);
  const [modalPago, setModalPago] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fechaEntrada, setFechaEntrada] = useState(null);
  const [diasReservacion, setDiasReservacion] = useState(0);
  const [fechaSalida, setFechaSalida] = useState(null);

  const cabaña = JSON.parse(localStorage.getItem('cabaña'));

  const images = [
    fotografias_cabaña1,
    fotografias_cabaña2,
    fotografias_cabaña3,
    fotografias_cabaña4,
    fotografias_cabaña5,
    fotografias_cabaña6,
    fotografias_cabaña7,
    fotografias_cabaña8
  ]

  const serviciosCabaña2 = [

    { "Nombre": "Bañera", "imagen": Bañera },
    { "Nombre": "Wifi Gratis", "imagen": Wifi },
    { "Nombre": "Estacionamiento", "imagen": Estacionamiento },

  ]

  const serviciosCabaña3 = [

    { "Nombre": "Bañera", "imagen": Bañera },
    { "Nombre": " Wifi Gratis", "imagen": Wifi },
    { "Nombre": "Estacionamiento", "imagen": Estacionamiento },
    { "Nombre": "Acepta mascota", "imagen": Mascotas },
    { "Nombre": "120 m^2 superficie", "imagen": Tamaño }

  ]

  const prevImage = () => {

    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  };

  const nextImage = () => {

    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

  };

  const crearSesion = e => {

    // Fecha de entrada
    if (fechaEntrada && diasReservacion) {

      const fechita = new Date(fechaEntrada)
      const resultado = new Date(fechita.getTime())
      resultado.setDate(resultado.getDate() + diasReservacion + 1);

      const anio = resultado.getFullYear();
      const mes = (resultado.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 al mes ya que los meses van de 0 a 11
      const dia = resultado.getDate().toString().padStart(2, '0');

      // Fecha de salida
      const resultadoFormateado = `${anio}-${mes}-${dia}`;

      // === Hay que comprobar primero si esa fecha no está reservada ya === //
      axios.get(`${API_URL}/api/verificar-reservacion/${cabaña.id}/${fechaEntrada}/`)

        .then(e => {

          if (e.status == 200) {
            
            axios.post(`${API_URL}/api/create-checkout-session/${cabaña.id}/`, { 'servicio': 'aventura' })

              .then(e => {

                const informacionServicio = {

                  "servicio": "cabaña",
                  "idServicio": cabaña.id,
                  "titulo": cabaña.nombre,
                  "idUsuario": usuarioAutenticado.id,
                  "precio_cabaña": cabaña.precio,
                  "fecha_entrada": fechaEntrada,
                  "fecha_salida": resultadoFormateado

                }

                const infoServicio = JSON.stringify(informacionServicio)

                // Guardamos en localStorage el servicio que vamos a reservar
                localStorage.setItem('servicio', infoServicio);

                window.location.href = e.data.session;

              })
              .catch(e => {

                console.log(e);

              })

          } else {

            Swal.fire('oh no🥺', e.data.message, 'info')

          }

        })
        .catch(e => console.log(e))

    } else {

      Swal.fire('Ojito ahí', 'Por favor, selecciona una fecha', 'info');

    }

  }

  const container = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const tituloAjustes = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

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
            {cabaña.nombre}
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        transition={{ duration: 0.3 }}
      >
        {/* Sección de la cabaña */}
        <div className="pt-5 grid sm:grid-cols-2 grid-cols-1 pb-10">

          <div>

            {/* Sección de Imágenes */}
            <div className="w-full md:w-2/3 h-full mx-auto relative px-10">

              <h1 className="text-3xl font-thin text-center pb-4">Fotografías:</h1>

              <div className="relative overflow-hidden rounded-lg shadow-md">

                <img
                  src={images[currentIndex]}
                  alt={`Imagen ${currentIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 hover:scale-105"
                />

                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl mt-10">
                  <button onClick={prevImage} className="text-white focus:outline-none">
                    ⬅️
                  </button>
                </div>

                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl mt-10">
                  <button onClick={nextImage} className="text-white focus:outline-none">
                    ➡️
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Sección de Información */}
          <div className="px-10 md:text-xl text-lg text-center md:border-l-2">

            <h1 className="text-3xl font-thin text-center pt-8 md:pt-0">Descripción:</h1>

            <div className="mt-4">

              <p className="md:text-2xl text-justify md:p-5 text-lg p-2 font-medium text-gray-500">{cabaña.descripcion}</p>

            </div>

            <h1 className="text-3xl font-thin text-center py-2">Ofrece:</h1>

            {/* Información de las Cabañas */}
            <div className="flex flex-col items-center">

              {cabaña.id === 2 ? (

                <div className="w-full md:w-2/3 border rounded-lg overflow-hidden shadow-md my-4">

                  {serviciosCabaña2.map((servicio, index) => (

                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-500">

                      <p className="px-5">{servicio.Nombre}</p>

                      <img src={servicio.imagen} alt="logo" className="w-10" />

                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full md:w-2/3 border rounded-lg overflow-hidden shadow-md my-4">

                  {serviciosCabaña3.map((servicio, index) => (

                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-500">

                      <p className="px-5">{servicio.Nombre}</p>

                      <img src={servicio.imagen} alt="logo" className="w-10" />

                    </div>

                  ))}
                </div>
              )}

            </div>


            {/* Sección de las fechas para reservar */}

            <div className="pt-5">

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Fecha de Reservación:</label>
                <input type="date" onChange={e => setFechaEntrada(e.target.value)} className="p-2 border-2 shadow-md rounded-md" />
                {/* <DatePicker
                  selected={fechaEntrada}
                  onChange={(date) => setFechaEntrada(date)}
                  selectsStart
                  startDate={fechaEntrada}
                  endDate={fechaSalida}
                  className="p-2 border-2 shadow-md rounded-md w-full"
                /> */}
              </div>

              <div className="mb-3">

                <label className="block text-sm font-medium text-gray-600 mb-1">¿Cuántos días reservarás?:</label>
                <input type="number" className="border-b-2 w-10 text-sm shadow-md text-center" onChange={e => { setDiasReservacion(+e.target.value) }} />

              </div>

            </div>

            <div className="flex justify-center items-center space-x-4 pb-10 pt-10">

              {/* Diseño del Precio */}

              <div className="bg-gray-100 p-3 rounded-md">
                <span className="text-lg font-semibold">Precio:</span>
                <span className="text-2xl text-green-600 pl-3">${cabaña.precio}</span>
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



      {/* Aquí pondremos el modal para el pago */}
      {/* <Modal isOpen={modalPago} onClose={e => { setModalPago(false) }}>

        <h1 className="text-2xl font-medium text-center text-green-700">{cabaña.nombre}</h1>

        <section className="">

          <div className="product">

            <div className="description my-5">              
              <h5 className="text-xl font-bold text-green-700 text-center my-3">Precio ${cabaña.precio}</h5>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-500 rounded-md px-3 py-2 text-white font-mono"
              onClick={crearSesion}
            >
              Confirmar
            </button>

            <button
              onClick={handleSubmit}
              className="bg-red-500 rounded-md px-3 py-2 text-white font-mono"
            >
              Cancelar
            </button>

          </div>

        </section>

      </Modal> */}

      <Footer />

    </div>
  );

};
export default CabñaInfo;