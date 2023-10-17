import React from "react";
import Titulo from "./Titulo";
import Style from '../styles/registro.css'
import Adjuntar from '../img/adjuntarImagen.png'
const Registro = () => {
  return (
    <div>
      <div>
        <Titulo></Titulo>

        <form class="formulario" action="">
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
            <input  type="password" />
          </div>
      <div class="adjuntarImagen">
        <img src={Adjuntar} class="img" />
      </div>
      <div class="formulario">
      <button class="botonCrear">Crear Cuenta</button>
      </div>
          
          
        </form>

 
   
  



      </div>
    </div>
  );
};

export default Registro;
