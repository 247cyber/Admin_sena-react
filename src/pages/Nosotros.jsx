// import React from 'react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-success text-white py-5 mb-5 shadow-sm">
        <div className="container text-center py-4">
          <h1 className="display-4 fw-bold mb-3">Sobre Nosotros</h1>
          <p className="lead col-md-8 mx-auto opacity-90">
            En el sistema <strong>AdminSENA</strong> gestionamos el talento, la formación y los recursos tecnológicos de nuestro centro de aprendizaje para impulsar el desarrollo profesional.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        {/* Misión y Visión */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 border-start border-5 border-success">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white rounded-circle p-3 me-3">
                    <i className="bi bi-flag-fill fs-3"></i>
                  </div>
                  <h3 className="card-title fw-bold text-dark mb-0">Nuestra Misión</h3>
                </div>
                <p className="card-text text-muted fs-6">
                  Ofrecer formación profesional integral para la incorporación de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 border-start border-5 border-primary">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="bi bi-eye-fill fs-3"></i>
                  </div>
                  <h3 className="card-title fw-bold text-dark mb-0">Nuestra Visión</h3>
                </div>
                <p className="card-text text-muted fs-6">
                  Consolidarnos como una entidad referente en formación técnica y tecnológica, reconocida por la innovación de sus procesos educativos y la excelencia de sus aprendices e instructores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas Institucionales */}
        <div className="card bg-light border-0 rounded-4 shadow-sm p-4 mb-5">
          <div className="card-body">
            <div className="row text-center g-4">
              <div className="col-6 col-md-3">
                <div className="p-2">
                  <i className="bi bi-people-fill text-success fs-1"></i>
                  <h2 className="fw-bold text-dark mt-2 mb-0">+500</h2>
                  <span className="text-muted small">Aprendices</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-2">
                  <i className="bi bi-person-badge-fill text-success fs-1"></i>
                  <h2 className="fw-bold text-dark mt-2 mb-0">+30</h2>
                  <span className="text-muted small">Instructores</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-2">
                  <i className="bi bi-journal-bookmark-fill text-success fs-1"></i>
                  <h2 className="fw-bold text-dark mt-2 mb-0">+15</h2>
                  <span className="text-muted small">Cursos / Fichas</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-2">
                  <i className="bi bi-pc-display text-success fs-1"></i>
                  <h2 className="fw-bold text-dark mt-2 mb-0">+100</h2>
                  <span className="text-muted small">Equipos Asignados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores Institucionales */}
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark">Valores Institucionales</h3>
          <p className="text-muted">Principios que orientan nuestro trabajo diario</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
              <div className="card-body">
                <i className="bi bi-award text-success fs-1 mb-3"></i>
                <h5 className="fw-bold">Respeto y Rigor</h5>
                <p className="text-muted small mb-0">
                  Promovemos un ambiente de aprendizaje basado en la ética, el respeto mutuo y el compromiso con la calidad académica.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
              <div className="card-body">
                <i className="bi bi-cpu text-success fs-1 mb-3"></i>
                <h5 className="fw-bold">Innovación</h5>
                <p className="text-muted small mb-0">
                  Implementamos herramientas tecnológicas de vanguardia para la gestión eficiente de la información educativa.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
              <div className="card-body">
                <i className="bi bi-hand-thumbs-up text-success fs-1 mb-3"></i>
                <h5 className="fw-bold">Liderazgo</h5>
                <p className="text-muted small mb-0">
                  Fomentamos el desarrollo de habilidades integrales para que nuestros egresados destaquen en el sector productivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}