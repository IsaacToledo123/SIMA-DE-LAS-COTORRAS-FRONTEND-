import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { AdministradorContext } from "../../../context/AdminContext";

const ReservasView = () => {
  const [selectedReserva, setSelectedReserva] = useState(null);
  const { arregloAgrupadoByUser } = useContext(AdministradorContext);
  const [sumaTotal, setSumaTotal] = useState(0);

  console.log(arregloAgrupadoByUser)

  const reservas = [
    {
      nombre: "Jose Mendez",
      fechas: "22-10-23 - 24-10-23",
      total: 450,
      totalUsuarios: 2,
      servicios: [
        { nombre: "Rappel", precio: 800 },
        { nombre: "Tirolesa", precio: 1200 },
        { nombre: "Caminata", precio: 1200 },
      ],
      pagado: true,
    },
    {
      nombre: "Sara Mandujano",
      fechas: "22-10-23 - 24-10-23",
      total: 3200,
      totalUsuarios: 5,
      servicios: [
        { nombre: "Rappel", precio: 800 },
        { nombre: "Tirolesa", precio: 1200 },
        { nombre: "Caminata", precio: 1200 },
      ],
      pagado: true,
    },
    {
      nombre: "Sara Mandujano",
      fechas: "22-10-23 - 24-10-23",
      total: 3200,
      totalUsuarios: 5,
      servicios: [
        { nombre: "Rappel", precio: 800 },
        { nombre: "Tirolesa", precio: 1200 },
        { nombre: "Caminata", precio: 1200 },
      ],
      pagado: true,
    },
    {
      nombre: "Sara Mandujano",
      fechas: "22-10-23 - 24-10-23",
      total: 3200,
      totalUsuarios: 5,
      servicios: [
        { nombre: "Rappel", precio: 800 },
        { nombre: "Tirolesa", precio: 1200 },
        { nombre: "Caminata", precio: 1200 },
      ],
      pagado: true,
    },
    {
      nombre: "Sara Mandujano",
      fechas: "22-10-23 - 24-10-23",
      total: 3200,
      totalUsuarios: 5,
      servicios: [
        { nombre: "Rappel", precio: 800 },
        { nombre: "Tirolesa", precio: 1200 },
        { nombre: "Caminata", precio: 1200 },
      ],
      pagado: true,
    }, {
      nombre: "Sara Mandujano",
      fechas: "22-10-23 - 24-10-23",
      total: 3200,
      totalUsuarios: 5,
      servicios: [
        { nombre: "Rappel", precio: 800 },
        { nombre: "Tirolesa", precio: 1200 },
        { nombre: "Caminata", precio: 1200 },
      ],
      pagado: true,
    },
  ];

  const openModal = (reserva) => {

    console.log(reserva.pagos);
    
    const suma = reserva.pagos.reduce((acumulador, elemento) => acumulador + Number(elemento), 0);

    setSumaTotal(suma);

    setSelectedReserva(reserva);
  };

  const closeModal = () => {
    setSelectedReserva(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl uppercase font-bold text-emerald-700 text-center mb-4">
        RESERVAS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arregloAgrupadoByUser.map((reserva, index) => (          
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200"
          >
            <div className="p-4 flex items-center justify-center text-4xl mb-4 bg-blue-200 rounded-t-lg">
              <FontAwesomeIcon icon={faBookmark} className="text-blue-500" />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faUser} className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">{reserva.nombre_de_usuario}</h3>
              </div>
              <p>Fechas: {reserva.fecha_reservacion}</p>
              <p>Teléfono: {reserva.telefonos[0]}</p>
              {/* <p>Total de Usuarios: {reserva.totalUsuarios}</p> */}
              {/* <p className="font-bold">Total: ${sumaTotal}</p> */}
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                onClick={() => openModal(reserva)}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedReserva && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="modal-container bg-white w-11/12 max-w-md mx-auto rounded shadow-lg p-4">
            <div className="modal-header flex justify-between items-center border-b-2 border-gray-300 pb-2">
              <h2 className="text-2xl font-bold">
                Detalles de Reserva - {selectedReserva.nombre_de_usuario}
              </h2>
              <button
                className="modal-close bg-blue-500 text-white py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
            <div className="modal-content p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedReserva.servicios.map((servicio, index) => (
                    <tr key={index} className="text-center">
                      <td>{servicio}</td>                                            
                      <td>{selectedReserva.pagos[index]}</td>                      
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="font-bold mt-4">Total: ${sumaTotal}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservasView;