import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-fluid px-0">

            {/* CARRUSEL DE IMÁGENES */}
            <div id="senaCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#senaCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#senaCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#senaCarousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#senaCarousel" data-bs-slide-to="3"></button>
                </div>

                <div className="carousel-inner">
                    {/* SLIDE 1 */}
                    <div className="carousel-item active">
                        <div className="position-relative">
                            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" className="d-block w-100" style={{ height: '550px', objectFit: 'cover' }} alt="Admin Sena" />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.60)' }}></div>
                        </div>
                        <div className="carousel-caption">
                            <h1 className="display-3 fw-bold">ADMIN SENA</h1>
                            <p className="fs-3">Bienvenido al sistema de gestión académica institucional</p>
                            <Link to="/areas/crear" className="btn btn-success btn-lg px-5 rounded-pill shadow">Comenzar</Link>
                        </div>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="carousel-item">
                        <div className="position-relative">
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" className="d-block w-100" style={{ height: '550px', objectFit: 'cover' }} alt="Innovación Tecnológica" />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.55)' }}></div>
                        </div>
                        <div className="carousel-caption">
                            <h1 className="display-3 fw-bold">Innovación Tecnológica</h1>
                            <p className="fs-3">Gestiona ambientes y equipos del centro SENA</p>
                            <Link to="/computadores" className="btn btn-light btn-lg px-5 rounded-pill shadow">Ver Equipos</Link>
                        </div>
                    </div>

                    {/* SLIDE 3 */}
                    <div className="carousel-item">
                        <div className="position-relative">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" className="d-block w-100" style={{ height: '550px', objectFit: 'cover' }} alt="Formación Profesional" />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.55)' }}></div>
                        </div>
                        <div className="carousel-caption">
                            <h1 className="display-3 fw-bold">Formación Profesional</h1>
                            <p className="fs-3">Administra aprendices e instructores fácilmente</p>
                            <Link to="/aprendices" className="btn btn-success btn-lg px-5 rounded-pill shadow">Aprendices</Link>
                        </div>
                    </div>

                    {/* SLIDE 4 */}
                    <div className="carousel-item">
                        <div className="position-relative">
                            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2" className="d-block w-100" style={{ height: '550px', objectFit: 'cover' }} alt="Centro de Formación" />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.55)' }}></div>
                        </div>
                        <div className="carousel-caption">
                            <h1 className="display-3 fw-bold">Centro de Formación</h1>
                            <p className="fs-3">Organiza áreas, programas y procesos académicos</p>
                            <Link to="/areas" className="btn btn-light btn-lg px-5 rounded-pill shadow">Explorar</Link>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#senaCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#senaCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* SECCIÓN 1: TARJETAS DE GESTIÓN RÁPIDA */}
            <section className="py-5 bg-light">
                <div className="container-fluid px-4 px-md-5">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold text-success">Gestión Directa del Sistema</h2>
                        <p className="text-muted fs-5">Accede de forma rápida a los principales módulos del aplicativo</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className="fs-2">📚</i>
                                    </div>
                                    <h4 className="card-title fw-bold">Programas y Cursos</h4>
                                    <p className="card-text text-muted fs-6">Registra y consulta la oferta académica activa en el centro.</p>
                                    <Link to="/cursos" className="btn btn-outline-success btn-lg rounded-pill px-4">Administrar</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className="fs-2">👨‍🏫</i>
                                    </div>
                                    <h4 className="card-title fw-bold">Instructores</h4>
                                    <p className="card-text text-muted fs-6">Gestión de la plantilla docente y asignación de programas.</p>
                                    <Link to="/instructores" className="btn btn-outline-success btn-lg rounded-pill px-4">Ver Instructores</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center p-4">
                                <div className="card-body">
                                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className="fs-2">💻</i>
                                    </div>
                                    <h4 className="card-title fw-bold">Ambientes y Equipos</h4>
                                    <p className="card-text text-muted fs-6">Control de inventario tecnológico y asignación de computadores.</p>
                                    <Link to="/computadores" className="btn btn-outline-success btn-lg rounded-pill px-4">Gestionar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN CON ANUNCIOS EN LÍNEA RECTA (CERRABLES) */}
            <section className="py-5">
                <div className="container-fluid px-4 px-md-5">
                    <div className="row g-4 align-items-stretch">

                        {/* Tarjeta 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-sm text-center p-4 h-100 alert alert-dismissible fade show mb-0 position-relative" style={{ backgroundColor: '#f8f9fa' }} role="alert">
                                <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="alert" aria-label="Close"></button>

                                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-2">
                                    <span className="badge bg-secondary mb-3 px-3 py-1">Publicidad</span>
                                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=150&q=80" alt="Feria de Empleabilidad" className="rounded-circle mb-3 shadow-sm" style={{ width: '85px', height: '85px', objectFit: 'cover' }} />
                                    <h5 className="fw-bold text-dark">Feria de Empleabilidad SENA</h5>
                                    <p className="text-muted small mb-3">Encuentra vacantes activas y postúlate en la Agencia Pública de Empleo.</p>
                                    <a href="https://ape.sena.edu.co" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success rounded-pill px-4 btn-sm mt-auto">Más información</a>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-sm text-center p-4 h-100 alert alert-dismissible fade show mb-0 position-relative" style={{ backgroundColor: '#f8f9fa' }} role="alert">
                                <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="alert" aria-label="Close"></button>

                                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-2">
                                    <span className="badge bg-secondary mb-3 px-3 py-1">Publicidad</span>
                                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=150&q=80" alt="Noticias" className="rounded-circle mb-3 shadow-sm" style={{ width: '85px', height: '85px', objectFit: 'cover' }} />
                                    <h5 className="fw-bold text-dark">Noticias</h5>
                                    <p className="text-muted small mb-3">Mantente informado sobre las novedades y proyectos del centro.</p>
                                    <a href="https://www.acnur.org/noticias-e-historias/ultimas-noticias" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success rounded-pill px-4 btn-sm mt-auto">Más información</a>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-sm text-center p-4 h-100 alert alert-dismissible fade show mb-0 position-relative" style={{ backgroundColor: '#f8f9fa' }} role="alert">
                                <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="alert" aria-label="Close"></button>

                                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-2">
                                    <span className="badge bg-secondary mb-3 px-3 py-1">Publicidad</span>
                                    <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=150&q=80" alt="Suscripción" className="rounded-circle mb-3 shadow-sm" style={{ width: '85px', height: '85px', objectFit: 'cover' }} />
                                    <h5 className="fw-bold text-dark">Suscripción Netflix</h5>
                                    <p className="text-muted small mb-3">Aprovecha convenios y beneficios de entretenimiento.</p>
                                    <a href="https://www.netflix.com/signup/planform?locale=es-MX" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success rounded-pill px-4 btn-sm mt-auto">Más información</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECCIÓN 2: OFERTA ACADÉMICA DESTACADA */}
            <section className="py-5">
                <div className="container-fluid px-4 px-md-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fs-6 mb-2">Formación Gratuita</span>
                        <h2 className="display-6 fw-bold">Oferta Académica SENA</h2>
                        <p className="text-muted fs-5">Conoce las áreas de formación profesional de mayor demanda laboral</p>
                    </div>

                    <div className="row g-4">
                        {/* Programa 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" className="card-img-top" style={{ height: '240px', objectFit: 'cover' }} alt="ADSO" />
                                <div className="card-body p-4">
                                    <span className="badge bg-success mb-2 fs-6">Tecnología</span>
                                    <h4 className="card-title fw-bold">Análisis y Desarrollo de Software (ADSO)</h4>
                                    <p className="card-text text-muted fs-6">Aprende a construir aplicaciones web, móviles y bases de datos utilizando tecnologías modernas como Laravel, React y Java.</p>
                                </div>
                                <div className="card-footer bg-white border-0 px-4 pb-4">
                                    <div className="d-flex justify-content-between align-items-center text-muted fw-semibold small mb-3">
                                        <span>⏱️ 27 Meses</span>
                                        <span>📍 Modalidad Mixta</span>
                                    </div>
                                    <Link to="/cursos/crear" className="btn btn-success btn-lg w-100 rounded-pill">Inscribir Ficha</Link>
                                </div>
                            </div>
                        </div>

                        {/* Programa 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12" className="card-img-top" style={{ height: '240px', objectFit: 'cover' }} alt="Diseño Gráfico" />
                                <div className="card-body p-4">
                                    <span className="badge bg-success mb-2 fs-6">Tecnología</span>
                                    <h4 className="card-title fw-bold">Desarrollo de Multimedia y Web</h4>
                                    <p className="card-text text-muted fs-6">Crea soluciones digitales, diseño UX/UI, maquetación frontend y animación digital para la industria moderna.</p>
                                </div>
                                <div className="card-footer bg-white border-0 px-4 pb-4">
                                    <div className="d-flex justify-content-between align-items-center text-muted fw-semibold small mb-3">
                                        <span>⏱️ 24 Meses</span>
                                        <span>📍 Presencial</span>
                                    </div>
                                    <Link to="/cursos/crear" className="btn btn-success btn-lg w-100 rounded-pill">Inscribir Ficha</Link>
                                </div>
                            </div>
                        </div>

                        {/* Programa 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758" className="card-img-top" style={{ height: '240px', objectFit: 'cover' }} alt="Mantenimiento" />
                                <div className="card-body p-4">
                                    <span className="badge bg-primary mb-2 fs-6">Técnico</span>
                                    <h4 className="card-title fw-bold">Sistemas y Mantenimiento de Equipos</h4>
                                    <p className="card-text text-muted fs-6">Capacitación en ensamble de hardware, configuración de redes LAN y soporte técnico preventivo.</p>
                                </div>
                                <div className="card-footer bg-white border-0 px-4 pb-4">
                                    <div className="d-flex justify-content-between align-items-center text-muted fw-semibold small mb-3">
                                        <span>⏱️ 12 Meses</span>
                                        <span>📍 Presencial</span>
                                    </div>
                                    <Link to="/cursos/crear" className="btn btn-success btn-lg w-100 rounded-pill">Inscribir Ficha</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: CONOCE NUESTRAS SEDES */}
            <section className="py-5 bg-light">
                <div className="container-fluid px-4 px-md-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fs-6 mb-2">Instalaciones</span>
                        <h2 className="display-6 fw-bold">Conoce Nuestras Sedes</h2>
                        <p className="text-muted fs-5">Espacios modernos adaptados para la formación práctica e innovación tecnológica</p>
                    </div>

                    <div className="row g-4">
                        {/* Sede 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf65mSHyrFcnTdloLkGUu232Sny4s0C2_HCX6e-gzREw&s=10" className="card-img-top" style={{ height: '240px', objectFit: 'cover' }} alt="Sede Principal" />
                                <div className="card-body p-4">
                                    <span className="badge bg-success mb-2 fs-6">Sede Principal</span>
                                    <h4 className="card-title fw-bold">Centro Agropecuario y de Servicios</h4>
                                    <p className="card-text text-muted fs-6">Cuenta con laboratorios de desarrollo de software, ambientes de aprendizaje dotados y áreas administrativas.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sede 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayp-m3pkIxU2vz8FjIeZwwPebhmnltEDfduXmqHJSWg&s=10" className="card-img-top" style={{ height: '240px', objectFit: 'cover' }} alt="Sede Norte" />
                                <div className="card-body p-4">
                                    <span className="badge bg-success mb-2 fs-6">Sede Norte</span>
                                    <h4 className="card-title fw-bold">Centro de Innovación Tecnológica</h4>
                                    <p className="card-text text-muted fs-6">Instalaciones enfocadas en la investigación, automatización industrial y proyectos de desarrollo regional.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sede 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiYOPA_C0wSkUeJaro1oateYBifK5PlwGPWcx1dxYfQ&s=10" className="card-img-top" style={{ height: '240px', objectFit: 'cover' }} alt="Sede Comercio" />
                                <div className="card-body p-4">
                                    <span className="badge bg-success mb-2 fs-6">Sede Comercio</span>
                                    <h4 className="card-title fw-bold">Centro de Comercio y Servicios</h4>
                                    <p className="card-text text-muted fs-6">Espacio especializado en formación en gestión documental, multimedia, mercadeo y desarrollo administrativo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: ESTADÍSTICAS E INDICADORES */}
            <section className="py-5 text-white" style={{ backgroundColor: '#39a900' }}>
                <div className="container-fluid px-4 px-md-5">
                    <div className="row text-center g-4">
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold mb-0">+1,200</h2>
                            <p className="mb-0 fs-5 text-white-50">Aprendices Matriculados</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold mb-0">+45</h2>
                            <p className="mb-0 fs-5 text-white-50">Instructores Calificados</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold mb-0">+18</h2>
                            <p className="mb-0 fs-5 text-white-50">Ambientes de Formación</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold mb-0">100%</h2>
                            <p className="mb-0 fs-5 text-white-50">Gratuito y Calidad SENA</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}