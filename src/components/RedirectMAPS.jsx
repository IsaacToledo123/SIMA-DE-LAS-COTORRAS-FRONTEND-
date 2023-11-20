import React from 'react';
import Ubicacion from '../img/ubicacion.png';
const GoogleMapsButton = () => {
  const direccionDestino = 'SIMA DE LAS COTORRAS-ECO PARQUE, Piedra Parada, Chiapas';

  
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccionDestino)}`;

  return (
    <div className='flex justify-center'>
      <a href={url} target="_blank" rel="noopener noreferrer" className='flex justify-center rounded-md border border-red-500 p-4 bg-gray-200 '>
        
        <button className='pr-5'>Obtener ruta en Google Maps</button>
        <img src={Ubicacion} width={20} />
      </a>
    </div>
  );
};

export default GoogleMapsButton;
