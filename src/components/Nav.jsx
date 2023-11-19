import { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Usuarios from "../img/usuarios.png";
import LogoEmpresa from '../img/logoP.png'
import Modal from "./Modal";
import { UsuarioContext } from "../context/UsuarioContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

import toast from "react-hot-toast";

const Nav = () => {

  const { autenticarUsuario, usuarioAutenticado } = useContext(UsuarioContext);

  // NavNar Responsive
  const [isOpen, setIsOpen] = useState(false);

  const [inicioSesionModal, setInicioSesionModal] = useState(false);
  const [verDatos, setVerDatos] = useState(false);
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

      const { message, token } = await autenticarUsuario(credenciales);

      if (message == "El usuario se ha autenticado correctamente") {

        Swal.fire('Excelente 🤩', "Credenciales correctas", 'success');
        localStorage.setItem("token", token);
        window.location.href = "/";

      } else {

        Swal.fire('Ojito ahí 🤔', message, 'error');

      }

    } catch (error) {

      console.log("Ha ocurrido un error ", error);

    }

  };

  const cerrarSesion = () => {

    console.log("Vamos a cerrar sesión")
    localStorage.removeItem('token');
    window.location.href = "/";
    toast.success('Nos vemos 🥺', {

      position: "bottom-right",
      style: {
        background: '#101010',
        color: '#fff'
      }

    })

  }

  return (

    <div>

      <div className="grid grid-cols-2">

        <div className="lg:hidden pl-8 bg-gray-800 md:pt-1 pt-2">
          <img src={LogoEmpresa} alt="logo de la empresa" width="200px" />
        </div>


        <div className="flex justify-end pr-10 items-center bg-gray-800 md:py-0 py-3">
          <button
            onClick={toggleNavbar}
            type="button"
            className="lg:hidden text-white p-3 rounded-md"
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
      </div>

      <nav className="bg-gray-800 text-white shadow-xl">

        <ul
          className={`md:flex md:justify-between md:px-10 shadow-md  ${isOpen ? 'block' : 'hidden'} pt-1 md:pt-0`}>

          <li className={`pt-2 lg:block hidden`}>
            <img src={LogoEmpresa} alt="logo de la empresa" width="250px" />
          </li>


          <li className="grid lg:grid-cols-4 md:pt-10 md:text-2xl grid-cols-1 text-center p-2 text-xl">

              <Link to="/" onClick={toggleNavbar} className="md:py-0 py-2">Información</Link>

              <Link to="/ubicacion" onClick={toggleNavbar} className="md:py-0 py-2">Ubicación</Link>

              <Link to="/reservas" onClick={toggleNavbar} className="md:py-0 py-2">Reservas</Link>       

              <Link to="/actividad-usuario" onClick={toggleNavbar} className="md:py-0 py-2">Actividad</Link>
           
          </li>

          {/* Sección principal */}
          <li className="grid lg:grid-cols-3 grid-cols-1 text-center md:text-2xl px-1">
            {/* Foto de perfil */}
            <div className="pt-3 md:grid flex justify-center">

              {usuarioAutenticado
                ?
                <img
                  src={usuarioAutenticado.photo}
                  alt="Foto de perfil"
                  width="85px"
                  className="rounded-full cursor-pointer"
                  onClick={e => { setVerDatos(true) }}
                />
                :
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} className="md:h-12 h-8" />
                </div>

              }

            </div>

            {/* Modal para que el usuario vea sus datos y así poder actualizarlos */}

            <Modal isOpen={verDatos} onClose={e => { setVerDatos(false) }}>

              {/* Cuerpo del inicio de sesión */}
              <div className="font-bold">

                {usuarioAutenticado && (
                  <h1 className="bg-green-700 rounded-md text-white p-5 text-center mb-10">Bienvenido {usuarioAutenticado.username}</h1>
                )}

                <h1 className="text-center mb-10 text-gray-600">Información acerca de ti</h1>
                <div className="flex justify-center">
                  {usuarioAutenticado && (
                    <img src={usuarioAutenticado.photo} alt="foto de perfil" className="w-64" />
                  )}
                </div>
                {usuarioAutenticado && (
                  <div className="pt-5 pb-5">
                    <p className="text-gray-600 pb-2"><span className="text-green-800">Nombre de usuario: </span> {usuarioAutenticado.username}</p>
                    <p className="text-gray-600 pb-2"><span className="text-green-800">Email: </span>{usuarioAutenticado.email}</p>
                    <p className="text-gray-600 pb-2"><span className="text-green-800">Teléfono: </span> {usuarioAutenticado.phone}</p>
                  </div>
                )}

              </div>

              <button
                onClick={e => setVerDatos(false)}
                className="bg-red-700 text-white px-5 py-2 rounded-md my-3"
              >Cerrar</button>

            </Modal>

            {usuarioAutenticado && (
              <div className="md:pt-5 pt-3">
                <button
                  className="rounded-md h-16 text-xl p-2 text-white hover:bg-gray-900"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión</button>
              </div>
            )}

            {/* Botón de ingreso */}
            {!usuarioAutenticado && (
              <div className="pt-10">

                <button className="md:text-2xl text-xl text font-bold" onClick={e => { setInicioSesionModal(true) }}>Ingresar</button>

                <Modal isOpen={inicioSesionModal} onClose={e => { setInicioSesionModal(false) }}>

                  {/* Cuerpo del inicio de sesión */}

                  <h1 className="bg-red-700 rounded-md text-white p-5 text-center mb-10">Bienvenido de nuevo!</h1>

                  <h1 className="text-center mb-10">Inicio de Sesión</h1>

                  <div>
                    <input
                      type="text"
                      placeholder="Ingresa tu nombre de usuario"
                      onChange={e => setUser(e.target.value)}
                      className="px-5 py-3 border w-full mb-10 text-black"
                    />
                    <input
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      onChange={e => setPassword(e.target.value)}
                      className="px-5 py-3 border w-full mb-10 text-black"
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
            )}


            {/* Botón de registro */}
            {!usuarioAutenticado && (
              <div className="py-10">

                <button className="md:text-2xl font-bold text-xl"><a href="/registro">Registrase</a></button>

              </div>

            )}
          </li>

        </ul>

      </nav>
      < Outlet />
    </div>
  );

  // <div>
  //   <div className="pt-4 pb-2 bg-gray-800">
  //     <div className="container mx-auto flex items-center justify-between">
  //       <div className="flex items-center">
  //         <img src={LogoEmpresa} alt="logo de la empresa" width="120px" className="hidden lg:block" />
  //         <button
  //           onClick={toggleNavbar}
  //           type="button"
  //           className="lg:hidden text-white p-3 rounded-md hover:bg-green-500"
  //         >
  //           <svg
  //             className="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M4 6h16M4 12h16M4 18h16"
  //             />
  //           </svg>
  //         </button>
  //       </div>

  //       <div className="hidden lg:block">
  //         <ul className="flex space-x-6 text-white">
  //           <li><Link to="/" onClick={toggleNavbar}>Información</Link></li>
  //           <li><Link to="/ubicacion" onClick={toggleNavbar}>Ubicación</Link></li>
  //           <li><Link to="/reservas" onClick={toggleNavbar}>Reservas</Link></li>
  //           <li><Link to="/actividad-usuario" onClick={toggleNavbar}>Actividad</Link></li>
  //         </ul>
  //       </div>

  //       <div className="flex items-center">
  //         {usuarioAutenticado ? (
  //           <div className="flex items-center">
  //             <img
  //               src={usuarioAutenticado.photo}
  //               alt="Foto de perfil"
  //               className="w-10 h-10 rounded-full cursor-pointer"
  //               onClick={() => setVerDatos(true)}
  //             />
  //             <button
  //               className="ml-4 bg-black rounded-md h-10 text-sm text-white hover:bg-red-900"
  //               onClick={cerrarSesion}
  //             >
  //               Cerrar sesión
  //             </button>
  //           </div>
  //         ) : (
  //           <div className="flex items-center">
  //             <button
  //               className="text-sm text-white font-thin mr-4"
  //               onClick={() => setInicioSesionModal(true)}
  //             >
  //               Ingresar
  //             </button>
  //             <button className="text-sm font-thin"><a href="/registro">Registrarse</a></button>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>

  //   {/* Resto del contenido */}
  //   <Outlet />
  // </div>
}

export default Nav;
