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
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const crearUsuario = e => {

    e.preventDefault();

    const datosUsuario = {

      nombre,
      apellidos,
      telefono,
      correo,
      usuario,
      contraseña, 
      imagen     

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

    if (Object.values(datosUsuario).includes("")) {

      Swal.fire("Error", "Debes llenar todos los campos", "error");

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

  const handleImageChange = e => {
    const file = e.target.files[0]

    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setImagen(reader.result)
    }

    reader.readAsDataURL(file)

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
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg" type="text" onChange={e => { setTelefono(e.target.value) }} />
              </div>

              <div class="mb-5 flex flex-col">
                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Correo electronico:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg" type="email" onChange={e => { setCorreo(e.target.value) }} />
              </div>

              <div class="mb-5 flex flex-col">
                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Usuario:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg" type="text" onChange={e => { setUsuario(e.target.value) }} />
              </div>

              <div class="mb-5 flex flex-col">
                <label class="md:text-2xl text-xl font-inter text-gray-600 mb-1">Contraseña:</label>
                <input class="border border-black border-solid py-2 rounded-md px-2 text-lg " type="password" onChange={e => setContraseña(e.target.value)} />
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
