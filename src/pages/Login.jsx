import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoSena from '../assets/logo sena.png'; 
import Ambientes from '../assets/ambientes.jpg'; 
import Gestion from '../assets/gestion.jpg'; 
import Instructor from '../assets/instructor.jpg'; 

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // 1. Asignamos la imagen de fondo 
  const slides = [
    {
      bgImage: Gestion,
      icon: 'bi-mortarboard-fill',
      title: 'Gestión Educativa Integral',
      description: 'Control y seguimiento integral de fichas, aprendices y programas de formación.',
    },
    {
      bgImage: Ambientes,
      icon: 'bi-pc-display',
      title: 'Control de Ambientes y Equipos',
      description: 'Administración eficiente de recursos tecnológicos y salas de cómputo.',
    },
    {
      bgImage: Instructor,
      icon: 'bi-person-badge-fill',
      title: 'Asignación de Instructores',
      description: 'Coordinación del cuerpo docente y programación de horarios por área.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.email || !formData.password) {
      setErrorMessage('Por favor ingresa tu correo y contraseña.');
      return;
    }

    console.log('Iniciando sesión:', formData);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '980px' }}>  
        <div className="row g-0">
          
          {/* LADO IZQUIERDO: Formulario */}
          <div className="col-lg-6 bg-white p-4 p-md-5 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <img 
                  src={logoSena} 
                  alt="Logo SENA" 
                  style={{ width: '60px', height: 'auto', display: 'block', margin: '0 auto' }} 
                />
              </div>

              <div className="mb-4">
                <h3 className="fw-bold text-dark text-center mb-1">
                  Iniciar Sesión
                </h3>
                <p className="text-muted small text-center">
                  ¡Bienvenido de nuevo! Ingresa tus credenciales para continuar.
                </p>
              </div>

              {errorMessage && (
                <div className="alert alert-danger alert-dismissible fade show rounded-3 py-2 px-3 mb-3" role="alert">
                  <small className="fw-semibold">
                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                    {errorMessage}
                  </small>
                  <button 
                    type="button" 
                    className="btn-close py-2" 
                    onClick={() => setErrorMessage('')}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold text-secondary small">
                    Correo Electrónico
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control bg-light border-start-0 ps-0 fs-6 py-2"
                      placeholder="usuario@sena.edu.co"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold text-secondary small">
                    Contraseña
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      className="form-control bg-light border-start-0 border-end-0 ps-0 fs-6 py-2"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="input-group-text bg-light border-start-0 text-muted"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi bi-${showPassword ? 'eye-slash' : 'eye'}`}></i>
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4 fs-7">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-secondary small" htmlFor="rememberMe">
                      Recordarme
                    </label>
                  </div>
                  <a href="#olvido" className="text-success text-decoration-none fw-semibold small">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-success btn-lg fw-bold rounded-3 shadow-sm py-2 fs-6">
                    Ingresar al Sistema
                  </button>
                </div>
              </form>
            </div>

            <div className="pt-3 border-top mt-4 d-flex justify-content-between align-items-center">
              <Link to="/" className="text-secondary text-decoration-none small">
                <i className="bi bi-house-door me-1"></i> Inicio
              </Link>
              <small className="text-muted">
                ¿No tienes cuenta?{' '}
                <Link to="/registro" className="text-success text-decoration-none fw-bold">
                  Regístrate
                </Link>
              </small>
            </div>
          </div>

          {/* LADO DERECHO: Carrusel con Imagen de Fondo y Capa Verde */}
          <div
            className="col-lg-6 text-white p-4 p-md-5 d-flex flex-column justify-content-between position-relative"
            style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 70, 25, 0.45) 0%, rgba(0, 0, 0, 0.75) 100%), url(${slides[activeSlide].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.8s ease-in-out',
            minHeight: '480px',
}}
          >
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge bg-white text-success fw-bold px-3 py-2 rounded-pill shadow-sm">
                SENA Regional Cauca
              </span>
              <small className="text-white-50 fw-semibold">Programas</small>
            </div>

            <div className="my-auto py-4 text-center">
              <div className="mb-4">
                <div
                  className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: '110px', height: '110px' }}
                >
                  <i className={`bi ${slides[activeSlide].icon} display-4 text-warning`}></i>
                </div>
              </div>

              <h4 className="fw-bold mb-2">{slides[activeSlide].title}</h4>
              <p className="text-white-50 small mx-auto" style={{ maxWidth: '340px' }}>
                {slides[activeSlide].description}
              </p>
            </div>

            <div className="d-flex justify-content-center gap-2 pb-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  style={{
                    width: activeSlide === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: activeSlide === index ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}