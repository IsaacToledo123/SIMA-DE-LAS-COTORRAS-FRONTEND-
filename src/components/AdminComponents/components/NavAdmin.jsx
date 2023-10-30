import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import imagen from '../img/copialogo.png';

const NavAdmin = () => {
  return (
    <div className="bg-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={imagen}
          alt="LogoEmpresa"
          className="w-16 h-16 mr-4"
        />
        <h1 className="text-xl font-semibold text-green-800 uppercase">Sima de las Cotorras</h1>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <button className="text-white">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </button>
        </div>
        <div className="mr-4">
          <button className="text-white">
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
