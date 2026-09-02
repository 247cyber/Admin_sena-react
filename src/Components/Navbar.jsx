import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/buscar?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#39a900' }}>
            <div className="container-fluid">

                {/* Logo y Nombre */}
                <Link className="navbar-brand d-flex align-items-center me-3" to="/">
                    <span className="bg-white rounded p-1 d-inline-block">
                        <img 
                            src="https://pautonoticias.com/sites/default/files/Article/sena-colombia-logo-green39a900png-20250120.png"
                            alt="Logo SENA" 
                            width="40" 
                            height="40" 
                            className="img-fluid" 
                        />
                    </span>
                    <span className="ms-2 fw-bold text-white fs-5">AdminSENA</span>
                </Link>

                {/* Botón Hamburguesa Mobile */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
                        
                        {/* Inicio y Nosotros */}
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/nosotros">Nosotros</Link>
                        </li>

                        {/* Desplegable Registrar */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle text-white" 
                                href="#" 
                                id="registrarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Registrar
                            </a>
                            <ul className="dropdown-menu border-0 shadow" aria-labelledby="registrarDropdown">
                                <li><Link className="dropdown-item" to="/areas/crear">Área</Link></li>
                                <li><Link className="dropdown-item" to="/centros/crear">Centro de Formación</Link></li>
                                <li><Link className="dropdown-item" to="/computadores/crear">Computador</Link></li>
                                <li><Link className="dropdown-item" to="/cursos/crear">Curso</Link></li>
                                <li><Link className="dropdown-item" to="/instructores/crear">Instructor</Link></li>
                                <li><Link className="dropdown-item" to="/aprendices/crear">Aprendiz</Link></li>
                            </ul>
                        </li>

                        {/* Desplegable Listas */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle text-white" 
                                href="#" 
                                id="listasDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Ver Listas
                            </a>
                            <ul className="dropdown-menu border-0 shadow" aria-labelledby="listasDropdown">
                                <li><Link className="dropdown-item" to="/areas">Áreas</Link></li>
                                <li><Link className="dropdown-item" to="/centros">Centros</Link></li>
                                <li><Link className="dropdown-item" to="/computadores">Computadores</Link></li>
                                <li><Link className="dropdown-item" to="/cursos">Cursos</Link></li>
                                <li><Link className="dropdown-item" to="/instructores">Instructores</Link></li>
                                <li><Link className="dropdown-item" to="/aprendices">Aprendices</Link></li>
                            </ul>
                        </li>
                    </ul>
                    
                    {/* Formulario de Búsqueda */}
                    <form onSubmit={handleSearch} className="d-flex me-2 mb-2 mb-lg-0" role="search">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control rounded-start-pill border-0" 
                                placeholder="Buscar..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                required
                            />
                            <button className="btn btn-light text-success rounded-end-pill px-3" type="submit">
                                🔍
                            </button>
                        </div>
                    </form>

                    {/* Botón Acceder / Login */}
                    <div className="d-flex align-items-center">
                        <Link to="/login" className="btn btn-light text-success fw-bold px-3 rounded-pill shadow-sm">
                            Iniciar Sesión
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}