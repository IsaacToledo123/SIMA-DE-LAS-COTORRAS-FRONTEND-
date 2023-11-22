import { useState, useContext, useEffect } from 'react';
import { AdministradorContext } from '../../../context/AdminContext';
import ModalMeta from './ModalMeta';

const egresosData = [
    {
      id: 1,
      category: 'Transporte',
      price: 500,
    },
    {
      id: 2,
      category: 'Alquiler',
      price: 1200,
    },
    {
      id: 3,
      category: 'Compras',
      price: 800,
    },
];


const TablaEgresos = () => {

  const {egresosOrdenados} = useContext(AdministradorContext);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalFields, setModalFields] = useState([]);
  const [sumaTotal, setSumaTotal] = useState(0);

  useEffect(() => {

    const suma = egresosOrdenados.reduce((acumulador, elemento) => acumulador + Number(elemento.monto), 0);

    setSumaTotal(suma);

  }, []);

  const openModal = (type, title, fields) => {
    setModalType(type);
    setModalTitle(title);
    setModalFields(fields);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (type) => {
    const actionMap = {
      egreso: {
        title: 'Agregar Egreso',
        fields: [
          { name: 'monto', label: 'Monto', type: 'number' },
          {
            name: 'categoria',
            label: 'Categoría',
            type: 'select',
            options: ['Transporte', 'Alquiler', 'Compras', 'Trabajadores', 'Aventuras', 'Mantenimiento'],
          },
          { name: "descripcion", label: "Descripción", type: "text"}
        ],
      },
    };

    const action = actionMap[type];
    openModal(type, action.title, action.fields);
  };

  const totalEgresos = egresosData.reduce((total, egreso) => total + egreso.price, 0);

  const handleAddEgreso = () => {
    handleButtonClick('egreso'); // Abre el modal para agregar egreso
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAgregarEgreso = (formData) => {
    // Agregar la nueva entrada a los datos existentes
    console.log("Aquí vamos a agregar un nuevo egreso")
    console.log(formData)
    const newEgreso = {
      id: egresosData.length + 1,
      category: formData.categoria,
      price: Number(formData.monto),
    };
    egresosData.push(newEgreso);
    // Cerrar el modal después de agregar
    setShowModal(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <button
        onClick={handleAddEgreso}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
      >
        Agregar Egreso
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="p-4">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">
            Egresos por Categorías
          </h2>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Categoría
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            {egresosOrdenados.map((egreso) => (
              <tr
                key={egreso.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                title={egreso.descripcion}
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {egreso.categoria}
                </td>
                <td className="px-6 py-4">{`$${egreso.monto}`}</td>
                <td className="px-6 py-4">{`${egreso.fecha}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded-md shadow-md">
        <p className="text-lg font-semibold text-white dark:text-gray-300">
          Total de Egresos: ${sumaTotal}
        </p>
      </div>

      {showModal && (
        <ModalMeta
          isOpen={showModal}
          onClose={handleCloseModal}
          title={modalTitle}
          fields={modalFields}
          onAgregar={handleAgregarEgreso}
        />
      )}
    </div>
  );
};

export default TablaEgresos;
