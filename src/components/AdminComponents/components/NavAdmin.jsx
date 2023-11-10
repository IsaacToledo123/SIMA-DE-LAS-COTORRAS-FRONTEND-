import { useState } from "react";
import { Outlet } from "react-router-dom";
import Usuarios from "../../../img/usuarios.png";
import LogoEmpresa from "../../../img/logoP.png";
const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between px-10 shadow-md ">
        <div className="pt-2 pl-16">
          <img src={LogoEmpresa} alt="logo de la empresa" width="200px" />
        </div>
        <div className=" flex   text-2xl">
          <p className="pr-5 flex my-auto hover:font-semibold">
            <a href="/admin">Vista Previa</a>
          </p>
          <p className="flex my-auto hover:font-semibold">
            <a href="/admin/Menu">Menu</a>
          </p>
        </div>

        <div className="grid grid-cols-3">
      
            <img src={Usuarios} alt="Foto de perfil" width="50px" className="flex my-auto"/>
          

         
            <button className="hover:shadow-md   text-xl ">
              <a href="/registro">Registrase</a>
            </button>
      
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
