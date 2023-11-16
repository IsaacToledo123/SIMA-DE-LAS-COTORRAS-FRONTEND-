import { useContext, useState, useEffect } from "react";
import CabañaInfor from "../img/cabañaInfo.png";

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

const CabñaInfo = () => {

  const { usuarioAutenticado } = useContext(UsuarioContext);
  const [modalPago, setModalPago] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    console.log(idServicio)

    axios.post(`${API_URL}/api/create-checkout-session/${cabaña.id}/`)

      .then(e => {

        const informacionServicio = {

          idServicio,
          titulo,
          "idUsuario": usuarioAutenticado.id

        }

        const infoServicio = JSON.stringify(informacionServicio)

        localStorage.setItem('servicio', infoServicio);

        window.location.href = e.data.session;

      })
      .catch(e => {

        console.log(e);

      })
  }

  //   <form
  //   action={`${API_URL}/api/create-checkout-session/`}
  //   method="POST"
  //   className="flex justify-between"
  // >

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

      setModalPago(true)

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
          <h1 className="capitalize md:uppercase text-4xl text-white font-inter font-bold">
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
        <div className="pt-10 grid sm:grid-cols-2 grid-cols-1 pb-10">

          {/* Aquí irá la imagen */}

          <div className="w-2/3 h-full mx-auto relative px-10">

            <h1 className="text-3xl font-thin text-center pb-2">Fotografías: </h1>

            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl mt-10"
            >
              ⬅️
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl mt-10"
            >
              ➡️
            </button>
          </div>

          <div className="px-10 md:text-xl text-lg text-center">

            <h1 className="text-3xl font-thin text-center pt-20 md:pt-0">Descripción:</h1>

            <div>
              <p className="md:text-2xl text-justify opacity-70 md:p-10 text-lg p-2">
                {cabaña.descripcion}
              </p>
            </div>

            <h1 className="text-3xl font-thin text-center py-2">Ofrece: </h1>
            {/* INFORMACIÓN DE LAS CABAÑAS */}
            <div>

              {
                cabaña.id == 2
                  ?
                  <div>

                    {serviciosCabaña2.map(cabaña => {

                      return <div className="border-b border-black">

                        <div className="flex justify-center items-center py-2">

                          <p className="px-5">{cabaña.Nombre}</p>

                          <img src={cabaña.imagen} alt="logo" className="w-10" />

                        </div>

                      </div>

                    })}

                  </div>
                  :

                  <div>
                    {serviciosCabaña3.map(cabaña => {

                      return <div className="border-b border-black">

                        <div className="flex justify-center items-center py-2">

                          <p className="px-5">{cabaña.Nombre}</p>

                          <img src={cabaña.imagen} alt="logo" className="w-10" />

                        </div>

                      </div>

                    })}
                  </div>
              }

            </div>



          </div>


        </div>


      </motion.div>

      <div className="md:text-4xl text-2xl text-center font-extralight">
        <h1>Precio $ <span className="text-green-600">{cabaña.precio}</span></h1>
      </div>

      <div className="flex justify-center pb-10 pt-10 ">
        <div className="p-5">
          <button
            className="pl-20 pr-20 p-2 rounded-md text-3xl text-white bg-green-600 hover:bg-green-700 font-bold"
            onClick={reservarServicio}
          >
            Reserva Ahora
          </button>
        </div>

      </div>

      {/* Aquí pondremos el modal para el pago */}
      <Modal isOpen={modalPago} onClose={e => { setModalPago(false) }}>

        <h1 className="text-2xl font-medium text-center text-green-700">{cabaña.titulo}</h1>
        <section>
          <div className="product">
            <img
              src={CabañaInfor}
              alt="The cover of Stubborn Attachments"
              className="my-5"
            />
            <div className="description my-5">
              <h3 className="md:text-2xl text-justify text-xl">{cabaña.descripcion}</h3>
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

      </Modal>

    </div>
  );

};
export default CabñaInfo;