
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCar, faHome, faHiking } from '@fortawesome/free-solid-svg-icons';

const IngresosView = () => {
  const ingresos = [
    { id: 1, icon: faUtensils, nombre: 'Restaurante', fecha: '2023-01-15', monto: 50 },
    { id: 2, icon: faCar, nombre: 'Transporte', fecha: '2023-01-20', monto: 30 },
    { id: 3, icon: faHome, nombre: 'Aventura', fecha: '2023-02-01', monto: 800 },
    { id: 6, icon: faHiking, nombre: 'Aventuras', fecha: '2023-02-20', monto: 120 },
  ];

  const subtotales = {};
  ingresos.forEach((ingreso) => {
    const categoria = ingreso.nombre;
    subtotales[categoria] = (subtotales[categoria] || 0) + ingreso.monto;
  });

  const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-green-600 mb-6">Ingresos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ingresos.map((ingreso) => (
          <div key={ingreso.id} className="bg-green-100 rounded-lg p-4">
            <div className="text-3xl mb-4 text-green-600">
              <FontAwesomeIcon icon={ingreso.icon} />
            </div>
            <div>
              <p className="text-lg font-semibold text-green-800">{ingreso.nombre}</p>
              <p className="text-sm text-gray-500">{ingreso.fecha}</p>
              <p className="text-lg text-green-800">Monto: ${ingreso.monto}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-4">
        <div className="bg-green-500 rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-white">Subtotales por Categoría</h2>
          <ul className="text-lg">
            {Object.entries(subtotales).map(([categoria, subtotal]) => (
              <li key={categoria} className="flex justify-between items-center py-2">
                <span className="text-green-800">{categoria}:</span>
                <span className="text-gray-300">${subtotal}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-700 rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-white">Total de Ingresos</h2>
          <p className="text-3xl text-gray-300">Total: ${totalIngresos}</p>
        </div>
      </div>
    </div>
  );
};

export default IngresosView;




