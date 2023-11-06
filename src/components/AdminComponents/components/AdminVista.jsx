import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faMoneyBillAlt,
  faChartPie,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import ModalMeta from "./ModalMeta";

const AdminVista = () => {
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
          {
            name: "nombreServicio",
            label: "Nombre del Servicio",
            type: "text",
          },
          { name: "monto", label: "Monto", type: "text" },
          { name: "categoria", label: "Categoría", type: "text" },
        ],
      },
      "ver-ingresos": {
        title: "Ver Ingresos",
        fields: [],
      },
      reservas: {
        title: "Reservas",
        fields: [],
      },
      egreso: {
        title: "Agregar Egreso",
        fields: [
          {
            name: "nombreServicio",
            label: "Nombre del Servicio",
            type: "text",
          },
          { name: "monto", label: "Monto", type: "text" },
          { name: "categoria", label: "Categoría", type: "text" },
        ],
      },
      "ver-egresos": {
        title: "Ver Egresos",
        fields: [],
      },
      graficas: {
        title: "Ver Gráficas",
        fields: [],
      },
    };

    const action = actionMap[type];
    openModal(type, action.title, action.fields);
  };

  /*const [ingresosTotales, setIngresosTotales] = useState(0);

  useEffect(() => {
    const fetchIngresosTotales = async () => {
      try {
        const response = await axios.get('/api/ingresos/total'); // Ruta del backend
        setIngresosTotales(response.data.total);
      } catch (error) {
        console.error('Error fetching ingresos totales:', error);
      }
    };

    fetchIngresosTotales();
  }, []); ESTO SERA EN EL CASO CUANDO SE OBTENGA LOS DATOS DE INGRESOS TOTALES DESDE LA BASE DE DATOS*/

  const ingresosTotales = 5000;

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-lime-300 p-4 rounded-lg mb-8">
        <div className="flex items-center">
          <div className="mr-2">
            <FontAwesomeIcon icon={faDollarSign} size="2x" />
          </div>
          <div className="font-lato text-3xl font-bold uppercase">
            Ingresos totales:
          </div>
        </div>
        <div className="font-lato uppercase text-4xl text-green-800 tracking-wider">{`$${ingresosTotales}`}</div>
      </div>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center" key="ingreso">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-6xl mb-4">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <button
            className="font-lato uppercase text-gray-500 font-bold cursor-pointer text-xl"
            onClick={() => handleButtonClick("ingreso")}
          >
            Agregar Ingreso
          </button>
          <button className="font-lato uppercase text-gray-500 font-bold cursor-pointer text-xl">
            Ver Ingreso
          </button>
        </div>
        <div className="flex flex-col items-center" key="egresos">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-6xl mb-4">
            <FontAwesomeIcon icon={faMoneyBillAlt} />
          </div>
          <button
            className="font-lato uppercase text-gray-500 font-bold cursor-pointer text-xl"
            onClick={() => handleButtonClick("egreso")}
          >
            Agregar Egresos
          </button>
          <button
            className="font-lato uppercase text-gray-500 font-bold cursor-pointer text-xl"
            onClick={() => handleButtonClick("ver-egresos")} 
          >
            Ver Egresos
          </button>
        </div>
        <div className="flex flex-col items-center" key="reservas">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-6xl mb-4">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <button
            className="font-lato uppercase text-gray-500 font-bold cursor-pointer text-xl"
            onClick={() => handleButtonClick("reservas")}
          >
            Reservas
          </button>
        </div>
        <div className="flex flex-col items-center" key="graficas">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-6xl mb-4">
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <button
            className="font-lato uppercase text-gray-500 font-bold cursor-pointer text-xl"
            onClick={() => handleButtonClick("graficas")}
          >
            Gráficas
          </button>
        </div>
      </div>
      {showModal && (
        <ModalMeta
          isOpen={showModal}
          onClose={closeModal}
          title={modalTitle}
          fields={modalFields}
        />
      )}
    </div>
  );
};

export default AdminVista;
