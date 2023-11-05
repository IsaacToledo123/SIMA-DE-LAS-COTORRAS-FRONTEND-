import GraficasOption from "./GraficasOpcion";
import IngresosOption from "./IngresosOpcion";
import EgresosOption from "./EgresosOpcion";
import MetasOption from "./MetasOpcion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ReservasOption from "./ReservasOpcion";

const AdminVista = () => {
  const ingresosTotales = 5000;

  return (
    <div>
      <div className="flex justify-center">
      <h1 className="text-4xl p-20 font-inter opacity-80">Hola Administrador!</h1>
      </div>
    <div className="flex items-center justify-center mt-10">
      
      <div className="flex flex-col items-center">
        <div className="bg-green-300 p-6 pl-20 pr-20 rounded-lg mb-8  ">
          <div className="flex items-center">
            <div className="text-xl font-bold">Ingresos totales:</div>
          </div>
          <div className="text-green-800 text-2xl">{`$${ingresosTotales}`}</div>
        </div>

        <div className="flex space-x-4">
          <IngresosOption />
          <EgresosOption />
          <GraficasOption />
          <MetasOption />
          <ReservasOption />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminVista;
