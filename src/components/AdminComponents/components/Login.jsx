import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Swal from 'sweetalert2';
import fondo_login from "../../../img/fondo_cotorras.jpeg"     

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
                              localStorage.setItem('token-admin', token);

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

            <div className="flex text-white items-center relative justify-center h-screen" >
                  
                  <img src={fondo_login} alt="sdf" className='absolute h-screen w-full object-cover'/>

                  <div className="backdrop-filter backdrop-blur-sm ||| rounded-2xl text-black border border-y-blue-200 grid p-10 shadow-2xl">

                        <div className='grid place-items-center'>

                              <h1 className='text-3xl font-extrabold mb-5 text-white'>Login</h1>

                              <div className='py-5 px-3 mb-3'>
                                    <FontAwesomeIcon icon={faUser} className='pr-5 text-white' />
                                    <input
                                          type="text"
                                          placeholder='username'
                                          className='placeholder:text-xl border-b-2 border-white text-lg text-white px-3 py-2 bg-transparent placeholder:text-white'
                                          onChange={e => setUsername(e.target.value)}
                                    />
                              </div>

                              <div className='py-5 px-3 mb-5'>

                                    <FontAwesomeIcon icon={faLock} className='pr-5 text-white' />
                                    <input
                                          type="password"
                                          placeholder='password'
                                          className='placeholder:text-xl border-b-2 border-white text-lg text-white px-3 py-2 bg-transparent placeholder:text-white'
                                          onChange={e => setPassword(e.target.value)}
                                    />

                              </div>

                              <button
                                    className='text-white w-full py-3 text-xl font-semibold rounded-md border-2'
                                    onClick={iniciarSesion}
                              >Login
                              </button>                              

                        </div>


                  </div>


            </div>

      )

}

export default Login
