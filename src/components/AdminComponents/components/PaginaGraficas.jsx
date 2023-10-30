import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const GraficasView = () => {
  const [chartType, setChartType] = useState('ingresos');

  // Datos de ejemplo para ingresos y egresos
  const datosIngresos = [
    { name: 'Cocina', monto: 500 },
    { name: 'Aventuras', monto: 300 },
    { name: 'Otros', monto: 200 },
  ];

  const datosEgresos = [
    { name: 'Alquiler', monto: 800 },
    { name: 'Compras', monto: 200 },
    { name: 'Otros', monto: 300 },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faChartPie} size="3x" />
      </div>
      <span className="mt-2 text-xl">Gráficas</span>
      <div className="mt-4 space-x-4">
        <button
          className={`${
            chartType === 'ingresos' ? 'bg-green-500' : 'bg-gray-300'
          } text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer`}
          onClick={() => setChartType('ingresos')}
        >
          Ingresos
        </button>
        <button
          className={`${
            chartType === 'egresos' ? 'bg-red-500' : 'bg-gray-300'
          } text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer`}
          onClick={() => setChartType('egresos')}
        >
          Egresos
        </button>
      </div>
      <div className="mt-4" style={{ width: '80%' }}>
        {chartType === 'ingresos' ? (
          <PieChart width={400} height={400}>
            <Pie data={datosIngresos} dataKey="monto" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
              {datosIngresos.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : (
          <BarChart width={400} height={400} data={datosEgresos}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="monto" fill="#82ca9d" />
          </BarChart>
        )}
      </div>
    </div>
  );
};

export default GraficasView;



