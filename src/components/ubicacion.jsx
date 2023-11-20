import { useState, useEffect } from "react";
import CroquisComponent from "./croquis";
import FondoMapa from "../img/imagenesCRoquis/fondoMapa.png";
import Rapel from "../img/imagenesCRoquis/rapeling.png";
import Restaurant from "../img/imagenesCRoquis/restaurant.png";
import Inicio from "../img/imagenesCRoquis/inicioCroquis2.png";
import Cabañas from "../img/imagenesCRoquis/cabañasCro.png";
import LogoEmpresa from "../img/logoP.png";
import Swal from "sweetalert2";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import RedirectMAPS from './RedirectMAPS'
const Ubicacion = () => {
  const [scanResult, setScanResult] = useState(null);
  const [openRestaurant, setOpenRestaurant] = useState(true);
  const [openRapel, setOpenRapel] = useState(true);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      if (result) {
        validateScanResult(result);
      }
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  const validateScanResult = (result) => {
    switch (result) {
      case "https://me-qr.com/yTHDxyJB":
        setOpenRapel(false);

        Swal.fire("Felicidades Rapel visitado");
        break;
      case "localhost:5173/ubicacion":
        setOpenRestaurant(false);
        Swal.fire("Felicidades Restaurant visitado");
        break;
        case "localhost:5173/reservas":
          setOpenRestaurant(false);
          Swal.fire("Felicidades Restaurant visitado");
          break;
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex lg:flex-row">
        <div className="lg:w-1/4 lg:m-0">
          <div className="text-2xl font-semibold flex flex-col text-center">
            <h1 className="">La sima de las cotorras</h1>
            <h2>Mapa turístico</h2>
          </div>
          <p className="text-justify text-2xl p-10 opacity-80">
            La Sima de las Cotorras es un fascinante destino turístico que
            combina la emoción de la naturaleza con comodidades modernas.
            Situada en un entorno natural impresionante, esta joya mexicana
            ofrece una experiencia única para los visitantes en busca de
            aventuras auténticas y relajación.
          </p>
        </div>

        <div className="flex-1 flex-col">
          <div className="p-2">
          <RedirectMAPS/>

          </div>
          <CroquisComponent mostrar={openRapel} restaurant={openRestaurant} />
        </div>

        <div className="lg:w-1/4">
          <div>
            <img src={LogoEmpresa} width="300px" />
          </div>

          <div className="flex flex-col p-10">
            <div className="flex pb-5">
              <img src={Rapel} className="w-10" />
              <h1 className="text-2xl pl-5 opacity-80 cursor-pointer hover:text-yellow-200">
                Rapel
              </h1>
            </div>
            <div className="flex pb-5">
              <img src={Restaurant} className="w-10" />
              <h1 className="text-2xl pl-5 cursor-pointer hover:text-yellow-200 opacity-80">
                Restaurant
              </h1>
            </div>
            <div className="flex pb-5">
              <img src={Cabañas} className="w-10" />
              <h1 className="text-2xl pl-5 opacity-80 cursor-pointer hover:text-yellow-200">
                <a href="/reservas">Cabañas</a>
              </h1>
            </div>
            <div className="flex pb-5">
              <img src={Inicio} className="w-10" />
              <h1 className="text-2xl pl-5 cursor-pointer opacity-80 hover:text-yellow-200">
                <a>Usted esta aqui</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {scanResult ? (
        <div>
          succes: <h1>{scanResult}</h1>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
};

export default Ubicacion;
