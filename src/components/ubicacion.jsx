import React from "react";
import FondoMapa from '../img/fondoMapa.png';
import Croquis from '../img/fotografias_cabaña/croquis.png'
const Ubicacion = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-blur-md flex opacity-100 " style={{ backgroundImage: `url(${FondoMapa})` }}>
  <div class=" top-0 left-0 h-screen w-1/5 bg-gray-400 opacity-60 flex flex-col text-center ">
    <div className="pb-10 pt-5">
        <h1 class="text-4xl font-semibold p-10">Simbología</h1>
    </div>
    <div className="p-10 text-2xl border border-white">
  <p class="">Cabañas</p>
</div>
<div className="p-10 text-2xl  border border-black">
  <p class="">Rapel</p>
</div>
<div className="p-10 text-2xl  border border-white">
  <p class="">Restaurant</p>
</div>
<div className="p-10 text-2xl  border border-white">
  <p class="">Entrada</p>
</div>

</div>
<div className="flex ml-auto w-3/4 p-20  ">
  <img src={Croquis} alt="" />
</div>


    </div>
    
  );
};

export default Ubicacion;
