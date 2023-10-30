/*import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMountain } from '@fortawesome/free-solid-svg-icons'; 

const ReservasView = () => {
  const reservas = [
    {
      tipo: 'Cabañas',
      nombre: 'Cabaña 1',
      fechas: 3,
      usuario: 'Usuario 1',
      total: 450,
      pagado: false,
    },
    {
      tipo: 'Aventura',
      nombre: 'Paquete 2',
      fechas: 2,
      usuario: 'Usuario 2',
      total: 300,
      pagado: true,
    },
  ];

  return (
    <div className="bg-gray-100 p-4">
        <h1 className='font-black text-5xl text-center md:w-1/2 mx-auto' >Reservas</h1>
      <div className="p-4 space-x-2 text-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Filtrar por Fecha
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Filtrar por Cabañas
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Filtrar por Aventura
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reservas.map((reserva, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow-md ${
              reserva.pagado ? 'border-green-500' : 'border-red-500'
            }`}
          >
            <div className="flex items-center justify-center text-4xl mb-4">
              {reserva.tipo === 'Cabañas' ? (
                <FontAwesomeIcon icon={faHome} className="text-red-500" />
              ) : (
                <FontAwesomeIcon icon={faMountain} className="text-green-500" />
              )}
            </div>
            <div className="info">
              <h3 className="text-xl font-semibold mb-2">{reserva.tipo}</h3>
              <p>Nombre: {reserva.nombre}</p>
              <p>Fechas: {reserva.fechas}</p>
              <p>Usuario: {reserva.usuario}</p>
              <p>Total: ${reserva.total}</p>
              <p>
                {reserva.pagado ? (
                  <span className="text-green-500">Pagado</span>
                ) : (
                  <span className="text-red-500">Por pagar</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservasView;
*/

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMountain } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono de cabaña

const ReservasView = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedReserva, setSelectedReserva] = useState(null);

  // Datos de ejemplo para las reservas
  const reservas = [
    {
      tipo: 'Cabañas',
      nombre: 'Cabaña 1',
      fechas: 3,
      usuario: 'Usuario 1',
      total: 450,
      pagado: false,
    },
    {
      tipo: 'Aventura',
      nombre: 'Paquete 2',
      fechas: 2,
      usuario: 'Usuario 2',
      total: 300,
      pagado: true,
    },
    // Agrega más reservas aquí
  ];

  const openModal = (reserva) => {
    setSelectedReserva(reserva);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedReserva(null);
    setModalIsOpen(false);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="p-4 space-x-2">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Filtrar por Fecha
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Filtrar por Cabañas
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Filtrar por Aventura
        </button>
      </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reservas.map((reserva, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md ${
                reserva.pagado ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <div className="flex items-center justify-center text-4xl mb-4">
              {reserva.tipo === 'Cabañas' ? (
                <FontAwesomeIcon icon={faHome} className="text-red-500" />
              ) : (
                <FontAwesomeIcon icon={faMountain} className="text-green-500" />
              )}
            </div>
              <div className="info">
                <h3 className="text-xl font-semibold mb-2">{reserva.tipo}</h3>
                <p>Nombre: {reserva.nombre}</p>
                <p>Fechas: {reserva.fechas}</p>
                <p>Usuario: {reserva.usuario}</p>
                <p>Total: ${reserva.total}</p>
                <p>
                  {reserva.pagado ? (
                    <span className="text-green-500">Pagado</span>
                  ) : (
                    <span className="text-red-500">Por pagar</span>
                  )}
                </p>
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
      

      {/* Modal para mostrar detalles de las reservas */}
      {selectedReserva && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="modal-container bg-white w-11/12 max-w-md mx-auto rounded shadow-lg p-4">
            <div className="modal-header flex justify-between items-center border-b-2 border-gray-300 pb-2">
              <h2 className="text-2xl font-bold">
                Detalles de Reserva - {selectedReserva.tipo}
              </h2>
              <button
                className="modal-close bg-blue-500 text-white py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
            <div className="modal-content p-4">
              <p>Usuario: {selectedReserva.usuario}</p>
              <p>Fechas: {selectedReserva.fechas}</p>
              <p>
                Estado de Pago:{' '}
                {selectedReserva.pagado ? 'Pagado' : 'Por pagar'}
              </p>
              {/* Agrega más detalles de la reserva si es necesario */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservasView;
