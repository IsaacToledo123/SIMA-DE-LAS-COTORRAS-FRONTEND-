import {useContext} from "react";
import Titulo from "./Titulo";
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

        <form class="flex flex-col" action="">
          <div className="flex justify-center ">
            <div className="p-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                transition={{ duration: 0.3}}

              >
                <div class="mb-5 flex flex-col">
                  <label class="text-2xl font-inter text-gray-600 mb-1" htmlFor="">Nombre:</label>
                  <input class="p-2 text-base border border-gray-500 bg-yellow-50 rounded-md h-14 w-96" type="text" />
                </div>
                <div  class="mb-5 flex flex-col">
                  <label class="text-2xl font-inter text-gray-600 mb-1" htmlFor="">Apellidos:</label>
                  <input class="p-2 text-base border border-gray-500 bg-yellow-50 rounded-md h-14 w-96" type="text" />
                </div>
                <div  class="mb-5 flex flex-col">
                  <label class="text-2xl font-inter text-gray-600 mb-1"  htmlFor="">Numero de telefono:</label>
                  <input class="p-2 text-base border border-gray-500 bg-yellow-50 rounded-md h-14 w-96" type="text" />
                </div>
                <div  class="mb-5 flex flex-col">
                  <label class="text-2xl font-inter text-gray-600 mb-1" htmlFor="">Correo electronico:</label>
                  <input class="p-2 text-base border border-gray-500 bg-yellow-50 rounded-md h-14 w-96" type="email" />
                </div>
                <div  class="mb-5 flex flex-col">
                  <label class="text-2xl font-inter text-gray-600 mb-1" htmlFor="">Usuario:</label>
                  <input class="p-2 text-base border border-gray-500 bg-yellow-50 rounded-md h-14 w-96" type="text" />
                </div>
                <div  class="mb-5 flex flex-col">
                  <label class="text-2xl font-inter text-gray-600 mb-1" htmlFor="">Contraseña:</label>
                  <input class="p-2 text-base border border-gray-500 bg-yellow-50 rounded-md h-14 w-98" type="password" />
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
                <div class="flex justify-center">
                  <img src={Adjuntar} class="w-3/4 hover:scale-105 " />
                </div>
                <div class="flex justify-center pt-10 ">
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
