import React from "react";
import CabañaInfor from "../img/cabañaInfo.png";

import Bañera from "../img/bañera.png";
import Estacionamiento from "../img/estacionamiento.png";
import Wifi from "../img/wifi.png";
import Tamaño from "../img/tamaño.png";
import Mascotas from "../img/mascotas.png";
import { motion } from 'framer-motion'

const CabñaInfo = ({ titulo, descripcion, precio }) => {

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
        <div class="bg-red-800 p-5 text-center">
          <h1 class="capitalize md:uppercase text-4xl text-white font-inter font-bold">
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
          <img src={CabañaInfor} alt=""/>
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
        <h1>Precio $  <span className="text-green-600">{precio}</span></h1>
      </div>

      <div className="flex justify-center pb-10 pt-10 ">
        <div className="bg-gray-200 p-5">
          <button className="pl-20 pr-20 p-2 rounded-sm capitalize md:uppercase text-3xl text-white bg-green-700 opacity-70 hover:opacity-100">
            Reserva Ahora
          </button>
        </div>

      </div>
    </div>
  );
};

export default CabñaInfo;
