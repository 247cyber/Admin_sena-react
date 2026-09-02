import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principal con Navbar y Footer */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Ruta principal (Inicio) */}
          <Route index element={<Home />} />

          {/* Vistas generales */}
          <Route path="nosotros" element={<div className="container py-5"><h2>Sección Nosotros</h2></div>} />
          <Route path="buscar" element={<div className="container py-5"><h2>Resultados de Búsqueda</h2></div>} />
          <Route path="login" element={<div className="container py-5"><h2>Iniciar Sesión</h2></div>} />

          {/* Rutas para Crear (Módulo Registrar) */}
          <Route path="areas/crear" element={<div className="container py-5"><h2>Registrar Área</h2></div>} />
          <Route path="centros/crear" element={<div className="container py-5"><h2>Registrar Centro de Formación</h2></div>} />
          <Route path="computadores/crear" element={<div className="container py-5"><h2>Registrar Computador</h2></div>} />
          <Route path="cursos/crear" element={<div className="container py-5"><h2>Registrar Curso</h2></div>} />
          <Route path="instructores/crear" element={<div className="container py-5"><h2>Registrar Instructor</h2></div>} />
          <Route path="aprendices/crear" element={<div className="container py-5"><h2>Registrar Aprendiz</h2></div>} />

          {/* Rutas para Ver Listas */}
          <Route path="areas" element={<div className="container py-5"><h2>Lista de Áreas</h2></div>} />
          <Route path="centros" element={<div className="container py-5"><h2>Lista de Centros</h2></div>} />
          <Route path="computadores" element={<div className="container py-5"><h2>Lista de Computadores</h2></div>} />
          <Route path="cursos" element={<div className="container py-5"><h2>Lista de Cursos</h2></div>} />
          <Route path="instructores" element={<div className="container py-5"><h2>Lista de Instructores</h2></div>} />
          <Route path="aprendices" element={<div className="container py-5"><h2>Lista de Aprendices</h2></div>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}