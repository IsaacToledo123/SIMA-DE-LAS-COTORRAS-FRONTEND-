import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {

      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();

      const iniciarSesion = () => {
            // Vamos a iniciar sesión con el usaurio administrador      
            const API_URL = import.meta.env.VITE_REACT_APP_API_URL

            const datos_autenticacion = {
                  username,
                  password
            }

            axios.post(`${API_URL}/api/login-admin/`, datos_autenticacion)

                  .then(e => {

                        if (e.status == 200) {

                              const token = e.data.token;
                              console.log(token);
                              localStorage.setItem('token', token);

                              Swal.fire({
                                    icon: 'success',
                                    title: 'Inicio de sesión exitoso',
                                    showConfirmButton: false,
                                    timer: 1500, 
                              }).then(() => {
                                    
                                    navigate("/admin");
                              });

                        } else {

                              Swal.fire('Oh no! 😧', 'Datos incorrectos, vuelva a intentarlo', 'error')

                        }

                  })

                  .catch(e => console.log(e))

      }

      return (

            <div className="bg-green-800 flex text-white items-center justify-center h-screen">

                  <div className="bg-white text-black border border-y-blue-200 grid p-10 shadow-2xl">

                        <div className='grid place-items-center'>

                              <h1 className='text-3xl font-extrabold mb-5'>Login</h1>

                              <div className='py-5 px-3 mb-3'>
                                    <FontAwesomeIcon icon={faUser} className='pr-5 text-green-700' />
                                    <input
                                          type="text"
                                          placeholder='username'
                                          className='placeholder:text-xl border-b-2 border-green-600 text-lg text-green-700 px-3 py-2'
                                          onChange={e => setUsername(e.target.value)}
                                    />
                              </div>

                              <div className='py-5 px-3 mb-5'>

                                    <FontAwesomeIcon icon={faLock} className='pr-5 text-green-700' />
                                    <input
                                          type="password"
                                          placeholder='password'
                                          className='placeholder:text-xl border-b-2 border-green-600 text-lg text-green-700 px-3 py-2'
                                          onChange={e => setPassword(e.target.value)}
                                    />

                              </div>

                              <button
                                    className='bg-red-700 text-white w-full py-3 text-xl font-semibold hover:bg-red-800'
                                    onClick={iniciarSesion}
                              >Login
                              </button>

                        </div>


                  </div>


            </div>

      )

}

export default Login
