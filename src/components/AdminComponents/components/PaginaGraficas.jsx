import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const GraficosSeccionados = () => {

  // Datos de ejemplo
  const dataEgresosCategorias = [
    { name: 'Categoría 1', value: 1000 },
    { name: 'Categoría 2', value: 2000 },
    { name: 'Categoría 3', value: 1500 },
  ];

  const dataEgresosDia = [
    { name: 'Enero', value: 200 },
    { name: 'Febrero', value: 150 },
    { name: 'Marzo', value: 300 },
    { name: 'Abril', value: 250 },
    { name: 'Mayo', value: 180 },
  ];

  const dataEgresoMayorFlujo = [
    { name: 'Egreso 1', value: 500 },
    { name: 'Egreso 2', value: 800 },
  ];

  const dataIngresos = [
    { name: 'Enero', value: 2000 },
    { name: 'Febrero', value: 1500 },
    { name: 'Marzo', value: 3000 },
    { name: 'Abril', value: 2500 },
    { name: 'Mayo', value: 1800 },
  ];

  const dataReservas = [
    { name: 'Reserva 1', value: 500 },
    { name: 'Reserva 2', value: 800 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <h1 className="text-4xl uppercase font-bold text-indigo-700 text-center mb-4">
          RESERVAS
        </h1>
      </div>

      <div className="border p-4 rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Egresos por Categorías</h2>
        <PieChart width={400} height={300}>
          <Pie dataKey="value" data={dataEgresosCategorias} cx="50%" cy="50%" outerRadius={80} fill="#6495ED" label />
          <Tooltip />
        </PieChart>
      </div>

      <div className="border p-4 rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Egresos al Día</h2>
        <BarChart width={400} height={300} data={dataEgresosDia}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#00008B" />
        </BarChart>
      </div>

      <div className="border p-4 rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Egreso con Mayor Flujo</h2>
        <PieChart width={400} height={300}>
          <Pie dataKey="value" data={dataEgresoMayorFlujo} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </div>

      <div className="border p-4 rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Ingresos</h2>
        <BarChart width={400} height={300} data={dataIngresos}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8B008B" />
        </BarChart>
      </div>

      <div className="border p-4 rounded-lg bg-white">
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-xl font-semibold mb-4">Reservas</h2>
          <PieChart width={400} height={300}>
          <Pie dataKey="value" data={dataReservas} cx="50%" cy="50%" outerRadius={80} fill="#5F9EA0" label />
          <Tooltip />
        </PieChart>
        </div>
      </div>

      <div className="border p-4 rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Egresos al Día</h2>
        <BarChart width={400} height={300} data={dataEgresosDia}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#ADD8E6" />
        </BarChart>
      </div>
    </div>
  );
};

export default GraficosSeccionados;



