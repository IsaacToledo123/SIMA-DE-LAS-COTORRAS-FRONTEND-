import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

const GraficasOption = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faChartPie} size="3x" />
        </div>
        <span className="mt-2">Gráficas</span>
      </div>
    );
  };  

export default GraficasOption;
