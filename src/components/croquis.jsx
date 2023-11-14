import { useState} from "react";
import Croquis from "../img/imagenesCRoquis/croquis.png";
import Rapel from "../img/imagenesCRoquis/rapeling.png";
import Restaurant from "../img/imagenesCRoquis/restaurant.png";
import Inicio from "../img/imagenesCRoquis/inicioCroquis2.png";
import Cabañas from "../img/imagenesCRoquis/cabañasCro.png";

const CroquisComponent = ({mostrar}) => {
  const [openHome, setOpenHome] = useState(false);
  const openModal = () => {
    setOpenHome(true);
  };

  const closeModal = () => {
    setOpenHome(false);
  };

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
          alt="Inicio"
          onClick={openModal}
          className="absolute bottom-40 left-32 w-24  rounded-lg cursor-pointer  transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${openHome ? '' : 'hidden'}`}>
  <div className="bg-white p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-center">Bienvenido</h2>
    <p className="text-center">
Estas listo para iniciar la aventura?    </p>
    <ul className=" ml-6 mt-4">
      <li>Dirigete a uno de nuestros guias</li>
      <li>Usa el lector de QR que proporciona la aplicacion</li>
      <li>Diviertete y gana Recompensas en el camino</li>
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
