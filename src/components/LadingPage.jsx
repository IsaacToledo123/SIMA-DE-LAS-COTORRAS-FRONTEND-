import React, { useState, useContext, useEffect } from "react";

/*import ImagenLading from "../img/imagenLading.png";
import Calendario from "../img/calendario.png";
import Ubicacion from "../img/ubicacion.png";
import Foto1 from "../img/foto1.png";
import Mapa from "../img/mapa.png";
import Foto2 from "../img/foto2.png";*/
import { motion } from "framer-motion";
import { UsuarioContext } from "../context/UsuarioContext";
import Comentario from "../components/Comentario";
import Swal from "sweetalert2";
import Modal from "./Modal";
import imagen_principal from "../img/sima_cotorras_principañ.webp";
import Info from "./Info";
import Footer from "./Footer";

const LadingPage = () => {

  const { comentarios, publicarComentario, mensajePublicado, setMensajePublicado } = useContext(UsuarioContext);
  const [comentario, setComentario] = useState("");

  const handleSubmit = async () => {
    try {
      const dataComment = { comment: comentario };

      const { data, status } = await publicarComentario(dataComment);

      console.log(data);
      console.log(status);

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
    <div className="">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center items-center pb-10 md:pt-10 pt-6 mx-10">
          <img src={imagen_principal} alt="Sima de las cotorras logo" className="w-full"/>
        </div>
      </motion.div>

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

      <div className="grid grid-cols-2">

        <div className="pt-10 text-center">

          

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
