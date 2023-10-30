import EgresosOption from "./EgresosOpcion";
import GraficasOption from "./GraficasOpcion";
import IngresosOption from "./IngresosOpcion";
import MetasOption from "./MetasOpcion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import ReservasOption from "./ReservasOpcion";




const AdminVista = () => {

  const ingresosTotales = 5000;
  
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-lime-500 p-4 rounded-lg mb-8">
        <div className="flex items-center">
          <div className="mr-2">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <div className="text-xl font-bold">Ingresos totales:</div>
        </div>
        <div className=" text-green-800 text-2xl">{`$${ingresosTotales}`}</div>
      </div>

      <div className="flex space-x-4">
        <IngresosOption />
        <EgresosOption />
        <GraficasOption />
        <MetasOption />
        <ReservasOption/>
      </div>
      
    </div>
  );
};

export default AdminVista;
