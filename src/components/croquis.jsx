import React from 'react';
import Croquis from '../img/imagenesCRoquis/croquis.png'
import Rapel from '../img/imagenesCRoquis/rapel.jpg'
const CroquisComponent = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
    <div className="max-w-xl mx-4 relative">
      <img src={Croquis} alt="Croquis" className="w-full h-auto rounded-lg" />
      <img src={Rapel} alt="Rapel" className="absolute top-80 right-44 w-16 rounded-lg cursor-pointer hover:shadow-2xl " />

    </div>
  </div>
  );
};

export default CroquisComponent;
