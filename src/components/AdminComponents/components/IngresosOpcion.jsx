
/*import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import ModalMeta from './ModalMeta';

const IngresosOption = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const ingresosCampos = [
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
      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faDollarSign} size="2x" />
      </div>
      <button
        className="mt-2 text-green-600 font-bold cursor-pointer"
        onClick={openModal}
      >
        Agregar Ingreso
      </button>
      {showModal && (
        <ModalMeta
          isOpen={showModal}
          onClose={closeModal}
          title="Agregar Ingreso"
          fields={ingresosCampos}
        />
      )}
    </div>
  );
};

export default IngresosOption;*/

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import ModalMeta from './ModalMeta';

const IngresosOption = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const ingresosCampos = [
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
      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faDollarSign} size="3x" />
      </div>
      <button
        className="mt-2 font-semibold text-green-700 cursor-pointer"
        onClick={openModal}
      >
        Agregar Ingreso
      </button>
      {showModal && (
        <ModalMeta
          isOpen={showModal}
          onClose={closeModal}
          title="Agregar Ingreso"
          fields={ingresosCampos}
        />
      )}
    </div>
  );
};

export default IngresosOption;