import {useState} from "react";
import { Outlet } from "react-router-dom";
import Usuarios from "../../../img/usuarios.png";
import LogoEmpresa from '../../../img/logoP.png'
const Nav = () => {


  return (
    <div>
       <nav className="flex justify-between px-10 shadow-md pb-10">
        <div class="pt-2">
          <img src={LogoEmpresa} alt="logo de la empresa" width="200px" />
        </div>
        <div class="grid grid-cols-4 my-auto text-2xl">
        <p className="pr-5  hover:font-semibold">
            <a href="/admin/MenuPrincipal">Vista Previa</a>
          </p>
          <p className=" hover:hover:font-semibold">
            <a href="/admin/Menu">Menu</a>
          </p>
        </div>
        <div class="grid grid-cols-3">
          <div className="pt-8">
            <img src={Usuarios} alt="Foto de perfil" width="50px" />
          </div>
          
          <div className="pt-10">
            <button className="hover:shadow-xl text-xl"><a href="/registro">Registrase</a></button>
          </div>
        </div>
      </nav>
      < Outlet/>
    </div>
  );
};

export default Nav;
