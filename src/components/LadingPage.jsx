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

const LadingPage = () => {
  const { comentarios, publicarComentario } = useContext(UsuarioContext);
  const [comentario, setComentario] = useState("");

  const handleSubmit = async () => {
    try {
      const dataComment = { comment: comentario };

      const { data, status } = await publicarComentario(dataComment);

      console.log(data);
      console.log(status);

      if (status == 200) {
        Swal.fire(
          "Excelente 🤩",
          "Comentario publicado correctamente",
          "success"
        );
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
        <div className="flex justify-center items-center pb-20 pt-10 mx-10">
          <img src={imagen_principal} alt="Sima de las cotorras logo" />
        </div>
      </motion.div>

      {/*Nueva implementacion para la Informacion*/}
      <Info />

      {/* Sección para crear un nuevo comentario */}

      <div className="text-black grid place-items-center m-10">
        <div className="md:p-10 p-5">
          <h1 className="md:text-3xl text-lg font-bold">Comentarios: </h1>
        </div>

        <form>
          <div className="text-center">
            <textarea
              id="commentid"
              type="text"
              cols="60"
              rows="5"
              placeholder="Escribe un comentario..."
              className="placeholder:text-gray-600 md:pl-3 bg-stone-200 md:text-xl md:w-full 
              md:p-3 w-80 text-center rounded-xl placeholder:text-justify p-3"
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
          </div>
        </form>

        <div className="p-5">
          <button
            className="bg-emerald-700 px-5 py-2 rounded-md text-white text-xl hover:bg-emerald-800 font-bold"
            onClick={handleSubmit}
          >
            Listo!
          </button>
        </div>
      </div>

      {/* Sección para ver todos los comentarios del sitio */}

      <div className="">
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
  );
};

export default LadingPage;
