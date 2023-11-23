import { useState } from "react";
import Croquis from "../img/imagenesCRoquis/nuevoDei.png";
import Rapel from "../img/imagenesCRoquis/rapeling.png";
import Restaurant from "../img/imagenesCRoquis/restaurant.png";
import Inicio from "../img/imagenesCRoquis/hogar.png";
import Cabañas from "../img/imagenesCRoquis/cabañasCro.png";
import Tirolesa from "../img/imagenesCRoquis/tirolina.png";
import Mirador from "../img/imagenesCRoquis/paisaje.png";

const CroquisComponent = ({
  mostrar,
  restaurant,
  tirolesa,
  cabañas,
  mirador,
}) => {
  const [openHome, setOpenHome] = useState(false);
  const [url, setUrl] = useState(null);
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
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                "16.807769944625164, -93.47504349365884"
              )}`}
            >
              <img
                src={Rapel}
                alt="Rapel"
                className="absolute bottom-10 md:bottom-60 right-4 md:right-64 w-12 md:w-20 rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse"
              />
            </a>
          )}
          {restaurant && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                "16.80710384584042, -93.47489094383528"
              )}`}
            >
              <img
                src={Restaurant}
                alt="Restaurant"
                className="absolute top-48 right-40 w-20  rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse"
              />
            </a>
          )}
          {cabañas && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                "16.806546235973663, -93.47387897624012"
              )}`}
            >
              <img
                src={Cabañas}
                alt="Cabañas"
                className="absolute top-2 right-56  w-20  rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse"
              />
            </a>
          )}
          {tirolesa && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                "16.808159651260574, -93.47540601714782"
              )}`}
            >
              <img
                src={Tirolesa}
                alt="Tirolesa"
                className="absolute bottom-20 right-10 md:right-72 w-20  rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse"
              />
            </a>
          )}

          {mirador && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                "16.807936299999998, -93.47453564662692"
              )}`}
            >
              <img
                src={Mirador}
                alt="Mirador"
                className="absolute bottom-72 left-48 w-20 rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse"
              />
            </a>
          )}

          <img
            src={Inicio}
            alt="Inicio"
            onClick={openModal}
            className="absolute bottom-60 left-24  w-20 rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse"
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
