import React, { useContext, useEffect } from "react";
import ImagenPrincipal from "../img/img1.png";
import ImagenSecundaria from "../img/img2.png";
import Cabañas from "../img/cabañas1.png";
import Aventura from "../img/aventura.png";
import OpcionServicio from "./OpcionServicio";
import { AventuraContext } from "../context/AventuraContext";
  import { motion } from "framer-motion";

const Reservas = () => {
  //configuraciones de animacion
  const sublogo = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const tituloAjustes = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const sublogo2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const { aventuras } = useContext(AventuraContext);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={tituloAjustes}
        transition={{ duration: 0.3 }}
      >
        <div class="bg-gray-200 p-20 text-center">
          <h1 class="capitalize md:uppercase text-5xl">Menus de Servicios</h1>
        </div>
      </motion.div>
      <div className="flex pt-4 pb-10">
        <div className="w-full mx-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sublogo2}
            transition={{ duration: 0.3 }}
          >
            <img src={ImagenPrincipal} alt="" className="w-full h-auto" />
          </motion.div>
        </div>
        <div className="w-full mx-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sublogo}
            transition={{ duration: 0.3 }}
          >
            <img src={ImagenSecundaria} alt="" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
      <div className="flex p-10">
        <div className="bg-gray-200 pl-20 h-20 w-full"></div>
        <div className="bg-red-500 pl-20 h-20 w-full"></div>
        <div className="bg-green-500 pl-20 h-20 w-full"></div>
      </div>
      <div className="flex justify-around items-center p-40 ">
        <div className="flex flex-col items-center">
          <div className="pb-10 h-80 w-80">
            <img src={Cabañas} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="capitalize md:uppercase text-4xl pb-20 text-gray-800 opacity-50">
              Cabañas
            </h1>
          </div>

          <OpcionServicio />
          <OpcionServicio />
          <OpcionServicio />
        </div>

        <div className="flex flex-col items-center ">
          <div className="pb-10 h-80 w-80">
            <img src={Aventura} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="capitalize md:uppercase text-4xl pb-20 text-gray-800 opacity-50">
              Aventura
            </h1>
          </div>

          {aventuras.map((aventura) => {
            const { id, nombre } = aventura;

            return <OpcionServicio aventura={nombre} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Reservas;
