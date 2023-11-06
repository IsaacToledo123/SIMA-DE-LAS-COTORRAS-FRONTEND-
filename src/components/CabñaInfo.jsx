import { useContext, useState, useEffect } from "react";
import CabañaInfor from "../img/cabañaInfo.png";
import Bañera from "../img/bañera.png";
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

const CabñaInfo = ({ titulo, descripcion, precio, idServicio }) => {

  const { usuarioAutenticado } = useContext(UsuarioContext);
  const [modalPago, setModalPago] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevImage = () => {

    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  };

  const nextImage = () => {

    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

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
        <div className="bg-red-800 p-5 text-center">
          <h1 className="capitalize md:uppercase text-4xl text-white font-inter font-bold">
            {titulo}
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-10">

          {/* Aquí irá la imagen */}

          <div className="w-64 h-64 mx-auto relative">

            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1"
            >
              ⬅️
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1"
            >
              ➡️
            </button>
          </div>

        </div>
      </motion.div>

      <div className="grid md:grid-cols-5 px-10 py-5 grid-cols-1 md:text-xl font-bold text-lg text-center">

        <div className="p-2">
          <div className=" border border-black p-2">
            <h2 className="">Bañera</h2>
            <div className="flex justify-center">
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className=" border border-black p-2">
            <h2 className="">wifi gratis</h2>
            <div className="flex justify-center">
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="border border-black p-2 ">
            <h2 className="">Estacionamiento</h2>
            <div className="flex justify-center">
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="border border-black  p-2">
            <h2 className="">Acepta Mascota</h2>
            <div className="flex justify-center">
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="border border-black p-2 ">
            <h2 className="">120 m^2 superficie</h2>
            <div className="flex justify-center">
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
        </div>


      </div>
      <div className="">
        <h1 className="capitalize md:uppercase md:text-5xl text-3xl md:p-10 p-3 font-bold">Descripción</h1>
        <p className="md:text-4xl text-justify opacity-70 md:p-10 text-lg p-5 font-bold">
          {descripcion}
        </p>
      </div>

      <div className="md:text-4xl text-2xl font-bold text-center">
        <h1>Precio $ <span className="text-green-600">{precio}</span></h1>
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

        <h1 className="text-2xl font-medium text-center text-green-700">{titulo}</h1>
        <section>
          <div className="product">
            <img
              src={CabañaInfor}
              alt="The cover of Stubborn Attachments"
              className="my-5"
            />
            <div className="description my-5">
              <h3 className="md:text-2xl text-justify font-medium text-xl">{descripcion}</h3>
              <h5 className="text-xl font-bold text-green-700 text-center my-3">Precio ${precio}</h5>
            </div>
          </div>

          <form
            action={`${API_URL}/api/create-checkout-session/`}
            method="POST"
            className="flex justify-between"
          >

            <button
              type="submit"
              className="bg-green-500 rounded-md px-3 py-2 text-white font-mono"
            >
              Confirmar
            </button>

            <button
              onClick={handleSubmit}
              className="bg-red-500 rounded-md px-3 py-2 text-white font-mono"
            >
              Cancelar
            </button>

          </form>

        </section>



      </Modal>

    </div>
  );

};
export default CabñaInfo;