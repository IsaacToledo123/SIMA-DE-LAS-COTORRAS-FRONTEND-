import Cartitas from "./Cartas";
import LatestReservations from "./UltimasR";

const Home = () => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <Cartitas />
      </div>
      <div className="mb-4">
        <LatestReservations />
      </div>
    </div>
  );
};

export default Home;

