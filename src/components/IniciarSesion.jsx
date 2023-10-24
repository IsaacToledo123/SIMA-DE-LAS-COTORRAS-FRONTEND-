import React from "react";
import Modal from "react-modal";
import Contrseña from "../img/contraseña.png";
import Correo from '../img/correo.png'
import { useState } from "react";
import {motion} from 'framer-motion'
import { UsuarioContext } from "../context/UsuarioContext";
import {useContext} from "react";

const customStyles = {
  content: {
    width: "40%",
    height: "60%",
    margin: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Agregar sombra
  },
};

const ModalComponent = ({ isOpen, onRequestClose }) => {
  const handleSubmit = (e) => {

    
    e.preventDefault();
    console.log("hola");
    // Lógica de manejo del formulario
  


  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ejemplo Modal"
      style={customStyles}
    >
       <motion.div
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -50 }}
       transition={{ duration: 0.3 }}
       className="modal"
       >
      <div className="p-4 text-center">
        <div className="pl-20 pr-20 pb-4">
          <div className="bg-red-700 text-white opacity-70 p-2">
            <h1 className="capitalize md:uppercase text-2xl ">
              Bienvenido de nuevo !
            </h1>
          </div>
        </div>

        <h2 className="capitalize md:uppercase text-xl opacity-70">
          Iniciar Sesión
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="mt-4 p-5">
          <div className="flex flex-col items-center mb-4">
            <div className="flex mb-4 relative">
              <img
                src={Correo}
                className="absolute left-0 top-2 w-10 h-10 p-2"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="pl-8 pr-8 border p-2"
                
              />
            </div>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="flex mb-4 relative">
              <img
                src={Contrseña}
                alt="Icono de Contraseña"
                className="absolute left-0 top-2 w-10 h-10 p-2"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="pl-8 pr-8 border p-2" // Añadir padding izquierdo para dar espacio a la imagen
                
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-700 opacity-70 text-white p-2 pl-5 pr-5 rounded text-2xl"
          >
            Login
          </button>
        </form>
      </div>

      <button
        onClick={onRequestClose}
        className="absolute bottom-4 right-4 p-2 bg-red-500 rounded"
      >
        Cerrar
      </button>
      </motion.div>
    </Modal>
  );
};

export default ModalComponent;
