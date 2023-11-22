import { useState, useEffect } from "react";
import CroquisComponent from "./croquis";
import Rapel from "../img/imagenesCRoquis/rapeling.png";
import Restaurant from "../img/imagenesCRoquis/restaurant.png";
import Inicio from "../img/imagenesCRoquis/hogar.png";
import Cabañas from "../img/imagenesCRoquis/cabañasCro.png";
import Tirolesa from "../img/imagenesCRoquis/tirolina.png";
import Mirador from "../img/imagenesCRoquis/paisaje.png";


import LogoEmpresa from "../img/logoP.png";
import Swal from "sweetalert2";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import RedirectMAPS from "./RedirectMAPS";
import MapaGoogle from "./mapaGoogle";
const Ubicacion = () => {
  const [scanResult, setScanResult] = useState(null);
  const [openRestaurant, setOpenRestaurant] = useState(true);
  const [openRapel, setOpenRapel] = useState(true);

  const [openTirolesa, setopenTirolesa] = useState(true);
  const [openCabañas, setopenCabañas] = useState(true);
  const [openMirador, setopenMirador] = useState(true);
  const [mapas, setMapas] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 880;

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = width < breakpoint;

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
        if (openRapel == true) {
          setOpenRapel(false);
          Swal.fire("Felicidades Rapel visitado");
        }

        break;
      case "localhost:5173/ubicacion":
        setOpenRestaurant(false);
        Swal.fire("Felicidades Restaurant visitado");
        break;
      case "https://www.tirolesa.com":
        setopenTirolesa(false);
        Swal.fire("Felicidades Tirolesa visitado");
        break;
      case "https://www.Cabañas.com":
        if (openCabañas === true) {
          setopenCabañas(false);
          Swal.fire("Felicidades Cabañas visitado");
        }

        break;
      case "https://www.Mirador.com":
        setopenMirador(false);
        Swal.fire("Felicidades Mirador visitado");
        break;
    }
  };
  
  return (
    <div className="flex flex-col p-10 ">
      <div className="flex flex-col lg:flex-row pb-10">
        <div className="lg:w-1/4 flex justify-center" >
         
          <div className="flex flex-col p-10">
          <div className="">
            <img src={LogoEmpresa} width="300px" />
          </div>

            <div className="pt-10 pb-10">
              <RedirectMAPS />
            </div>
            <div className="flex pb-5">
              <img src={Inicio} className="w-10" />
              <h1 className="text-2xl pl-5 cursor-pointer opacity-80 hover:text-yellow-200">
                <a>Usted inicia aqui</a>
              </h1>
            </div>
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
              <img src={Tirolesa} className="w-10" />
              <h1 className="text-2xl pl-5 cursor-pointer opacity-80 hover:text-yellow-200">
                <a>Tirolesa</a>
              </h1>
            </div>
            <div className="flex pb-10">
              <img src={Mirador} className="w-10" />
              <h1 className="text-2xl pl-5 cursor-pointer opacity-80 hover:text-yellow-200">
                <a>Mirador</a>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex lg:w-24">

        </div>
        <div className="flex lg:w-3/5 flex-col pt-10">
          
          {isMobile ? (
            <MapaGoogle />
          ) : (
            <CroquisComponent
              mostrar={openRapel}
              restaurant={openRestaurant}
              mirador={openMirador}
              tirolesa={openTirolesa}
              cabañas={openCabañas}
            />
          )}
        </div>
      </div>
      {scanResult ? (
        <div>
          succes: <h1>{scanResult}</h1>
        </div>
      ) : (
        <div id="reader">{}</div>
      )}
    </div>
  );
};

export default Ubicacion;
