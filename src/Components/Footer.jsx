import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
            <div className="container-fluid px-4 px-md-5">
                <div className="row g-4">

                    {/* Columna 1: Información Institucional */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-success fw-bold mb-3">
                            <i className="fas fa-graduation-cap me-2"></i>AdminSENA
                        </h5>
                        <p className="text-secondary small">
                            Sistema de gestión integral para la administración de aprendices, instructores, programas de formación y equipos tecnológicos del Centro de Formación SENA.
                        </p>
                        {/* Redes Sociales */}
                        <div className="mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="fab fa-instagram"></i></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces Rápidos del Sistema */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="fw-bold mb-3 text-light">Módulos del Sistema</h5>
                        <ul className="list-unstyled small">
                            <li className="mb-2">
                                <Link to="/" className="text-secondary text-decoration-none">
                                    <i className="fas fa-chevron-right me-1 text-success small"></i> Inicio
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/aprendices" className="text-secondary text-decoration-none">
                                    <i className="fas fa-chevron-right me-1 text-success small"></i> Aprendices
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/instructores" className="text-secondary text-decoration-none">
                                    <i className="fas fa-chevron-right me-1 text-success small"></i> Instructores
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/cursos" className="text-secondary text-decoration-none">
                                    <i className="fas fa-chevron-right me-1 text-success small"></i> Programas y Cursos
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/computadores" className="text-secondary text-decoration-none">
                                    <i className="fas fa-chevron-right me-1 text-success small"></i> Equipos y Ambientes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto Institucional */}
                    <div className="col-lg-4 col-md-12">
                        <h5 className="fw-bold mb-3 text-light">Contacto e Información</h5>
                        <ul className="list-unstyled text-secondary small">
                            <li className="mb-2">
                                <i className="fas fa-map-marker-alt text-success me-2"></i> Centro de Formación SENA
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-phone-alt text-success me-2"></i> Línea Gratuita: 01 8000 910270
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-envelope text-success me-2"></i> contacto@sena.edu.co
                            </li>
                            <li className="mb-2">
                                <i className="fas fa-clock text-success me-2"></i> Lunes a Viernes: 7:00 AM - 5:00 PM
                            </li>
                        </ul>
                    </div>

                </div>

                <hr className="border-secondary my-4" />

                {/* Línea Inferior de Derechos Reservados */}
                <div className="row align-items-center small text-secondary">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {new Date().getFullYear()} <strong>AdminSENA</strong>. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                        <span>Servicio Nacional de Aprendizaje - SENA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}