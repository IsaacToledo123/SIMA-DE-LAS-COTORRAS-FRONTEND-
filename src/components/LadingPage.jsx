import React, { useState, useContext, useEffect } from "react";
import ImagenLading from "../img/imagenLading.png";
import Style from "../styles/ladingPage.css";
import Calendario from "../img/calendario.png";
import Ubicacion from "../img/ubicacion.png";
import Foto1 from "../img/foto1.png";
import Mapa from "../img/mapa.png";
import Foto2 from "../img/foto2.png";
import { motion } from "framer-motion";
import { UsuarioContext } from "../context/UsuarioContext";
import Comentario from "../components/Comentario"

const LadingPage = () => {

  const { comentarios } = useContext(UsuarioContext);

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        transition={{ duration: 0.3 }}
      >
        <div class="imagenPrincipal">
          <img src={ImagenLading} class="imagenLading" />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={botonesAjustes}
        transition={{ duration: 0.3 }}
      >
        <div className="flex mx-20 ">
          <button className="bg-gray-200 p-5 rounded-md hover:shadow-xl">
            Informacion
          </button>
          <div className="pl-5">
            <button className="bg-gray-200 p-5 rounded-md hover:shadow-xl">
              <img src={Mapa} className="h-10 w-10" />
            </button>
          </div>
        </div>
      </motion.div>
      <div class="contenido">
        <div class="titulo">
          <div>
            <h1>Cuando ir a la Sima de las Cotorras</h1>
          </div>
          <div>
            <img src={Calendario} class="calendario" />
          </div>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>
            Todo el año: La Sima de las Cotorras es un centro ecoturístico que
            está abierto al público durante todo el año. Además del espectáculo
            de las cotorras, los guías locales ofrecen otras actividades como
            rápel, caminatas, observación aves de la región y acampar.
          </li>
          <li>
            Marzo y Abril: Es cuando más probabilidad hay de ver cotorras verdes
            y en mayores cantidades, ya sea al amanecer o durante el atardecer.
          </li>
          <li>
            De Mayo a Noviembre: Durante esta temporada también es probable ver
            cotorras, aunque en menores cantidades, pues comienzan a migrar.
          </li>
          <li>
            Amanecer: Hay que dormir ahí o madrugar para llegar a ver los
            primeros rayos del Sol.
          </li>
          <li>
            Atardecer: A partir de las 4:00 pm se empiezan a ver grupos de
            cotorras regresando a la Sima.
          </li>
          <li>
            Diciembre a Febrero: Durante el invierno, las cotorras migran a
            lugares más cálidos como el Arco del Tiempo, por lo que no es
            posible verlas durante estos meses. A veces, grupos pequeños de
            cotorras se quedan durante el invierno, pero por el frío no salen de
            la sima.
          </li>
        </ul>

        <div class="acomodarFotos">
          <img src={Foto1} class="fotos" />
          <img src={Foto2} class="fotos" />
        </div>
      </div>
      <div class="contenido">
        <div class="titulo">
          <div>
            <h1>Cómo llegar a la Sima de las Cotorras</h1>
          </div>
          <div>
            <img src={Ubicacion} class="ubicacion" />
          </div>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>
            Auto
            <ul class="content1">
              <li>
                Para llegar a la Sima de las Cotorras, sólo hay que caminar unos
                pasos desde donde se deja el auto, pero desafortunadamente no
                hay transporte público que llegue a la Sima.
              </li>
              <li>
                Primero hay que llegar a Ocozocoautla y de ahí tomar la
                terracería que lleva hasta la Sima. Desde Tuxtla a Ocozocoautla
                son aprox. 40 minutos y de ahí a la Sima otros 40 minutos.
              </li>
              <li>
                Es un camino seguro y en buenas condiciones. Si usas GPS, busca
                “Sima de las Cotorras”, sólo asegúrate de cargar el mapa
                previamente, ya que en la carretera no hay señal.
              </li>
              <li>
                Por la cercanía, puedes visitar este destino junto con la
                Cascada del Aguacero, otra joyita de Chiapas que vale mucho la
                pena conocer. Se hace aprox. 1 hora de camino.
              </li>
            </ul>
          </li>
          <li>
            Tour
            <ul class="content1 ">
              <li>
                Tour: Hay diferentes agencias tanto en la Plaza de la Marimba de
                Tuxtla como en los andadores turísticos de San Cristóbal,
                quienes ofrecen tours colectivos a la Sima de las Cotorras.
              </li>
              <li>
                Todos los días salen los tours y los puedes reservar un día
                antes. La mayoría de las agencias ofrecen paquetes con
                recorridos que incluyen varios destinos en un mismo día.
              </li>
              <li>
                Otra opción que vimos fue gente rentando un taxi por todo el
                día. Normalmente los conductores de taxis cobran una tarifa fija
                por hora, ya es cuestión de negociar.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Sección para crear un nuevo comentario */}
      <div className="bg-gray-200 text-black grid place-items-center mx-10">

        <div className="p-10">
          <h1 className="text-3xl">Comentarios: </h1>
        </div>


        <form>

          <div className="pb-5">
            <label htmlFor="commentid" className="text-2xl">Dejar un comentario: </label>
          </div>

          <textarea
            id="commentid"
            type="text"
            cols="60"
            rows="7"
            placeholder="Escribe un comentario..."
            className="placeholder:text-black pl-3 bg-stone-200 text-xl p-5"
          //onChange={e => setComentario(e.target.value)}
          >
          </textarea>

        </form>

        <div className="p-5">
          <button className="bg-emerald-700 px-5 py-2 rounded-md text-white text-xl hover:bg-emerald-800">Listo!</button>
        </div>

      </div>

      {/* Sección para ver todos los comentarios del sitio */}

      <div>

        {comentarios.map((comentario, index) => {

          const { username, userphoto, comment, date } = comentario;

          return <Comentario username = {username} userphoto = {userphoto} comment = {comment} date = {date} key={index}/>

        })}

      </div>

    </div>
  );
};

export default LadingPage;
