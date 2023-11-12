import React from "react";
import CroquisComponent from "./croquis";
import FondoMapa from '../img/imagenesCRoquis/fondoMapa.png'
import Rapel from '../img/imagenesCRoquis/rapel.jpg'
import Restaurant from '../img/imagenesCRoquis/local.png'
const Ubicacion = () => {
  return (
    <div className=" flex " >
  <div class=" top-0 left-0 h-auto w-1/8 bg-green-400  flex flex-col text-center ">
    <div className="pb-10 pt-5">
        <h1 class="text-2xl font-semibold p-10">Simbología</h1>
    </div>
    <div className="p-10 text-2xl hover:border border-white">
  <p class="">Cabañas</p>
</div>
<div className="p-10 text-2xl flex   hover:border border-white  ">
<img src={Rapel} className="w-10 pr-2" />
  <p class="">Rapel</p>
 
</div>
<div className="p-10 text-2xl hover:border border-white">
  <p class="">Restaurant</p>
</div>
<div className="p-10 text-2xl hover:border border-white">
  <p class="">Entrada</p>
</div>

</div>
<div className="flex ml-auto w-3/4 p-40  ">
<CroquisComponent/>
</div>
    </div>
    
  );
};

export default Ubicacion;
