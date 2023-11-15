import { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Usuarios from "../img/usuarios.png";
import LogoEmpresa from '../img/logoP.png'
import Modal from "./Modal";
import { UsuarioContext } from "../context/UsuarioContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
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

      <div className="pt-10 grid grid-cols-2">

        <div className="lg:hidden pl-8">
          <img src={LogoEmpresa} alt="logo de la empresa" width="300px" />
        </div>


        <div className="flex justify-end pr-10 items-center">
          <button
            onClick={toggleNavbar}
            type="button"
            className="lg:hidden bg-green-400 text-white p-3 rounded-md hover:bg-green-500"
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

      <nav>

        <ul
          className={`md:flex md:justify-between md:px-10 shadow-md pb-10 ${isOpen ? 'block' : 'hidden'} pt-1 md:pt-0`}>

          <li className={`pt-2 lg:block hidden`}>
            <img src={LogoEmpresa} alt="logo de la empresa" width="300px" />
          </li>


          <li className="grid lg:grid-cols-4 md:pt-10 md:text-2xl grid-cols-1 text-center font-extralight p-2 text-xl">

            <p className="p-2">

              <Link to="/" onClick={toggleNavbar}>Información</Link>

            </p>

            <p className="p-2">

              <Link to="/ubicacion" onClick={toggleNavbar}>Ubicación</Link>

            </p>

            <p className="p-2">

              <Link to="/reservas" onClick={toggleNavbar}>Reservas</Link>

            </p>
{/* 
            <p className="p-2">

              <Link to="/cabañas" onClick={toggleNavbar}>Cabañas</Link>

            </p>

            <p className="p-2">

              <Link to="/aventuras" onClick={toggleNavbar}>Aventuras</Link>

            </p> */}

            <p className="p-2">

              <Link to="/actividad-usuario" onClick={toggleNavbar}>Actividad</Link>

            </p>
          </li>

          {/* Sección principal */}
          <li className="grid lg:grid-cols-3 grid-cols-1 text-center md:text-2xl p-2 text-xl">
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
                <img src={Usuarios} alt="Foto de perfil" width="85px" />
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
                  className="text-red-800 rounded-md h-16 text-lg p-2"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión</button>
              </div>
            )}

            {/* Botón de ingreso */}
            {!usuarioAutenticado && (
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
            )}


            {/* Botón de registro */}
            {!usuarioAutenticado && (
              <div className="pt-10">

                <button className="hover:shadow-xl text-xl"><a href="/registro">Registrase</a></button>

              </div>

            )}
          </li>

        </ul>

      </nav>
      < Outlet />
    </div>
  );
};

export default Nav;
