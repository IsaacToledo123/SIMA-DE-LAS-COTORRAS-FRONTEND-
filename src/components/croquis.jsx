import React from "react";
import Croquis from "../img/imagenesCRoquis/croquis.png";
import Rapel from "../img/imagenesCRoquis/rapeling.png";
import Restaurant from "../img/imagenesCRoquis/restaurant.png";
import Inicio from "../img/imagenesCRoquis/inicioCroquis2.png";
import Cabañas from "../img/imagenesCRoquis/cabañasCro.png";

const CroquisComponent = ({mostrar}) => {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="max-w-2xl mx-4 relative">
        <img src={Croquis} alt="Croquis" className="w-full h-auto rounded-lg" />
        {mostrar && (
          <img
            src={Rapel}
            alt="Rapel"
            className="absolute bottom-16 right-60 w-16 rounded-lg cursor-pointer  transform hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        )}

        <img
          src={Restaurant}
          alt="Rapel"
          className="absolute top-48 right-32 w-16 rounded-lg cursor-pointer  transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <img
          src={Cabañas}
          alt="Rapel"
          className="absolute top-10 right-48 w-16 rounded-lg cursor-pointer  transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <img
          src={Inicio}
          alt="Rapel"
          className="absolute bottom-40 left-32 w-24  rounded-lg cursor-pointer  transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default CroquisComponent;
