import React from "react";
import CabañaInfor from "../img/cabañaInfo.png";
import Bañera from "../img/bañera.png";
import {motion} from 'framer-motion'
const CabñaInfo = () => {
  const container = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const tituloAjustes = {
    hidden: { opacity: 0, y:-50 },
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
        <h1 class="capitalize md:uppercase text-4xl text-white font-inter ">
          Informacion de la Cabaña
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
        <img src={CabañaInfor} alt="" />
      </div>
      </motion.div>
      <div className="">
        <div className="flex justify-center p-8">
          <div className="pr-10">
            <div className="flex border border-black border-2 p-2">
              <h2 className="text-2xl">Bañera</h2>
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
          <div className="pr-10">
            <div className="flex border border-black border-2 p-2">
              <h2 className="text-2xl">wifi gratis</h2>
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
          <div className="pr-10">
            <div className="flex border border-black border-2 p-2 ">
              <h2 className="text-2xl">Estacionamiento</h2>
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="pr-10">
            <div className="flex border border-black  border-2 p-2">
              <h2 className="text-2xl">Acepta Mascota</h2>
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
          <div className="pr-10">
            <div className="flex border border-black border-2 p-2 ">
              <h2 className="text-2xl">120 m^2 superficie</h2>
              <img src={Bañera} className="h-7 pl-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-20">
        <h1 className="capitalize md:uppercase text-5xl p-10 ">Descripcion</h1>
        <p className="text-4xl text-justify opacity-70 p-10">
          Acogedor refugio rodeado de exuberante naturaleza y un entorno lleno
          de misticismo. Situada a pocos metros del atractivo principal, la sima
          de las cotorras, ofrece a los visitantes una experiencia única en
          medio de la selva tropical. La cabaña está diseñada para brindar
          comodidad y tranquilidad, permitiendo a los huéspedes conectarse con
          la belleza natural que los rodea.
        </p>
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
