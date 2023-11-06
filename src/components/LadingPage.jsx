import React, { useState, useContext, useEffect } from "react";
import ImagenLading from "../img/imagenLading.png";
import Calendario from "../img/calendario.png";
import Ubicacion from "../img/ubicacion.png";
import Foto1 from "../img/foto1.png";
import Mapa from "../img/mapa.png";
import Foto2 from "../img/foto2.png";
import { motion } from "framer-motion";
import { UsuarioContext } from "../context/UsuarioContext";
import Comentario from "../components/Comentario";
import Swal from "sweetalert2";
import Modal from "./Modal";
import imagen_principal from "../img/sima_cotorras_principañ.webp"

const LadingPage = () => {

  const { comentarios, publicarComentario } = useContext(UsuarioContext);
  const [comentario, setComentario] = useState("");


  const handleSubmit = async () => {

    try {      

      const dataComment = {'comment' : comentario}

      const {data, status} = await publicarComentario(dataComment);

      console.log(data)
      console.log(status)

      if (status == 200) {

        Swal.fire('Excelente 🤩', "Comentario publicado correctamente", 'success');

      } else {

        //Aquí se abre el modal
        Swal.fire('No puede comentar 😆', 'Por favor, inicie sesión primero', 'error');

      }

    } catch (error) {

      console.log("Error: ", error);

    }

  }

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

      <div className="mt-4 ">
        <div className="pt-10 mx-auto max-w-xl flex items-center justify-center px-10">
          <div className="text-center">
            <h1 className="md:text-5xl text-3xl font-bold">Cuando ir a la Sima de las Cotorras</h1>
          </div>
          <div className="pl-5 flex">
            <img src={Calendario} className="pt-10" width="200px" />
          </div>
        </div>
      </div>

      <div className=" md:p-40 md:text-3xl p-10 text-xl ">

        <div className="text-justify opacity-60">
          <ul>
            <li className="pb-7">
              Todo el año: La Sima de las Cotorras es un centro ecoturístico que
              está abierto al público durante todo el año. Además del espectáculo
              de las cotorras, los guías locales ofrecen otras actividades como
              rápel, caminatas, observación aves de la región y acampar.
            </li>
            <li className="pb-7" >
              Marzo y Abril: Es cuando más probabilidad hay de ver cotorras verdes
              y en mayores cantidades, ya sea al amanecer o durante el atardecer.
            </li>
            <li className="pb-7">
              De Mayo a Noviembre: Durante esta temporada también es probable ver
              cotorras, aunque en menores cantidades, pues comienzan a migrar.
            </li>
            <li>
              Amanecer: Hay que dormir ahí o madrugar para llegar a ver los
              primeros rayos del Sol.
            </li>
            <li className="pb-7">
              Atardecer: A partir de las 4:00 pm se empiezan a ver grupos de
              cotorras regresando a la Sima.
            </li>
            <li className="pb-7">
              Diciembre a Febrero: Durante el invierno, las cotorras migran a
              lugares más cálidos como el Arco del Tiempo, por lo que no es
              posible verlas durante estos meses. A veces, grupos pequeños de
              cotorras se quedan durante el invierno, pero por el frío no salen de
              la sima.
            </li>
          </ul>


        </div>
        <div className="flex justify-around pl-20 pr-20">
          <img src={Foto1} className="w-2/5" />
          <img src={Foto2} className="w-2/5" />
        </div>
        <div className="mt-4  ">
          <div className="pt-10 mx-auto max-w-xl flex items-center justify-center px-10">
            <div className="text-center">
              <h1 className="md:text-5xl text-3xl">Como llegar a la sima de las cotorras?</h1>
            </div>
            <div className=" flex">
              <img src={Ubicacion} className="pt-10" width="200px" />
            </div>
          </div>
        </div>
        <div className="text-justify opacity-60">
          <ul>
            <li className="pb-20" >
              <h2 className="pb-10">Auto</h2>

              <ul className="list-disc">
                <li className="pb-7">
                  Para llegar a la Sima de las Cotorras, sólo hay que caminar unos
                  pasos desde donde se deja el auto, pero desafortunadamente no
                  hay transporte público que llegue a la Sima.
                </li>
                <li className="pb-7">
                  Primero hay que llegar a Ocozocoautla y de ahí tomar la
                  terracería que lleva hasta la Sima. Desde Tuxtla a Ocozocoautla
                  son aprox. 40 minutos y de ahí a la Sima otros 40 minutos.
                </li>
                <li className="pb-7">
                  Es un camino seguro y en buenas condiciones. Si usas GPS, busca
                  “Sima de las Cotorras”, sólo asegúrate de cargar el mapa
                  previamente, ya que en la carretera no hay señal.
                </li>
                <li className="pb-7">
                  Por la cercanía, puedes visitar este destino junto con la
                  Cascada del Aguacero, otra joyita de Chiapas que vale mucho la
                  pena conocer. Se hace aprox. 1 hora de camino.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="pb-10">Tour</h2>
              <ul className="list-disc">
                <li className="pb-7" >
                  Tour: Hay diferentes agencias tanto en la Plaza de la Marimba de
                  Tuxtla como en los andadores turísticos de San Cristóbal,
                  quienes ofrecen tours colectivos a la Sima de las Cotorras.
                </li>
                <li className="pb-7">
                  Todos los días salen los tours y los puedes reservar un día
                  antes. La mayoría de las agencias ofrecen paquetes con
                  recorridos que incluyen varios destinos en un mismo día.
                </li>
                <li className="pb-7">
                  Otra opción que vimos fue gente rentando un taxi por todo el
                  día. Normalmente los conductores de taxis cobran una tarifa fija
                  por hora, ya es cuestión de negociar.
                </li>
              </ul>
            </li>
          </ul>
        </div>  

      </div>


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
              onChange={e => setComentario(e.target.value)}
            ></textarea>
          </div>

        </form>

        <div className="p-5">
          <button className="bg-emerald-700 px-5 py-2 rounded-md text-white text-xl hover:bg-emerald-800 font-bold" onClick={handleSubmit}>
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
