import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Usuarios from "../img/usuarios.png";
import LogoEmpresa from '../img/logoP.png'
import Modal from "./Modal";
import { UsuarioContext } from "../context/UsuarioContext";
import Swal from "sweetalert2";

const Nav = () => {

  const { autenticarUsuario } = useContext(UsuarioContext);

  // NavNar Responsive
  const [isOpen, setIsOpen] = useState(false);

  const [inicioSesionModal, setInicioSesionModal] = useState(false);
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const toggleNavbar = () => {

    setIsOpen(!isOpen);

  }

  const handleIngresarClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async e => {

    e.preventDefault();

    setInicioSesionModal(false);

    try {

      const credenciales = {

        username: user,
        password: password

      }

      const {message, token} = await autenticarUsuario(credenciales);

      if (message == "El usuario se ha autenticado correctamente") {

        Swal.fire('Excelente 🤩', "Credenciales correctas", 'success');
        localStorage.setItem("token", token);

      } else {

        Swal.fire('Ojito ahí 🤔', message, 'error');

      }

    } catch (error) {

      console.log("Ha ocurrido un error ", error);

    }

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
          className={`md:flex md:justify-between md:px-10 shadow-md pb-10 ${isOpen ? 'block' : 'hidden'} pt-1 md:pt-0`}>

          <li className={`pt-2 flex justify-center`}>
            <img src={LogoEmpresa} alt="logo de la empresa" width="300px" />
          </li>

          <li className="grid lg:grid-cols-4 md:pt-10 md:text-2xl grid-cols-1 text-center font-bold p-2 text-xl">
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

          <li className="grid lg:grid-cols-3 grid-cols-1 text-center md:text-2xl font-bold p-2 text-xl">

            <div className="pt-8 md:grid flex justify-center">
              <img src={Usuarios} alt="Foto de perfil" width="50px" />
            </div>
            <div className="pt-10">

              <button className="hover:shadow-xl text-xl" onClick={e => { setInicioSesionModal(true) }}>Ingresar</button>

              <Modal isOpen={inicioSesionModal} onClose={e => { setInicioSesionModal(false) }}>

                {/* Cuerpo del inicio de sesión */}

                <h1 className="bg-red-700 rounded-md text-white p-5 text-center mb-10">Bienvenido de nuevo!</h1>

                <h1 className="text-center mb-10">Inicio de Sesión</h1>

                <div>
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    onChange={e => setUser(e.target.value)}
                    className="px-5 py-3 border w-full mb-10"
                  />
                  <input 
                  type="password" 
                  placeholder="Ingresa tu contraseña" 
                  onChange={e => setPassword(e.target.value)} 
                  className="px-5 py-3 border w-full mb-10"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className="bg-green-700 rounded-md text-white py-2 hover:bg-green-800 hover:cursor-pointer p-4 m-auto"
                  >
                    <button onClick={handleSubmit}>Login</button>

                  </div>
                </div>

              </Modal>

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
