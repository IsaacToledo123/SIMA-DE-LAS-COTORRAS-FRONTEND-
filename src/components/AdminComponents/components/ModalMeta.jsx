
// import { useState } from "react";

// const ModalMeta = ({ isOpen, onClose, title, fields }) => {

//   const camposStates = {};

//   const inicializaCamposStates = () => {

//     const inicialState = {};

//     fields.forEach((field) => {
//       inicialState[field.name] = "";
//     });
//     return inicialState;
//   };

//   const [formState, setFormState] = useState(inicializaCamposStates());

//   const handleAgregar = () => {
//     onClose();
//   };

//   const handleFieldChange = (fieldName, value) => {
//     setFormState({ ...formState, [fieldName]: value });
//   };

//   return (
//     isOpen && (
//       <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
//         <div className="bg-white p-4 rounded-lg w-96">
//           <div className="flex justify-between">
//             <h2 className="text-2xl font-bold mb-4">{title}</h2>
//             <button className="text-black cursor-pointer" onClick={onClose}>
//               X
//             </button>
//           </div>
//           <form>
//             {fields.map((field) => (
//               <div className="mb-4" key={field.name}>
//                 <label
//                   htmlFor={field.name}
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   {field.label}:
//                 </label>
//                 <input
//                   type={field.type}
//                   id={field.name}
//                   name={field.name}
//                   className="border rounded-md p-2 w-full"
//                   value={camposStates[field.name]}
//                   onChange={(e) => handleFieldChange(field.name, e.target.value)}
//                 />
//               </div>
//             ))}
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
//               onClick={handleAgregar}
//             >
//               Agregar
//             </button>
//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default ModalMeta;



import axios from "axios";
import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { API_URL } from "../../../config";
import { AdministradorContext } from "../../../context/AdminContext";

const ModalMeta = ({ isOpen, onClose, title, fields }) => {

  const camposStates = {};

  const { setAgregadoIngreso, setAgregadoEgreso } = useContext(AdministradorContext);

  const inicializaCamposStates = () => {

    const inicialState = {};

    fields.forEach((field) => {
      inicialState[field.name] = "";
    });
    return inicialState;
  };

  const [formState, setFormState] = useState(inicializaCamposStates());

  // agregar un nuevo ingreso
  const handleAgregar = () => {

    if (title == "Agregar Ingreso") {

      const monto = parseInt(formState.monto);

      const token = localStorage.getItem('token-admin');

      if (!monto) {

        Swal.fire('Ojo ahí', 'Debes ingresar números recuerda', 'warning')

      } else {

        // Haremos la petición a la base de datos
        console.log("Haciendo la petición de la base de datos");

        axios.post(`${API_URL}/api/administrador/agregar-ingreso/`, formState, {

          headers: {

            Authorization: `${token}`

          }

        })
          .then(e => {

            if (e.status == 200) {

              setAgregadoIngreso(true);
              Swal.fire('Success', e.data.message, 'success');

            }

          })
          .catch(e => {

            Swal.fire('Error', 'Al parecer algo salió mal', 'error');

          })
      }

    } else {

      console.log("vamos a agregar un nuevo egreso")
      console.log(formState);

      const monto = parseInt(formState.monto);

      const token = localStorage.getItem('token-admin');

      if (!monto) {

        Swal.fire('Ojo ahí', 'Debes ingresar números recuerda', 'warning')

      } else {

        // Haremos la petición a la base de datos
        console.log("Haciendo la petición de la base de datos");

        axios.post(`${API_URL}/api/administrador/egresos/`, formState, {

          headers: {

            Authorization: `${token}`

          }

        })
          .then(e => {

            if (e.status == 200) {

              setAgregadoEgreso(true);
              toast.success(e.data.message, {

                position: "bottom-right",
                style: {
                  background: '#101010',
                  color: '#fff'
                }
          
              })

            }

          })
          .catch(e => {

            Swal.fire('Error', 'Al parecer algo salió mal', 'error');

          })
      }

    }


    onClose();
  };

  const handleFieldChange = (fieldName, value) => {
    setFormState({ ...formState, [fieldName]: value });
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-4 rounded-lg w-96">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <button className="text-black cursor-pointer hover:bg-red-700 hover:text-white rounded-full px-2 h-8" onClick={onClose}>
              X
            </button>
          </div>
          <form>
            {fields.map((field) => (
              field.name !== "categoria" ? (
                <div className="mb-4" key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}:
                  </label>

                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="border rounded-md p-2 w-full"
                    value={camposStates[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  />
                </div>
              ) : (
                <div className="mb-4" key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}:
                  </label>

                  <select
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="border rounded-md p-2 w-full"
                    value={camposStates[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  >
                    {
                      field.options.map((option) => (
                        <option>{option}</option>
                      ))
                    }
                  </select>
                </div>
              )
            ))}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
              onClick={handleAgregar}
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ModalMeta;


