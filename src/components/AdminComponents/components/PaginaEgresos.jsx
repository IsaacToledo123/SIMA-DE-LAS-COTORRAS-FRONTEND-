import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHome, faShoppingCart, faBriefcase, faHiking, faCoins } from '@fortawesome/free-solid-svg-icons';

const EgresosView = () => {
  const egresos = [
    { id: 2, icon: faCar, nombre: 'Transporte', fecha: '2023-01-20', monto: 50 },
    { id: 3, icon: faHome, nombre: 'Alquiler', fecha: '2023-02-01', monto: 700 },
    { id: 4, icon: faShoppingCart, nombre: 'Compras', fecha: '2023-02-10', monto: 150 },
    { id: 5, icon: faBriefcase, nombre: 'Trabajadores', fecha: '2023-02-15', monto: 45 },
    { id: 6, icon: faHiking, nombre: 'Aventuras', fecha: '2023-02-20', monto: 110 },
  ];

  const subtotales = {};
  egresos.forEach((egreso) => {
    const categoria = egreso.nombre;
    subtotales[categoria] = subtotales[categoria] || { total: 0, fechas: [] };
    subtotales[categoria].total += egreso.monto;
    subtotales[categoria].fechas.push(egreso.fecha);
  });

  const totalEgresos = egresos.reduce((total, egreso) => total + egreso.monto, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-purple-600 mb-6">Egresos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {egresos.map((egreso) => (
          <div key={egreso.id} className="bg-purple-100 rounded-lg p-4">
            <div className="text-3xl mb-4 text-purple-600">
              <FontAwesomeIcon icon={egreso.icon} />
            </div>
            <div>
              <p className="text-lg font-semibold text-purple-800">{egreso.nombre}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mt-8">
        <div className="bg-purple-500 rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Subtotales por Categoría</h2>
          {Object.entries(subtotales).map(([categoria, subtotal]) => (
            <div key={categoria} className="text-gray-700">
              <p className="font-semibold">{categoria}:</p>
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
        <div className="text-center mt-8">
          <div className="bg-purple-200 rounded-lg p-4 inline-block">
            <h2 className="text-xl uppercase font-semibold text-gray-400 flex items-center justify-center mb-2">
              <FontAwesomeIcon icon={faCoins} className="mr-2" />
              Total:
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">${totalEgresos}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EgresosView;


