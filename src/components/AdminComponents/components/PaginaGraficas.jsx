import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { useState, useEffect, useContext } from 'react';
import { AdministradorContext } from '../../../context/AdminContext';

const GraficosSeccionados = () => {

  const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

  const { agrupadosPorCategoria, egresosAgrupadosPorCategoria, aventurasAgrupadoSemana, cabañasAgrupadoSemana } = useContext(AdministradorContext);

  const dataEgresosCategorias = [
    { name: 'Compras', value: 1000 },
    { name: 'Alquiler', value: 2000 },
    { name: 'Trabajadores', value: 1500 },
  ];

  const dataEgresosDia = [
    { name: 'Transporte', value: 200 },
    { name: 'Alquiler', value: 150 },
    { name: 'Compras', value: 300 },
    { name: 'Trabajadores', value: 250 },
    { name: 'Aventura', value: 180 },
  ];

  const dataEgresoMayorFlujo = [
    { name: 'Transporte', value: 500 },
    { name: 'Trabjadores', value: 800 },
  ];

  const dataReservas = [
    { name: 'Reserva 1', value: 500 },
    { name: 'Reserva 2', value: 800 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <h1 className="text-4xl uppercase font-bold text-indigo-700 text-center mb-4">
          Gráficas
        </h1>
      </div>

      {[
        { data: aventurasAgrupadoSemana, title: 'Reservaciones de aventuras', chartType: 'pie' },
        { data: egresosAgrupadosPorCategoria, title: 'Egresos por semana', chartType: 'bar' },
        { data: cabañasAgrupadoSemana, title: 'Reservaciones de hospedaje', chartType: 'pie' },
        { data: agrupadosPorCategoria, title: 'Ingresos por semana', chartType: 'bar' },
        // { data: dataReservas, title: 'Reservas en línea', chartType: 'pie' },
        // { data: dataEgresosDia, title: 'Egresos por semana', chartType: 'bar' },
      ].map((chart, index) => (
        <div key={index} className="border p-4 rounded-lg bg-white">
          <h2 className="text-xl font-semibold mb-4">{chart.title}</h2>
          {chart.chartType === 'pie' ? (
            <PieChart width={600} height={400}>
              <Pie dataKey="value" data={chart.data} cx="50%" cy="50%" outerRadius={80} label fill="#8884d8">
                {chart.data.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={getRandomColor()} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          ) : (
            <BarChart width={600} height={400} data={chart.data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill={getRandomColor()} />
            </BarChart>
          )}
        </div>
      ))}
    </div>
  );
};

export default GraficosSeccionados;
