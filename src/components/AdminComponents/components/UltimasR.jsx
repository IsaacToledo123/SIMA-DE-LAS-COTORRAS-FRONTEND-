import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import { AdministradorContext } from '../../../context/AdminContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2';

export default function LatestReservations() {

  const { arregloOrdenado } = useContext(AdministradorContext);


  useEffect(() => {

    let primeras10Reservaciones = []

    if (arregloOrdenado.length > 10) {

      primeras10Reservaciones = arregloOrdenado.slice(0, 10);

    }

    primeras10Reservaciones = [...arregloOrdenado]

  }, []);


  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4 mb-4">

      <h2 className="mb-4 text-xl md:text-2xl font-semibold">
        Últimas Reservaciones
      </h2>
      <div className="flex flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {arregloOrdenado.map((reservation, i) => (
            <div
              key={i}
              className={`flex flex-row items-center justify-between py-4 ${i !== 0 ? 'border-t' : ''}`}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-4 text-gray-700" />
                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold md:text-base">
                    {reservation.nombre_de_usuario} {reservation.apellido_de_usuario}
                  </p>

                  <p className="hidden text-sm text-gray-500 sm:block">
                    {reservation.email_usuario}
                  </p>

                  <p className="hidden text-sm text-gray-500 sm:block pt-1">
                    {reservation.telefono_usuario}
                  </p>

                  <p className="hidden text-sm text-gray-500 sm:block pt-1">
                    {reservation.nombre_servicio}
                  </p>

                  <p className="hidden text-sm text-gray-500 sm:block pt-1">
                    {reservation.fecha_reservacion}
                  </p>

                </div>

              </div>
              <p className="truncate text-sm font-medium md:text-base">
                {reservation.pago}
              </p>

            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <span className="h-5 w-5 text-gray-500">&#8594;</span>
          <h3 className="ml-2 text-sm text-gray-500">Actualizado justo ahora</h3>
        </div>
      </div>
    </div>
  );
}
