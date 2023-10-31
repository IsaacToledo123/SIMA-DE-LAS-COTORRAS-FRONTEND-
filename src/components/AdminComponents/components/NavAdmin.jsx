import {useState} from "react";
import Style from "../../../styles/nav.css";
import { Outlet } from "react-router-dom";
import Usuarios from "../../../img/usuarios.png";
import LogoEmpresa from '../../../img/logoP.png'
const Nav = () => {


  return (
    <div>
      <nav>
        <div class="logoEmpresa">
          <img src={LogoEmpresa} alt="" />
        </div>
        <div className="flex text-2xl my-auto">
          <p className="pr-5  hover:font-semibold">
            <a href="/admin/MenuPrincipal">Vista Previa</a>
          </p>
          <p className=" hover:hover:font-semibold">
            <a href="/admin/Menu">Menu</a>
          </p>
        </div>
        <div class="imagenes">
          <img src={Usuarios} />
          <div >
    
    </div>
          <div>
            <button className="hover:shadow-xl"><a href="/registro">Cuenta</a></button>
          </div>
        </div>
      </nav>
      < Outlet/>
    </div>
  );
};

export default Nav;
