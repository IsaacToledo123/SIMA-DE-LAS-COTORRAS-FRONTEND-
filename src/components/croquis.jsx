import React from 'react';
import Croquis from '../img/imagenesCRoquis/croquis.png'
import Rapel from '../img/imagenesCRoquis/rapel.jpg'
import Restaurant from '../img/imagenesCRoquis/local.png'
const CroquisComponent = () => {
  return (
    <div className="relative flex items-center justify-center ">
      
    <div className="max-w-xl mx-4 relative">
      <img src={Croquis} alt="Croquis" className="w-full h-auto rounded-lg" />
      <img src={Rapel} alt="Rapel" className="absolute top-80 right-44 w-16 rounded-lg cursor-pointer hover:border-2 hover:border-yellow-500 transform hover:scale-110 transition-transform duration-300 ease-in-out" />
      <img src={Restaurant} alt="Rapel"  className="absolute top-36 right-32 w-16 rounded-lg cursor-pointer hover:border-4 hover:border-yellow-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
 />

    </div>
  </div>
  );
};

export default CroquisComponent;
