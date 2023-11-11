import React from 'react';
import Croquis from '../img/fotografias_cabaña/croquis.png';

const CroquisComponent = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-xl mx-4">
        <img src={Croquis} alt="Croquis" className="w-full h-auto rounded-lg" />
        {/* Aquí puedes agregar contenido adicional si es necesario */}
      </div>
    </div>
  );
};

export default CroquisComponent;
