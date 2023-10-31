import { useState } from "react";
import ModalComponent from "./IniciarSesion";
import { Outlet } from "react-router-dom";
import Usuarios from "../img/usuarios.png";
import LogoEmpresa from '../img/logoP.png'


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
      <nav className="flex justify-between px-10 shadow-md pb-10">
        <div class="pt-2">
          <img src={LogoEmpresa} alt="logo de la empresa" width="200px" />
        </div>
        <div class="grid grid-cols-4 pt-10 text-xl">
          <p>
            <a href="/">Informacion</a>
          </p>
          <p>
            <a href="/reservas">Ubicacion</a>
          </p>
          <p>
            <a href="/cabañasInfo">Menus</a>
          </p>
          <p>
            <a href="reservas">Reservas</a>
          </p>
        </div>
        <div class="grid grid-cols-3">
          <div className="pt-8">
            <img src={Usuarios} alt="Foto de perfil" width="50px" />
          </div>
          <div className="pt-10">
            <button className="hover:shadow-xl text-xl" onClick={handleIngresarClick}>Ingresar</button>
            <ModalComponent isOpen={isModalOpen} onRequestClose={handleModalClose} />
          </div>
          <div className="pt-10">
            <button className="hover:shadow-xl text-xl"><a href="/registro">Registrase</a></button>
          </div>
        </div>
      </nav>
      < Outlet />
    </div>
  );
};

export default Nav;
