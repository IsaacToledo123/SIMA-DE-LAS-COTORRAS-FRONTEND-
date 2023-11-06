import React from "react";
import { useState } from "react";
import Añadir from "../img/añadir.png";
import CabñaInfo from "./CabñaInfo";

function OpcionServicio({ aventura, verServicio}) {

      return (

            <div className="flex items-center pb-10" onClick={e => {verServicio(aventura)}}>

                  <div className="bg-gray-200 pl-4 h-10 w-60 text-center p-1">{aventura}</div>

                  <div>
                        <img src={Añadir} className="h-10 w-10 ml-4 hover:animate-spin hover:cursor-pointer"/>                        
                  </div>

            </div>

      )     
}

export default OpcionServicio;
