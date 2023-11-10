import { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { API_URL } from "../config/index"
import { Navigate } from "react-router-dom";
import LandingPage from "../components/LadingPage"

const Registro = () => {

  const token = localStorage.getItem('token')

  const [imagen, setImagen] = useState({})
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

  const crearUsuario = e => {

    e.preventDefault();

    // validamos la edad del usuario
    const edadUsuario = parseInt(fechaNacimiento.split('-')[0])
    const añoActual = new Date().getFullYear()


    if ((añoActual - edadUsuario) < 18) {

      Swal.fire('Lo sentimos', 'Está aplicación es para mayores de edad', 'error');

    } else {

      const datosUsuario = {

        nombre,
        apellidos,
        telefono,
        correo,
        fechaNacimiento,
        usuario,
        contraseña,
        imagen
  
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

        <div className="md:pl-20 md:pr-20 md:p-10 p-5">

          <h1 className="bg-red-700 text-white font-bold md:text-5xl text-center py-5 text-2xl">Registro</h1>

        </div>

        <form className="flex flex-col">

          <div className="grid md:grid-cols-2 grid-cols-1 md:p-10 p-2">

            <div className="md:p-24 p-8">

              <div class="mb-5 flex flex-col">

                <label className="md:text-2xl text-xl font-inter text-gray-600 mb-1">Nombre:</label>
                <input
                  className="border border-black border-solid py-2 rounded-md px-2 text-lg"
                  type="text" onChange={e => { setNombre(e.target.value) }}
                />

              </div>

              <div class="mb-5 flex flex-col">

                <label className="md:text-2xl text-xl font-inter text-gray-600 mb-1">Apellidos:</label>
                <input className="border border-black border-solid py-2  rounded-md px-2 text-lg" type="text" onChange={e => { setApellidos(e.target.value) }} />

              </div>
              <div class="mb-5 flex flex-col">

                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Numero de telefono:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg" type="text" onChange={handleChangeNumero} />
                {mensajeError && <p className="bg-red-500 text-white p-1 mt-1 rounded-md">{mensajeError}</p>}
                {mensajeCorrecto && <p className="bg-green-500 text-white p-1 rounded-md mt-1">{mensajeCorrecto}</p>}
              </div>

              <div class="mb-5 flex flex-col">
                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Correo electronico:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg" type="email" onChange={e => { setCorreo(e.target.value) }} />
              </div>

              <div class="mb-5 flex flex-col">
                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Fecha de nacimiento:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg" type="date" onChange={e => { setFechaNacimiento(e.target.value) }} />
              </div>

              <div class="mb-5 flex flex-col">
                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Usuario:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg" type="text" onChange={e => { setUsuario(e.target.value) }} />
              </div>

              <div class="mb-5 flex flex-col">
                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Contraseña:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg " type="password" onChange={handleChangePassword} />
                {mensajeErrorContraseña && <p className="bg-red-500 text-white p-1 mt-1 rounded-md">{mensajeErrorContraseña}</p>}
              </div>

            </div>

            <div className="md:p-10 grid grid-cols-1 justify-center p-2">

              <div className="flex mt-2 justify-center items-center">
                <input
                  type="file"
                  id="habitacion"
                  onChange={(e) => handleImageChange(e)}
                  accept="image/*"
                  className="hidden"
                />
                <label
                  htmlFor="habitacion"
                  className="bg-red-800 text-white hover:cursor-pointer h-20 w-72 text-center font-bold rounded-md text-xl hover:bg-red-900"
                >
                  <div>
                    <span className="flex justify-center items-center pt-5">Selecciona una imagen</span>
                  </div>

                </label>
              </div>


              {
                imagen && (
                  <img src={imagen} alt="" className="pt-5" />
                )
              }

              <div class="flex justify-center pt-10 ">
                <button
                  class="capitalize md:uppercase text-white text-2xl bg-red-800 opacity-90 rounded-lg h-20 w-3/4 hover:opacity-100"
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
