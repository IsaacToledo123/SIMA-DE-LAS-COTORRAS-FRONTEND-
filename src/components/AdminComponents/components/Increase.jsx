import { useState } from "react";
import ModalMeta from "./ModalMeta";

const ingresosData = [
  {
    id: 1,
    category: "Restaurante",
    price: 2999,
  },
  {
    id: 2,
    category: "Transporte",
    price: 1999,
  },
  {
    id: 3,
    category: "Aventuras",
    price: 99,
  },
];

const reservacionData = [
  { id: 1, name: "Carlos Sánchez", date: "27/07/2023", amount: 1500 },
  { id: 2, name: "Ana Torres", date: "28/07/2023", amount: 2000 },
  { id: 3, name: "Juan Ramírez", date: "29/07/2023", amount: 1800 },
  { id: 4, name: "María Gómez", date: "30/07/2023", amount: 2100 },
  { id: 5, name: "Luis González", date: "31/07/2023", amount: 1700 },
  { id: 6, name: "Laura Pérez", date: "01/08/2023", amount: 2400 },
  { id: 7, name: "Pedro Hernández", date: "02/08/2023", amount: 1950 },
  { id: 8, name: "Sara Ramírez", date: "03/08/2023", amount: 1850 },
  { id: 9, name: "Daniel Torres", date: "04/08/2023", amount: 2300 },
];

const TablaIngresosYReservaciones = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalFields, setModalFields] = useState([]);

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
      ingreso: {
        title: "Agregar Ingreso",
        fields: [
          { name: "monto", label: "Monto", type: "number" },
          {
            name: "categoria",
            label: "Categoría",
            type: "select",
            options: ["Restaurante", "Transporte", "Hospedaje", "Aventuras"],
          },
          { name: "descripcion", label: "Descripción", type: "text"}
        ],
      },
    };

    const action = actionMap[type];
    
    openModal(type, action.title, action.fields);
  };

  const totalIncomes = ingresosData.reduce(
    (total, income) => total + income.price,
    0
  );

  const handleAddIncome = () => {    
    handleButtonClick("ingreso"); // Abre el modal para agregar ingreso
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAgregar = (formData) => {

    console.log("Vamos a agregar un nuevo ingreso")
    // Agregar la nueva entrada a los datos existentes
    const newIncome = {
      id: ingresosData.length + 1,
      category: formData.categoria,
      price: Number(formData.monto),
    };
    ingresosData.push(newIncome);
    // Cerrar el modal después de agregar
    setShowModal(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <button
        onClick={handleAddIncome}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
      >
        Agregar Ingreso
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="p-4">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">
            Ingresos por Categorías
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
            </tr>
          </thead>
          <tbody>
            {ingresosData.map((income) => (
              <tr
                key={income.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {income.category}
                </td>
                <td className="px-6 py-4">{`$${income.price}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-4 rounded-md">
        <h2 className="text-gray-500 text-lg font-semibold pb-4">
          Ingresos en Reservaciones en Línea
        </h2>
        <div className="my-1"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Nombre
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Fecha
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">
                Monto
              </th>
            </tr>
          </thead>
          <tbody>
            {reservacionData.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-grey-lighter">
                <td className="py-2 px-4 border-b border-grey-light">
                  {reservation.name}
                </td>
                <td className="py-2 px-4 border-b border-grey-light">
                  {reservation.date}
                </td>
                <td className="py-2 px-4 border-b border-grey-light text-right">{`$${reservation.amount}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded-md shadow-md">
        <p className="text-lg font-semibold text-white dark:text-gray-300">
          Total de Ingresos: ${totalIncomes}
        </p>
      </div>

      {showModal && (
        <ModalMeta
          isOpen={showModal}
          onClose={handleCloseModal}
          title={modalTitle}
          fields={modalFields}
          onAgregar={handleAgregar}
        />        
      )}
    </div>
  );
};

export default TablaIngresosYReservaciones;
