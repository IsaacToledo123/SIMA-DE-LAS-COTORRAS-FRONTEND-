import { useState } from "react";
import Croquis from "../img/imagenesCRoquis/croquis.png";
import Rapel from "../img/imagenesCRoquis/rapeling.png";
import Restaurant from "../img/imagenesCRoquis/restaurant.png";
import Inicio from "../img/imagenesCRoquis/inicioCroquis2.png";
import Cabañas from "../img/imagenesCRoquis/cabañasCro.png";

const CroquisComponent = ({ mostrar, restaurant }) => {
  const [openHome, setOpenHome] = useState(false);

  const openModal = () => {
    setOpenHome(true);
  };

  const closeModal = () => {
    setOpenHome(false);
  };

  return (
    <div className="relative flex items-center justify-center ">
      <div className="max-w-full mx-4 relative">
        <img src={Croquis} alt="Croquis" className="w-full h-auto rounded-lg" />

        <>
          {mostrar && (
            <img
              src={Rapel}
              alt="Rapel"
              className="absolute bottom-10 md:bottom-16 right-10 md:right-60 w-12 md:w-16 rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          )}
          {restaurant && (
            <img
              src={Restaurant}
              alt="Restaurant"
              className="absolute top-32 md:top-48 right-6 md:right-32 w-12 md:w-16 rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          )}

          <img
            src={Cabañas}
            alt="Cabañas"
            className="absolute top-4 md:top-10 right-20 md:right-48 w-12 md:w-16 rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <img
            src={Inicio}
            alt="Inicio"
            onClick={openModal}
            className="absolute bottom-20 md:bottom-40 left-6 md:left-32 w-16 md:w-24 rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          openHome ? "" : "hidden"
        }`}
      >
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Bienvenido</h2>
          <p className="text-center">¿Estás listo para iniciar la aventura?</p>
          <ul className="ml-6 mt-4">
            <li>Dirígete a uno de nuestros guías</li>
            <li>Usa el lector de QR que proporciona la aplicación</li>
            <li>Diviértete y gana recompensas en el camino</li>
          </ul>
          <div className="mt-6 text-center">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CroquisComponent;
