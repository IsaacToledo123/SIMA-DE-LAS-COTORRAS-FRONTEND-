import React, { useContext, useEffect, useRef, useState } from "react";;
import OpcionServicio from "./OpcionServicio";
import { AventuraContext } from "../context/AventuraContext";
import { motion } from "framer-motion";
import CabñaInfo from "../components/CabñaInfo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import ImagenesServicio from "./ImagenesServicio";
import fotografias_cabaña1 from "../img/fotografias_cabaña/fotografia_cabaña5.jpeg"
import fotografias_cabaña_2 from "../img/fotografias_cabaña/fotografía_cabaña1.1.jpeg"
import fotografías_cabaña_3 from "../img/fotografias_cabaña/fotografia_cabaña3.1.jpeg"
import rappel from "../img/aventuras/rappel.jpg"
import medio_rappel from "../img/aventuras/rappel_2.jpg"
import caminata from "../img/aventuras/PINTURA-MANITAS.jpg"
import tirolesa from "../img/aventuras/tirolesa.jpeg"
import paquete from "../img/aventuras/caminata.jpg"
import gran_paqueta from "../img/aventuras/gran_paquete.jpg"
import { Navigate } from "react-router-dom";
import Footer from "./Footer";


const Reservas = () => {

  const { aventuras, cabañas } = useContext(AventuraContext);
  const [verCabaña, setVerCabaña] = useState(false);

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

  const imagenes = [

    fotografias_cabaña1,
    fotografias_cabaña_2,
    fotografías_cabaña_3,

  ]

  const imagenesAventura = [

    rappel,
    medio_rappel,
    caminata,
    tirolesa,
    paquete,
    gran_paqueta

  ]

  const verServicioCabaña = idServicio => {

    const cabaña = cabañas.find(c => c.id == idServicio);

    localStorage.setItem('cabaña', JSON.stringify(cabaña));

    setVerCabaña(true);

  }

  if (verCabaña) {

    return (<Navigate to="/cabañas" />)

  }

  const verServicioAventura = idServicio => {

    console.log(idServicio)

  }



  return (

    <div>

      <h1 className="text-3xl py-10 font-thin text-center">Cabañas</h1>

      <div className="grid md:grid-cols-3 grid-cols-1">

        {cabañas.map((cabaña, index) => {

          return <ImagenesServicio nombre={cabaña.nombre} imagen={imagenes[index]} verServicio={verServicioCabaña} idServicio={cabaña.id} />

        })}

      </div>

      <div>

      </div>

      <h1 className="text-3xl py-10 font-thin text-center">Aventuras</h1>

      <div className="grid md:grid-cols-2 grid-cols-1">

        {aventuras.map((aventura, index) => {

          return <ImagenesServicio nombre={aventura.nombre} imagen={imagenesAventura[index]} verServicio={verServicioAventura} idServicio={aventura.id} />

        })}

      </div>

        <Footer />
    </div>
  );
};

export default Reservas;
