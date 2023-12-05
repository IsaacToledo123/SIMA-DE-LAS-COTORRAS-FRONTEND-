import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faHome, faMoneyBillAlt, faPowerOff, faCrow, faPieChart, faDollarSign, faMessage, faUser, faDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', icon: faHome, to: '/admin' },
  { name: 'Ingreso', icon: faDollarSign, to: '/admin/paginaIngresos' },
  { name: 'Egreso', icon: faMoneyBillAlt, to: '/admin/paginaEgresos' },
  { name: 'Reservas', icon: faUserGroup, to: '/admin/Reservas' },
  { name: 'Gráficas', icon: faPieChart, to: '/admin/Graficas' },
  { name: 'Chat', icon: faMessage, to: '/admin/chat' },
  { name: 'Pagos', icon: faDollar, to: '/admin/usuarios'}
];

const NavLinks = () => {
  const location = useLocation();
  const activeLink = links.find(link => location.pathname.startsWith(link.to))?.name || 'Home';

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-lime-400 md:flex-none md:justify-start md:p-2 md:px-3 ${activeLink === link.name ? 'bg-lime-300 text-green-800' : ''
            }`}
        >
          <FontAwesomeIcon icon={link.icon} className="w-6" />
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
};

const SideNav = () => {

  const handleCerrarSesion = e => {

    e.preventDefault();

    console.log("Vamos a cerrar sesión")
    localStorage.removeItem('token-admin');
    window.location.href = "/login";

  }


  return (
    <div className="flex h-full w-72 flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-lime-700 p-4 md:h-40">
        <div className="w-32 text-white md:w-40">
          <FontAwesomeIcon icon={faCrow} className='text-3xl' />
        </div>

      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks activeLink={'Home'} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-lime-400 md:flex-none md:justify-start md:p-2 md:px-3 w-full"
            onClick={handleCerrarSesion}
          >

            <div className="hidden md:block w-full">
              <FontAwesomeIcon icon={faPowerOff} className="w-6" />
              Salir
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
