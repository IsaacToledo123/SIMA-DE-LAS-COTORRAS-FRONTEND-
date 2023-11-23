import { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
//import { API_URL } from "../config/index"
import { Navigate } from "react-router-dom";
import LandingPage from "../components/LadingPage"

const Registro = () => {

  const token = localStorage.getItem('token')

  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeCorrecto, setMensajeCorrecto] = useState('');
  const [mensajeErrorContraseña, setMensajeErrorContraseña] = useState('');
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL

  const crearUsuario = e => {

    e.preventDefault();

    // validamos la edad del usuario
    const edadUsuario = parseInt(fechaNacimiento.split('-')[0])
    const añoActual = new Date().getFullYear()
    const edadUsuarioActual = añoActual - edadUsuario

    if (edadUsuarioActual < 18) {

      Swal.fire('Lo sentimos', 'Está aplicación es para mayores de edad', 'error');

    } else {

      let datosUsuario = {}

      if (imagen.length == 0) {

        datosUsuario = {

          nombre,
          apellidos,
          telefono,
          correo,
          edadUsuarioActual,
          usuario,
          contraseña,

        }

      } else {

        datosUsuario = {

          nombre,
          apellidos,
          telefono,
          correo,
          edadUsuarioActual,
          usuario,
          contraseña,
          imagen

        }

      }

      if (Object.values(datosUsuario).includes("")) {

        if (contraseña == '') {

          Swal.fire("Error", "Contraseña invalida", "error");

        } else {

          Swal.fire("Error", "Debes llenar todos los campos", "error");

        }


      } else {

        // Haciendo la petición de la base de datos

        axios.post(`${API_URL}/api/usuarios/`, datosUsuario)

          .then(e => {

            if (e.status == 200) {

              const mensaje = e.data.message;
              Swal.fire("Excelente", mensaje, 'success')
              const token = e.data.token;
              localStorage.setItem('token', token)
              limpiarValores();
              window.location.href = "/";

            } else {

              Swal.fire("Oh no!", "La no cuenta ha sido creada satisfactoriamente", 'error')

            }

          })
          .catch(e => {

            Swal.fire("Oh no!", "La no cuenta ha sido creada satisfactoriamente", 'error')

          })

      }

    }

  }

  const limpiarValores = () => {

    setNombre("");
    setApellidos("")
    setTelefono("");
    setCorreo("");
    setUsuario("");
    setContraseña("");
    setImagen("");

  }

  const handleImageChange = e => {

    const file = e.target.files[0]

    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setImagen(reader.result)
    }

    reader.readAsDataURL(file)

  }

  const handleChangeNumero = e => {

    const inputNumero = e.target.value;

    setMensajeCorrecto('')
    if (!isNaN(inputNumero)) {

      if (inputNumero.length == 10) {

        setTelefono(inputNumero);
        setMensajeError('');
        setMensajeCorrecto('Bien hecho :)')

      } else if (inputNumero.length > 10) {

        setMensajeError('Solo puedes ingresar diez digitos')

      }

    } else {

      setMensajeError('Por favor, ingresa solo números!');

    }

  }

  const handleChangePassword = e => {

    const pass = e.target.value;

    if (pass.length == 8) {

      setMensajeErrorContraseña('');

      const contraseñaValida = validarContrasena(pass);

      if (contraseñaValida) {

        setContraseña(pass);

      }

    } else {

      setMensajeErrorContraseña('La contraseña debe tener una contraseña de 8 digitos, combine mayúsculas, minúsculas, números y símbolos')
    }

  }

  function validarContrasena(contrasena) {

    const contieneNumero = /\d/.test(contrasena);

    const contieneSimbolo = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);

    const contieneMayuscula = /[A-Z]/.test(contrasena);
    const contieneMinuscula = /[a-z]/.test(contrasena);

    return contieneNumero && contieneSimbolo && contieneMayuscula && contieneMinuscula;
  }

  return (

    <div>

      <div>

        <form className="flex justify-center bg-gray-100 items-center pt-10 lg:h-screen pb-10">

          <div className="grid md:p-10 p-2 shadow-xl bg-white">

            <h1 className="text-3xl text-center pt-5 pb-10 font-bold px-5">CREA TU PROPIA CUENTA</h1>

            <div className="grid md:grid-cols-2 grid-cols-1">

              <div className="mb-5 flex flex-col mx-5">

                <label className="text-md font-inter text-gray-600 mb-1">Nombre:</label>
                <input
                  className="border py-2 rounded-md px-2 text-lg shadow-md border-b-2"
                  type="text" onChange={e => { setNombre(e.target.value) }}
                />

              </div>

              <div className="mb-5 flex flex-col mx-5">

                <label className="text-md text-gray-600 mb-1">Apellidos:</label>
                <input className="border py-2  rounded-md px-2 text-lg shadow-md border-b-2" type="text" onChange={e => { setApellidos(e.target.value) }} />

              </div>
              <div className="mb-5 flex flex-col mx-5">

                <label className="text-md text-gray-600 mb-1">Numero de telefono:</label>
                <input className="border py-2 rounded-md px-2 text-lg shadow-md border-b-2" type="text" onChange={handleChangeNumero} />
                {mensajeError && <p className="bg-red-500 text-white p-1 mt-1 rounded-md w-80">{mensajeError}</p>}
                {mensajeCorrecto && <p className="bg-green-500 text-white p-1 rounded-md mt-1 w-80">{mensajeCorrecto}</p>}
              </div>

              <div className="mb-5 flex flex-col mx-5">
                <label className="text-md text-gray-600 mb-1">Correo electronico:</label>
                <input className="border py-2 rounded-md px-2 text-lg shadow-md border-b-2" type="email" onChange={e => { setCorreo(e.target.value) }} />
              </div>

              <div className="mb-5 flex flex-col mx-5">
                <label className="text-md text-gray-600 mb-1">Fecha de nacimiento:</label>
                <input className="border py-2 rounded-md px-2 text-lg shadow-md border-b-2" type="date" onChange={e => { setFechaNacimiento(e.target.value) }} />
              </div>

              <div className="mb-5 flex flex-col mx-5">
                <label className="text-md text-gray-600 mb-1">Usuario:</label>
                <input className="border py-2 rounded-md px-2 text-lg shadow-md border-b-2" type="text" onChange={e => { setUsuario(e.target.value) }} />
              </div>

              <div className="mb-5 flex flex-col mx-5">
                <label className="text-md text-gray-600 mb-1">Contraseña:</label>
                <input className="border py-2 rounded-md px-2 text-lg shadow-md border-b-2" type="password" onChange={handleChangePassword} />
                {mensajeErrorContraseña && <p className="bg-red-500 text-white p-1 mt-1 rounded-md w-80">{mensajeErrorContraseña}</p>}
              </div>

              <div className="flex justify-center items-center flex-col pt-1">

                <label
                  htmlFor="habitacion"
                  className="text-black hover:cursor-pointer text-center rounded-md text-md border border-gray-300 shadow-md"
                >
                  <div>
                    <span className="flex justify-center items-center py-3 px-16 text-gray-500">Selecciona una imagen</span>
                  </div>

                </label>

                <input
                  type="file"
                  id="habitacion"
                  onChange={(e) => handleImageChange(e)}
                  accept="image/*"
                  className="hidden"
                />

              </div>

            </div>

            <div className="md:p-10 grid grid-cols-1 justify-center p-2">

              <div className="flex justify-center">
                {
                  imagen && (                    
                    <img src={imagen} alt="" className="pt-5 w-56 h-60" />
                  )
                }
              </div>

              <div className="flex justify-center pt-10 ">
                <button
                  className="md:uppercase text-white text-2xl bg-gray-800 opacity-90 rounded-lg h-16 w-full hover:opacity-100 font-bold"
                  onClick={crearUsuario}
                >
                  Crear Cuenta
                </button>
              </div>

            </div>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Registro;
