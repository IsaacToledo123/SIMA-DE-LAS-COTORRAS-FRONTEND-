import React from "react";
import ImagenPrincipal from "../img/img1.png";
import ImagenSecundaria from "../img/img2.png";
import Cabañas from "../img/cabañas1.png";
import Añadir from "../img/añadir.png";
import Aventura from "../img/aventura.png";
const Reservas = () => {
  return (
    <>
      <div class="bg-gray-200 p-20 text-center">
        <h1 class="capitalize md:uppercase text-5xl">Menus de Servicios</h1>
      </div>

      <div className="flex pt-4 pb-10">
        <div className="w-full mx-4">
          <img src={ImagenPrincipal} alt="" className="w-full h-auto" />
        </div>
        <div className="w-full mx-4">
          <img src={ImagenSecundaria} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex p-10">
        <div className="bg-gray-200 pl-20 h-20 w-full"></div>
        <div className="bg-red-500 pl-20 h-20 w-full"></div>
        <div className="bg-green-500 pl-20 h-20 w-full"></div>
      </div>
      <div className="flex justify-around items-center p-40 ">
        <div className="flex flex-col items-center">
          <div className="pb-10 h-80 w-80">
            <img src={Cabañas} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="capitalize md:uppercase text-4xl pb-20 text-gray-800 opacity-50">
              Cabañas
            </h1>
          </div>
          <div className="flex items-center pb-10">
            <div className="bg-gray-200 pl-4 h-10 w-60"></div>
            <div>
              <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin" />
            </div>
          </div>
          <div className="flex items-center pb-10">
            <div className="bg-gray-200 pl-4 h-10 w-60"></div>
            <div>
              <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin" />
            </div>
          </div>
          <div className="flex items-center pb-10">
            <div className="bg-gray-200 pl-4 h-10 w-60"></div>
            <div>
              <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="pb-10 h-80 w-80">
            <img src={Aventura} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="capitalize md:uppercase text-4xl pb-20 text-gray-800 opacity-50">
              Aventura
            </h1>
          </div>
          <div className="flex items-center pb-10">
            <div className="bg-gray-200 pl-4 h-10 w-60"></div>
            <div>
              <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin" />
            </div>
          </div>
          <div className="flex items-center pb-10">
            <div className="bg-gray-200 pl-4 h-10 w-60"></div>
            <div>
              <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin" />
            </div>
          </div>
          <div className="flex items-center pb-10">
            <div className="bg-gray-200 pl-4 h-10 w-60 "></div>
            <div>
              <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservas;
