import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import ModalMeta from './ModalMeta';

const EgresosOption = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const egresosCampos = [
    {
      name: 'nombreServicio',
      label: 'Nombre del Servicio',
      type: 'text',
    },
    {
      name: 'monto',
      label: 'Monto',
      type: 'text',
    },
    {
      name: 'categoria',
      label: 'Categoría',
      type: 'text',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faMoneyBillAlt} size="3x" />
      </div>
      <button
        className="mt-2 text-red-600 font-bold cursor-pointer"
        onClick={openModal}
      >
        Agregar Egreso
      </button>
      {showModal && (
        <ModalMeta
          isOpen={showModal}
          onClose={closeModal}
          title="Agregar Egreso"
          fields={egresosCampos}
        />
      )}
    </div>
  );
};

export default EgresosOption;


