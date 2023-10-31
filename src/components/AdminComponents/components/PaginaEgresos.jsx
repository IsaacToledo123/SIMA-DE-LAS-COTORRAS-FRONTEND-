import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCar, faHome, faShoppingCart, faUtensilSpoon, faHiking } from '@fortawesome/free-solid-svg-icons';

const EgresosView = () => {
  const egresos = [
    { id: 2, icon: faCar, nombre: 'Transporte', fecha: '2023-01-20', monto: 50 },
    { id: 3, icon: faHome, nombre: 'Alquiler', fecha: '2023-02-01', monto: 700 },
    { id: 4, icon: faShoppingCart, nombre: 'Compras', fecha: '2023-02-10', monto: 150 },
    { id: 5, icon: faUtensilSpoon, nombre: 'Trabajadores', fecha: '2023-02-15', monto: 45 },
    { id: 6, icon: faHiking, nombre: 'Aventuras', fecha: '2023-02-20', monto: 110 },
  ];

  const subtotales = {};
  egresos.forEach((egreso) => {
    const categoria = egreso.nombre;
    subtotales[categoria] = (subtotales[categoria] || 0) + egreso.monto;
  });

  const totalEgresos = egresos.reduce((total, egreso) => total + egreso.monto, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-red-500 mb-6 hover:text-red-700">Egresos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {egresos.map((egreso) => (
          <div key={egreso.id} className="bg-red-100 rounded-lg p-4">
            <div className="text-3xl mb-4 text-red-600">
              <FontAwesomeIcon icon={egreso.icon} />
            </div>
            <div>
              <p className="text-lg font-semibold text-red-800">{egreso.nombre}</p>
              <p className="text-sm text-gray-500">{egreso.fecha}</p>
              <p className="text-lg text-red-800">Monto: ${egreso.monto}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-4">
        <div className="bg-red-500 rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-white">Subtotales por Categoría</h2>
          <ul className="text-lg">
            {Object.entries(subtotales).map(([categoria, subtotal]) => (
              <li key={categoria} className="flex justify-between items-center py-2">
                <span className="text-gray-200">{categoria}:</span>
                <span className="text-red-200">${subtotal}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-700 rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-white">Total de Egresos</h2>
          <p className="text-3xl text-gray-300">Total: ${totalEgresos}</p>
        </div>
      </div>
    </div>
  );
};

export default EgresosView;
