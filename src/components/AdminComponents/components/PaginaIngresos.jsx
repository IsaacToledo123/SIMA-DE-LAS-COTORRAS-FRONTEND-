import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCar, faHome, faHiking, faWallet } from '@fortawesome/free-solid-svg-icons';

const IngresosView = () => {
  const ingresos = [
    { id: 1, icon: faUtensils, nombre: 'Restaurante', fecha: '2023-01-15', monto: 50 },
    { id: 2, icon: faCar, nombre: 'Transporte', fecha: '2023-01-20', monto: 30 },
    { id: 3, icon: faHome, nombre: 'Aventura', fecha: '2023-02-01', monto: 800 },
    { id: 6, icon: faHiking, nombre: 'Cabañas', fecha: '2023-02-20', monto: 120 },
  ];

  const subtotales = {};
  ingresos.forEach((ingreso) => {
    const categoria = ingreso.nombre;
    subtotales[categoria] = subtotales[categoria] || { total: 0, fechas: [] };
    subtotales[categoria].total += ingreso.monto;
    subtotales[categoria].fechas.push(ingreso.fecha);
  });

  const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-blue-600 mb-6">Ingresos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ingresos.map((ingreso) => (
          <div key={ingreso.id} className="bg-blue-100 rounded-lg p-4">
            <div className="text-3xl mb-4 text-blue-600">
              <FontAwesomeIcon icon={ingreso.icon} />
            </div>
            <div>
              <p className="text-lg font-semibold text-blue-800">{ingreso.nombre}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-500 rounded-lg p-4 mt-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Subtotales por Categoría</h2>
        <div className="text-white">
          {Object.entries(subtotales).map(([categoria, subtotal]) => (
            <div key={categoria} className="py-2">
              <p className="text-blue-800 font-semibold">{categoria}</p>
              <table className="w-full text-sm">
                <tbody>
                  {subtotal.fechas.map((fecha, index) => (
                    <tr key={index} className="border-b border-gray-400">
                      <td className="py-2">{fecha}</td>
                      <td className="text-right py-2">${subtotal.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <div className="bg-indigo-200 rounded-lg p-8 inline-block">
          <h2 className="text-xl uppercase font-semibold text-gray-400 flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faWallet} className="mr-2" />
            Total:
          </h2>
          <p className="text-2xl text-gray-600 font-semibold">${totalIngresos}</p>
        </div>
      </div>
    </div>
  );
};

export default IngresosView;




