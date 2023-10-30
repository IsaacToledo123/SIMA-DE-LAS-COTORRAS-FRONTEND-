
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import ModalMeta from './ModalMeta';

const MetaOpcion = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const metaFields = [
    { name: "objetivo", label: "Objetivo", type: "text" },
    { name: "plazo", label: "Plazo", type: "date" },
    { name: "beneficios", label: "Beneficios", type: "text" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faBullseye} size="3x" />
      </div>
      <button className="mt-2 text-red-400 font-bold cursor-pointer" onClick={openModal}>
        Agregar Meta
      </button>
      <ModalMeta isOpen={showModal} onClose={closeModal} title="Agregar Meta" fields={metaFields} />
    </div>
  );
};

export default MetaOpcion;
