import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSena from '../assets/logo sena.png'; 
import Comunidad from "../assets/comunidad.jpg"; 
import Seguridad from '../assets/seguridad.jpg'; 
import Unete from '../assets/unete.jpg'; 

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    document_type: '',
    document: '',
    email: '',
    role: '',
    password: '',
    password_confirmation: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Arreglo de slides idéntico al Login con fondo dynamic overlay
  const slides = [
    {
      bgImage: Unete,
      icon: 'bi-person-plus-fill',
      title: 'Únete a la Plataforma',
      description: 'Crea tu usuario para acceder al sistema de gestión académica y control de fichas.',
    },
    {
      bgImage: Seguridad,
      icon: 'bi-shield-check',
      title: 'Acceso Seguro y Acreditado',
      description: 'Administración de recursos tecnológicos y consulta de ambientes de aprendizaje.',
    },
    {
      bgImage: Comunidad,
      icon: 'bi-person-badge-fill',
      title: 'Comunidad Educativa SENA',
      description: 'Integración continua para instructores, aprendices y personal administrativo.',
    },
  ];

  // Cambio automático de diapositiva
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (formData.password !== formData.password_confirmation) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    console.log('Datos de registro enviados:', formData);
    // Redirección hacia el dashboard de administración tras completar registro
    navigate('/AdminDashboard');
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light px-3 py-4">
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '1000px' }}>
        <div className="row g-0">
          
          {/* LADO IZQUIERDO: Carrusel Dinámico con Imágenes y Overlay */}
          <div
            className="col-lg-5 text-white p-4 p-md-5 d-flex flex-column justify-content-between position-relative d-none d-lg-flex"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 70, 25, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%), url(${slides[activeSlide].bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'background-image 0.8s ease-in-out',
              minHeight: '550px',
            }}
          >
            {/* Header Lateral */}
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge bg-white text-success fw-bold px-3 py-2 rounded-pill shadow-sm">
                SENA Regional Cauca
              </span>
            </div>

            {/* Ilustración / Info Slide */}
            <div className="my-auto py-4 text-center">
              <div className="mb-4">
                <div
                  className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: '100px', height: '100px' }}
                >
                  <i className={`bi ${slides[activeSlide].icon} display-4 text-warning`}></i>
                </div>
              </div>

              <h4 className="fw-bold mb-2">{slides[activeSlide].title}</h4>
              <p className="text-white-50 small mx-auto" style={{ maxWidth: '320px' }}>
                {slides[activeSlide].description}
              </p>
            </div>

            {/* Dots del Carrusel */}
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

          {/* LADO DERECHO: Formulario de Registro */}
          <div className="col-lg-7 bg-white p-4 p-md-5 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                <img 
                  src={logoSena} 
                  alt="Logo SENA" 
                  style={{ width: '55px', height: 'auto', display: 'block' }} 
                />
              </div>

              <div className="mb-4 text-center">
                <h3 className="fw-bold text-dark mb-1">Crear Cuenta</h3>
                <p className="text-muted small">Diligencia tus datos para registrarte en la plataforma AdminSENA.</p>
              </div>

              {/* Mensaje de Error */}
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
                {/* Nombre Completo */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold text-secondary small">
                    Nombre Completo
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">
                      <i className="bi bi-person"></i>
                    </span>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      className="form-control bg-light border-start-0 ps-0 fs-6 py-2" 
                      placeholder="Ej: Juan Pérez" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                {/* Tipo y Número de Documento (2 Columnas) */}
                <div className="row g-2 mb-3">
                  <div className="col-md-5">
                    <label htmlFor="document_type" className="form-label fw-semibold text-secondary small">
                      Tipo Doc.
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <i className="bi bi-card-text"></i>
                      </span>
                      <select 
                        name="document_type" 
                        id="document_type" 
                        className="form-select bg-light border-start-0 ps-0 fs-6 py-2" 
                        value={formData.document_type}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Seleccionar...</option>
                        <option value="CC">C.C.</option>
                        <option value="TI">T.I.</option>
                        <option value="CE">C.E.</option>
                        <option value="PEP">P.E.P.</option>
                        <option value="PP">Pasaporte</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <label htmlFor="document" className="form-label fw-semibold text-secondary small">
                      Número de Documento
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <i className="bi bi-card-heading"></i>
                      </span>
                      <input 
                        type="text" 
                        name="document" 
                        id="document" 
                        className="form-control bg-light border-start-0 ps-0 fs-6 py-2" 
                        placeholder="Ej: 1061700123" 
                        value={formData.document}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Correo Electrónico y Rol (2 Columnas) */}
                <div className="row g-2 mb-3">
                  <div className="col-md-7">
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

                  <div className="col-md-5">
                    <label htmlFor="role" className="form-label fw-semibold text-secondary small">
                      Tipo de Rol
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <i className="bi bi-shield-check"></i>
                      </span>
                      <select 
                        name="role" 
                        id="role" 
                        className="form-select bg-light border-start-0 ps-0 fs-6 py-2" 
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Rol...</option>
                        <option value="user">Aprendiz</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Administrador</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contraseña y Confirmación (2 Columnas) */}
                <div className="row g-2 mb-4">
                  <div className="col-md-6">
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

                  <div className="col-md-6">
                    <label htmlFor="password_confirmation" className="form-label fw-semibold text-secondary small">
                      Confirmar Contraseña
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 text-muted">
                        <i className="bi bi-check-circle"></i>
                      </span>
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        name="password_confirmation" 
                        id="password_confirmation" 
                        className="form-control bg-light border-start-0 ps-0 fs-6 py-2" 
                        placeholder="••••••••" 
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Botón Registrase */}
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-success btn-lg fw-bold rounded-3 shadow-sm py-2 fs-6">
                    Completar Registro
                  </button>
                </div>
              </form>
            </div>

            {/* Accesos Secundarios */}
            <div className="pt-3 border-top mt-3 d-flex justify-content-between align-items-center">
              <Link to="/" className="text-secondary text-decoration-none small">
                <i className="bi bi-house-door me-1"></i> Inicio
              </Link>
              <small className="text-muted">
                ¿Ya tienes cuenta?{' '}
                <Link to="/login" className="text-success text-decoration-none fw-bold">
                  Inicia sesión aquí
                </Link>
              </small>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}