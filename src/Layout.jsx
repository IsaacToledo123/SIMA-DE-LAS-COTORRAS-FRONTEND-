
import SideNav from './components/AdminComponents/components/SideNav';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">

      <SideNav />

      <main className="flex-1 p-4 overflow-x-hidden">
        {children}
      </main>

    </div>
  );
};

export default Layout;
