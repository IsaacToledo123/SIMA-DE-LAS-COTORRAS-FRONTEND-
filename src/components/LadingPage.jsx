import React, { useState, useContext, useEffect } from "react";

import { motion } from "framer-motion";
import { UsuarioContext } from "../context/UsuarioContext";
import Comentario from "../components/Comentario";
import Swal from "sweetalert2";
import Modal from "./Modal";
import Info from "./Info";
import Footer from "./Footer";
import Carousel from "./Carrusel";

const LadingPage = () => {

  const { comentarios, publicarComentario, mensajePublicado, setMensajePublicado } = useContext(UsuarioContext);
  const [comentario, setComentario] = useState("");


  const handleSubmit = async () => {
    try {
      const dataComment = { comment: comentario };

      const { data, status } = await publicarComentario(dataComment);

      if (status == 200) {

        Swal.fire('Excelente 🤩', "Comentario publicado correctamente", 'success');

        if (!mensajePublicado) {

          setMensajePublicado(true)

        } else {

          setMensajePublicado(false)

        }


      } else {
        //Aquí se abre el modal
        Swal.fire(
          "No puede comentar 😆",
          "Por favor, inicie sesión primero",
          "error"
        );
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const container = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const botonesAjustes = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div>      

      <Carousel />
      {/*Nueva implementacion para la Informacion*/}
      <Info />

      {/* Sección para crear un nuevo comentario */}

      <div className="text-black grid place-items-center mb-10">
        <div className="md:p-10 p-5">
          <h1 className="font-extrabold text-5xl">Cuéntanos:</h1>
          <h1 className="font-extrabold text-5xl">¿cómo te fue en tu visita?</h1>
        </div>

        <div className="text-center md:w-1/2 w-96">
          <textarea
            id="commentid"
            type="text"
            cols="60"
            rows="5"
            placeholder="Las vistas eran increibles ¡Sacamos muchas fotos!"
            className="placeholder:text-gray-600 md:pl-3 border-2 md:text-xl md:w-full 
              md:p-3 w-80  rounded-xl placeholder:text-justify p-3"
            onChange={e => setComentario(e.target.value)}
          ></textarea>
        </div>

        <form className="pt-10 text-sm flex justify-center items-start md:w-1/2 w-96">
          <input type="checkbox" id="checkbox" className="mt-1" />
          <label htmlFor="checkbox" className="text-justify pl-5 ">
            Certifico que esta opinión se basa en mi propia experiencia y es mi opinión genuina de este establecimiento, y que no tengo
            ninguna relación personal ni comercial con este establecimiento ni me ofrecieron incentivo o pago alguno por escribir esta opinión.
            Comprendo que Tripadvisor tiene una política de tolerancia cero con las opiniones falsas.
          </label>
        </form>

        <div className="p-5">
          <button
            className="bg-black px-5 py-2 rounded-full text-white text-xl font-bold w-96 hover:bg-slate-700"
            onClick={handleSubmit}
          >
            Listo!
          </button>
        </div>
      </div>

      {/* Sección para ver todos los comentarios del sitio */}

      <div className="grid md:grid-cols-2">

        <div className="pt-10 text-center bg-gray-10 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Contacto</h2>
          <p className="text-lg text-gray-700">Para mayor información puede contactarse con</p>
          <p className="py-1">Teléfono: <strong className="text-gray-600">9681064463</strong></p>
          <p className="py-1">Correo: <strong className="text-gray-600">simadelascotorrasoficial@gmail.com</strong></p>
          <p className="py-1">Facebook: <strong className="text-gray-600">simadelascotorrasoficial</strong></p>

          <div className="my-8 border-b border-gray-300"></div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-600 mb-2">Horarios de Operación</h2>
            <p className="text-gray-700">Abierto todos los días de la semana, de <strong>8:00 AM a 6:00 PM</strong></p>
          </div>

          <div className="my-8 border-b border-gray-300"></div>

          <div className="">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Creadores de la Web</h2>

            <div className="mb-4">
              <p className="text-lg font-semibold">Desarrollador web</p>
              <p className="text-gray-700">Christopher Yahir Moreno Moreno - <a href="https://github.com/xChrisxY" className="text-gray-600 hover:underline">[Enlace al perfil de GitHub]</a></p>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold">Desarrollador web</p>
              <p className="text-gray-700">Sara Mandujano Bolivar - <a href="https://github.com/SaraMandujano" className="text-gray-600 hover:underline">[Enlace al perfil de GitHub]</a></p>
            </div>

            <div>
              <p className="text-lg font-semibold">Desarrollador web</p>
              <p className="text-gray-700">Isaac Toledo Castillo - <a href="https://github.com/IsaacToledoC" className="text-gray-600 hover:underline">[Enlace al perfil de GitHub]</a></p>
            </div>
          </div>
        </div>

        <div className=" border-l-2 mb-10">

          {comentarios.map((comentario, index) => {
            const { username, userphoto, comment, date } = comentario;

            return (
              <Comentario
                username={username}
                userphoto={userphoto}
                comment={comment}
                date={date}
                key={index}
              />
            );
          })}

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default LadingPage;
