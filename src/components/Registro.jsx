import {useContext} from "react";
import Titulo from "./Titulo";
import Style from "../styles/registro.css";
import Adjuntar from "../img/adjuntarImagen.png";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";


const Registro = () => {




  const container = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0 },
  };
  const container1 = {
    hidden: { opacity: 0, x: 50 }, 
    visible: { opacity: 1, x: 0 },
  };


  const textvariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div>
      <div>
        <div className="pl-20 pr-20 p-10">
          <Titulo></Titulo>
        </div>

        <form class="formulario" action="">
          <div className="flex justify-center ">
            <div className="p-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                transition={{ duration: 0.3}}

              >
                <div class="parrafo">
                  <label htmlFor="">Nombre:</label>
                  <input type="text" />
                </div>
                <div class="parrafo">
                  <label htmlFor="">Apellidos:</label>
                  <input type="text" />
                </div>
                <div class="parrafo">
                  <label htmlFor="">Numero de telefono:</label>
                  <input type="text" />
                </div>
                <div class="parrafo">
                  <label htmlFor="">Correo electronico:</label>
                  <input type="email" />
                </div>
                <div class="parrafo">
                  <label htmlFor="">Usuario:</label>
                  <input type="text" />
                </div>
                <div class="parrafo">
                  <label htmlFor="">Contraseña:</label>
                  <input type="password" />
                </div>
              </motion.div>
            </div>

            <div className="p-10 flex flex-col justify-center ">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={container1}
                transition={{ duration: 0.3}}
              >
                <div class="adjuntarImagen">
                  <img src={Adjuntar} class="img" />
                </div>
                <div class="flex justify-center ">
                  <button class="capitalize md:uppercase text-white text-2xl bg-red-800 opacity-90 rounded-lg h-20 w-3/4 hover:opacity-100">
                    Crear Cuenta
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
