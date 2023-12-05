// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

// const Socket = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newMessage={
//         body:message,
//         from:'Me'
//     }
//     setMessages([...messages, newMessage]);
//     socket.emit('message', message);
    
//   };

//   useEffect(() => {
//     socket.on("message",receiveMessage)
//     return ()=>{
//         socket.off("message",receiveMessage)
//     }
//   }, []); 
//   const receiveMessage=(message)=>
//   setMessages((state)=>[...state, message]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="escribe tu mensaje"
//           value={message} 
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit">enviar</button>
//       </form>
// <ul>
// {messages.map((mensaje, index) => (
//         <li key={index}>
//           {mensaje.from}:{mensaje.body}</li>
//       ))}
// </ul>
      
//     </div>
//   );
// };

// export default Socket;
