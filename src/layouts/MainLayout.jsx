import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function MainLayout() {
  const location = useLocation();

  // Definimos las rutas donde NO queremos que aparezca el Navbar ni el Footer
  const rutasSinLayout = ['/login', '/registro'];
  // Verificamos si la ruta actual está en esa lista
  const ocultarLayout = rutasSinLayout.includes(location.pathname);
  return (
    <div className="d-flex flex-column min-vh-100">
    
      {!ocultarLayout && <Navbar />}

      <main className="flex-grow-1">
        <Outlet />
      </main>

   
      {!ocultarLayout && <Footer />}
    </div>
  );
}