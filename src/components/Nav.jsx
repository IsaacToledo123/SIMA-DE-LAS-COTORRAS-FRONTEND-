import { useState } from "react";
import ModalComponent from "./IniciarSesion";
import { Outlet } from "react-router-dom";
import Usuarios from "../img/usuarios.png";
import LogoEmpresa from '../img/logoP.png'


const Nav = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // NavNar Responsive
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {

    setIsOpen(!isOpen);

  }


  const handleIngresarClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

      <div className="flex justify-center items-center pt-10">
        <button
          onClick={toggleNavbar}
          type="button"
          className="lg:hidden bg-green-400 text-white p-3 rounded-md hover:bg-green-500 flex justify-center"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <nav>

        <ul
          className={`md:flex md:justify-between md:px-10 shadow-md pb-10 md:font-mono ${isOpen ? 'block' : 'hidden'} pt-1 md:pt-0`}>

          <li class={`pt-2 flex justify-center`}>
            <img src={LogoEmpresa} alt="logo de la empresa" width="300px"/>
          </li>

          <li class="grid lg:grid-cols-4 md:pt-10 md:text-2xl grid-cols-1 text-center font-bold p-2 text-xl">
            <p className="p-2">
              <a href="/">Informacion</a>
            </p>
            <p className="p-2">
              <a href="/reservas">Ubicacion</a>
            </p>
            <p className="p-2">
              <a href="/cabañasInfo">Menus</a>
            </p>
            <p className="p-2">
              <a href="reservas">Reservas</a>
            </p>
          </li>

          <li class="grid lg:grid-cols-3 grid-cols-1 text-center md:text-2xl font-bold p-2 text-xl">

            <div className="pt-8 md:grid flex justify-center">
              <img src={Usuarios} alt="Foto de perfil" width="50px" />
            </div>
            <div className="pt-10">
              <button className="hover:shadow-xl text-xl" onClick={handleIngresarClick}>Ingresar</button>
              <ModalComponent isOpen={isModalOpen} onRequestClose={handleModalClose} />
            </div>
            <div className="pt-10">
              <button className="hover:shadow-xl text-xl"><a href="/registro">Registrase</a></button>
            </div>

          </li>

        </ul>

      </nav>
      < Outlet />
    </div>
  );
};

export default Nav;
