import { useState, useEffect } from "react";
import CroquisComponent from "./croquis";
import FondoMapa from "../img/imagenesCRoquis/fondoMapa.png";
import Rapel from "../img/imagenesCRoquis/rapel.jpg";
import Restaurant from "../img/imagenesCRoquis/local.png";
import LogoEmpresa from "../img/logoP.png";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
const Ubicacion = () => {
  const [openHome, setOpenHome] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [openRestaurant, setOpenRestaurant] = useState(null);
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
  const openModal = (reserva) => {
    setOpenHome(reserva);
  };

  const closeModal = () => {
    setOpenHome(null);
  };

  const validateScanResult = (result) => {
    if (result === "https://me-qr.com/B8DcIIIM") {
      setOpenRapel(false);
      setScanResult("Rapel visitado Felicidades")
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex p-10">
        {/* Componente Izquierdo */}
        <div className="w-1/4 m-0 ">
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

        {/* Componente Central (CroquisComponent) */}
        <div className="flex-1">
          <CroquisComponent mostrar={openRapel} />
        </div>

        {/* Componente Derecho */}
        <div className="w-1/4">
          <div>
            <img src={LogoEmpresa} width="300px" />
          </div>

          <div className="flex flex-col p-10">
            <div className="flex pb-5">
              <img src={Rapel} className="w-10" />
              <h1
                className="text-2xl pl-5 opacity-80 cursor-pointer hover:text-yellow-200"
                onClick={() => openModal(1)}
              >
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
              <img src={Rapel} className="w-10" />
              <h1 className="text-2xl pl-5 opacity-80 cursor-pointer hover:text-yellow-200">
                <a href="/reservas">Cabañas</a>
              </h1>
            </div>
            <div className="flex pb-5">
              <img src={Rapel} className="w-10" />
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

        {openHome && (
          <div>
            <div></div>
          </div>
        )}
    </div>
  );
};

export default Ubicacion;
