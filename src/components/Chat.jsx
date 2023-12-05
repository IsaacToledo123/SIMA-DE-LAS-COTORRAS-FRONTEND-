import { useState, useEffect, useContext } from 'react'
import { UsuarioContext } from "../context/UsuarioContext";
// Podemos hacer que el nombre de la sala sea dinámico
const chatSocket = new WebSocket(`wss://${import.meta.env.VITE_SOCKET}/ws/chat/chat_sala1/`);
const username = localStorage.getItem('username');

function Chat() {

      const { usuarioAutenticado } = useContext(UsuarioContext);
      
      const [nombre, setNombre] = useState("");
      const [mensaje, setMensaje] = useState("");
      const [chat, setChat] = useState([]);

      const enviar = e => {
            
            console.log("El nombre aquí: ")
            console.log(nombre);
            chatSocket.send(JSON.stringify({

                  type: 'message',
                  message: mensaje,
                  // name: nombre,

            }));

            setMensaje('');

            e.preventDefault();

      }

      useEffect(() => {

            chatSocket.onopen = event => {

                  console.log('websocket conectado ' + event);

            }

            chatSocket.onclose = event => {

                  console.log('websocket desconectado ' + event);

            }

      }, []);

      useEffect(() => {

            if (usuarioAutenticado) {
                  
                  setNombre(usuarioAutenticado.username);

            } else {

                  setNombre("Admin");
            }


      }, []);

      chatSocket.onmessage = (message) => {

            const dataFromServer = JSON.parse(message.data);

            if (dataFromServer) {

                  console.log(dataFromServer);

                  setChat(
                        [...chat, {'message' : dataFromServer.message}]
                  );

            }

      }

      return (

            <div className="flex flex-col h-screen items-center">

                  <div className="flex-1 overflow-y-scroll p-4 md:w-8/12 w-full md:m-10 md:rounded-md shadow-xl pt-10 bg-gray-100">

                        {chat.map((chat, index) => (

                              <div
                                    key={index}
                                    // ${chat.user == 'Admin' ? 'justify-end' : 'justify-start'}
                                    className={`flex items-center mb-4  ${index % 2 == 0 ? 'justify-end' : 'justify-start'}`}
                              >
                                    {/**${chat.user === 'Admin' ? 'bg-green-500' : 'bg-blue-400'} */}
                                    <div className={`p-3  rounded-lg shadow-2xl ${index % 2 == 0 ? 'bg-green-500' : 'bg-blue-400'}`}>
                                                         
                                          <p className={`text-white font-bold`}>{chat.message}</p>

                                    </div>
                              </div>
                        ))}

                  </div>

                  <div className="p-4">

                        <div className="flex shadow-xl">

                              <input
                                    type="text"
                                    onChange={e => setMensaje(e.target.value)}
                                    placeholder='Escribir un mensaje...'
                                    className="flex-1 border rounded-l-lg p-2 outline-none"
                                    value={mensaje}
                              />
                              <button
                                    onClick={enviar}
                                    className="bg-gray-700 text-white px-4 py-2 rounded-r-lg"
                              >
                                    Enviar
                              </button>

                        </div>
                  </div>
            </div>
      )
}

export default Chat
