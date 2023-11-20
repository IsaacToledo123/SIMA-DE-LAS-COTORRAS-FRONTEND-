import { useState, useEffect, useContext } from "react";
import { AdministradorContext } from "../context/AdminContext";

const Cabañas = () => {

      const { cabañas } = useContext(AdministradorContext);

      return (

            <div>

                  <h1 className="bg-green-700 text-white text-3xl text-center mx-10 my-10 py-5 font-bold rounded-lg">Cabañas</h1>

            </div>

      )

}

export default Cabañas;