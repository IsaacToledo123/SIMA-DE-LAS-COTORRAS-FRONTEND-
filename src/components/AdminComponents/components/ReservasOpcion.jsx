/*import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ReservasOption = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </div>
      <span className="mt-2">Agregar</span>
    </div>
  );
};

export default ReservasOption;*/


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ReservasOption = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
      </div>
      <button className="mt-2 text-green-500 font-bold cursor-pointer">
        Reservas
      </button>
      
    </div>
  );
};

export default ReservasOption;

