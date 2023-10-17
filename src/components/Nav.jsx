import {useState} from "react";
import Style from "../styles/nav.css";
import ModalComponent from "./IniciarSesion";
import { Outlet } from "react-router-dom";
import Usuarios from "../img/usuarios.png";
import LogoEmpresa from '../img/logoEmpresa.jpeg'
const Nav = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIngresarClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav>
        <div class="logoEmpresa">
          <img src={LogoEmpresa} alt="" />
        </div>
        <div class="apartados">
          <p>
            <a href="/">Informacion</a>
          </p>
          <p>
            <a href="">Ubicacion</a>
          </p>
          <p>
            <a href="/cabañasInfo">Menus</a>
          </p>
          <p>
            <a href="reservas">Reservas</a>
          </p>
        </div>
        <div class="imagenes">
          <img src={Usuarios} />
          <div >
      <button className="hover:shadow-xl" onClick={handleIngresarClick}>Ingresar</button>
      <ModalComponent isOpen={isModalOpen} onRequestClose={handleModalClose} />
    </div>
          <div>
            <button className="hover:shadow-xl"><a href="/registro">Registrase</a></button>
          </div>
        </div>
      </nav>
      < Outlet/>
    </div>
  );
};

export default Nav;
