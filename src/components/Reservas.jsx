import React, { useContext, useEffect, useRef, useState } from "react";
import ImagenPrincipal from "../img/img1.png";
import ImagenSecundaria from "../img/img2.png";
import Cabañas from "../img/cabañas1.png";
import Aventura from "../img/aventura.png";
import OpcionServicio from "./OpcionServicio";
import { AventuraContext } from "../context/AventuraContext";
import { motion } from "framer-motion";
import CabñaInfo from "../components/CabñaInfo"

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

  const { aventuras, cabañas } = useContext(AventuraContext);
  const [mostrarCabaña, setMostrarCabaña] = useState(false)

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const componenteOcultoRef = useRef(null);

  const verServicio = servicio => {

    //¿Cabaña o aventura?
    let servicioSeleccionado = aventuras.find(aventura => aventura.nombre == servicio)

    if (servicioSeleccionado === undefined) {

      servicioSeleccionado = cabañas.find(cabaña => cabaña.nombre == servicio);

      cambiarEstado(servicioSeleccionado);

    } else {

      cambiarEstado(servicioSeleccionado);

    }

    scrollToComponent();
    setMostrarCabaña(true);


  }

  const scrollToComponent = () => {

    if (componenteOcultoRef.current) {

      componenteOcultoRef.current.scrollIntoView({ behavior : 'smooth'})

    }

  }

  const cambiarEstado = ({ nombre, precio, descripcion }) => {

    setTitulo(nombre);
    setDescripcion(descripcion);
    setPrecio(precio);

  }


  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={tituloAjustes}
        transition={{ duration: 0.3 }}
      >
        <div class="bg-gray-200 md:p-20 p-10 text-center md:m-10 m-5">
          <h1 class="capitalize md:uppercase md:text-5xl text-2xl text-center font-bold">Menus de Servicios</h1>
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


      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center text-center">

        {/* Sección cabañas */}
        <div className=" items-center pb-44">

          <div className="md:w-96 w-72 pb-10">
            <img src={Cabañas} alt="" />
          </div>

          <div>
            <h1 className="capitalize md:uppercase text-4xl pb-20 text-gray-800 opacity-50">
              Cabañas
            </h1>
          </div>

          {cabañas.map(cabaña => {

            const { id, nombre } = cabaña;

            return <OpcionServicio aventura={nombre} verServicio={verServicio} key={id} />

          })}

        </div>

        <div className="items-center">
          {/* Sección aventuras */}

          <div className="md:w-96 w-72 pb-10">

            <img src={Aventura} alt="" />

          </div>

          <div>
            <h1 className="capitalize md:uppercase text-4xl pb-20 text-gray-800 opacity-50">
              Aventura
            </h1>
          </div>

          {aventuras.map((aventura) => {

            const { id, nombre } = aventura;


            return <OpcionServicio aventura={nombre} verServicio={verServicio} key={id} />;

          })}

        </div>

      </div>

      <div ref={componenteOcultoRef}>
        {mostrarCabaña ? <CabñaInfo titulo={titulo} descripcion={descripcion} precio={precio} /> : ""}
      </div>

    </>
  );
};

export default Reservas;
