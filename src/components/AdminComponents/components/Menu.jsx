/*import React from 'react';
import Graficas from '../../../img/graficas.png';
import Egresos from '../../../img/egresos.png';
import Ingresos from '../../../img/ingresos.png';
import Metas from '../../../img/metas.png';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMoneyBillAlt, faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons';

const ColoredSections = () => {
  return (
    <div className="flex flex-col  h-screen bg-gray-700 ">
      <div className="h-1/3 bg-red-400 mb-3 mt-3 rounded-lg flex items-center">
        <div className="w-1/3 p-4">
            <FontAwesomeIcon icon={faChartBar} className="text-8xl text-white" />
        </div>
        <div className="w-2/3 h-full bg-red-600 p-4 rounded-xl">
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl p-2">Gráficas</h1>
            <p className='text-2xl pb-5'>Lleva el control de todas tus finanzas</p>
            <button className='bg-gray-200 p-2 px-5 rounded-lg'><a href="/admin/Graficas">IR</a> </button>
          </div>
        </div>
      </div>

      <div className="h-1/3 bg-blue-400 mb-3 mt-3 rounded-lg flex items-center">
        <div className="w-1/3 p-4">
            <FontAwesomeIcon icon={faMoneyBillAlt} className="text-8xl text-white" />
        </div>
        <div className="w-2/3 h-full bg-blue-600 p-4 rounded-xl">
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl p-2">Ingresos</h1>
            <p className='text-2xl pb-5'>Controla todos los ingresos de la empresa</p>
            <button className='bg-gray-200 p-2 px-5 rounded-lg'><a href="/admin/paginaIngresos">IR</a> </button>
          </div>
        </div>
      </div>

      <div className="h-1/3 bg-green-400 mb-3 mt-3 rounded-lg flex items-center">
        <div className="w-1/3 p-4">
            <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-8xl text-white" />
        </div>
        <div className="w-2/3 h-full bg-green-600 p-4 rounded-xl">
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl p-2">Egreso</h1>
            <p className='text-2xl pb-5'>Evita perdidas de dinero</p>
            <button className='bg-gray-200 p-2 px-5 rounded-lg'><a href="/admin/paginaEgresos">IR</a> </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ColoredSections;
