import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoSena from '../../assets/logo sena.png'; 

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('resumen');
  const [selectedEntity, setSelectedEntity] = useState('area');
  
  // Estados de Modales
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Estado del Perfil y Foto (Cargador de Foto)
  const [user, setUser] = useState({
    name: 'Eduardo',
    role: 'Administrador ADSO',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' // Placeholder inicial
  });
  const fileInputRef = useRef(null);

  // Manejador para actualizar foto de perfil
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const entities = [
    { id: 'area', label: 'Áreas', icon: 'bi-grid-1x2', count: 12, total: 137 },
    { id: 'centro', label: 'Centros', icon: 'bi-building', count: 1, total: 4 },
    { id: 'computador', label: 'Computadores', icon: 'bi-laptop', count: 13, total: 48 },
    { id: 'curso', label: 'Cursos', icon: 'bi-journal-bookmark', count: 8, total: 32 },
    { id: 'instructor', label: 'Instructores', icon: 'bi-person-badge', count: 20, total: 61 },
    { id: 'programa', label: 'Programas', icon: 'bi-mortarboard', count: 6, total: 15 },
    { id: 'ambiente', label: 'Ambientes', icon: 'bi-door-open', count: 15, total: 24 },
    { id: 'anuncio', label: 'Anuncios', icon: 'bi-megaphone', count: 3, total: 10 },
    { id: 'oferta', label: 'Ofertas', icon: 'bi-briefcase', count: 2, total: 8 },
    { id: 'cohorte', label: 'Cohortes', icon: 'bi-people', count: 4, total: 12 }
  ];

  const [tableData, setTableData] = useState({
    area: [
      { id: 1, nombre: 'Sistemas e Informática', codigo: 'AREA-01', estado: 'Activo' },
      { id: 2, nombre: 'Agroindustria', codigo: 'AREA-02', estado: 'Activo' }
    ],
    centro: [
      { id: 1, nombre: 'Centro CTPI Regional Cauca', ciudad: 'Popayán', estado: 'Activo' }
    ]
  });

  const handleOpenEdit = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleOpenDelete = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setTableData(prev => ({
      ...prev,
      [selectedEntity]: prev[selectedEntity]?.filter(i => i.id !== selectedItem.id) || []
    }));
    setShowDeleteModal(false);
  };

  return (
    <div className="d-flex min-vh-100 p-3 p-lg-4" style={{ backgroundColor: '#f4f5f7', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Input oculto para subir la foto */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleAvatarChange} 
        accept="image/*" 
        className="d-none" 
      />

      {/* 1. SIDEBAR ESTILO UI MODERNO ULTRA-OSCURO (Diseño Curvo) */}
      <aside 
        className="text-white d-flex flex-column justify-content-between p-3 me-3 me-lg-4 shadow-lg flex-shrink-0"
        style={{ width: '250px', minHeight: 'calc(100vh - 2rem)', borderRadius: '28px', backgroundColor: '#091c0e' }}
      >
        <div className="d-flex flex-column gap-4 pt-2">
          {/* Logo SENA con diseño */}
          <div className="d-flex align-items-center gap-3 px-2">
            <div className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
              <img src={logoSena} alt="SENA Logo" style={{ width: '28px' }} />
            </div>
            <div>
              <h6 className="fw-bold mb-0" style={{ letterSpacing: '0.5px' }}>AdminSENA</h6>
              <span className="badge bg-success bg-opacity-25 text-success" style={{ fontSize: '10px' }}>Regional Cauca</span>
            </div>
          </div>

          <hr className="border-white opacity-10 my-1" />

          {/* Menú Principal */}
          <nav className="d-flex flex-column gap-2 w-100">
            <button 
              onClick={() => setActiveSection('resumen')}
              className={`btn rounded-4 d-flex align-items-center gap-3 border-0 py-3 px-3 w-100 text-start transition-all ${
                activeSection === 'resumen' ? 'bg-white bg-opacity-10 text-white shadow-sm fw-semibold' : 'text-white-50 hover-bg-dark-light'
              }`}
              style={{ borderRadius: '16px' }}
            >
              <i className="bi bi-house-door-fill fs-5 text-success"></i>
              <span className="small">Resumen General</span>
            </button>

            <div className="text-uppercase text-white-50 fw-bold px-3 pt-3 mb-1" style={{ fontSize: '10px', letterSpacing: '0.8px' }}>
              Módulos de Gestión
            </div>

            <div className="d-flex flex-column gap-1 overflow-auto pe-1" style={{ maxHeight: 'calc(100vh - 420px)' }}>
              {entities.map(ent => (
                <button 
                  key={ent.id}
                  onClick={() => { setSelectedEntity(ent.id); setActiveSection('listar'); }}
                  className={`btn rounded-4 d-flex align-items-center justify-content-between border-0 py-2.5 px-3 w-100 text-start transition-all ${
                    selectedEntity === ent.id && activeSection !== 'resumen' ? 'bg-success text-white fw-semibold' : 'text-white-50 hover-bg-dark-light'
                  }`}
                  style={{ borderRadius: '12px' }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <i className={`bi ${ent.icon} fs-6`}></i>
                    <span className="small">{ent.label}</span>
                  </div>
                  <span className="badge bg-white bg-opacity-10 text-white-50 small rounded-pill py-1">{ent.count}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Info de Usuario Inferior / Foto de Perfil */}
<div 
  className="mt-auto border-top border-white border-opacity-10 pt-3"
  style={{ marginTop: 'auto' }} // Asegura que siempre se mantenga al final
>
  <div 
    className="p-3 rounded-4 d-flex flex-column gap-3"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.06)', // Fondo translúcido integrado
      border: '1px solid rgba(255, 255, 255, 0.08)'  // Borde sutil
    }}
  >
    {/* Información de usuario */}
    <div className="d-flex align-items-center gap-3">
      <div className="position-relative flex-shrink-0">
        <img 
          src={user.avatar} 
          alt="Perfil" 
          className="rounded-circle border border-2 border-success" 
          style={{ width: '42px', height: '42px', objectFit: 'cover' }} 
        />
        {/* Indicador de estado en línea */}
        <span 
          className="position-absolute bottom-0 end-0 bg-success border border-dark rounded-circle" 
          style={{ width: '11px', height: '11px', borderWidth: '1.5px' }}
        ></span>
      </div>
      
      <div className="overflow-hidden">
        <h6 className="mb-0 fw-bold text-white text-truncate small" style={{ letterSpacing: '0.3px' }}>
          {user.name}
        </h6>
        <small 
          className="d-block text-truncate" 
          style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.6)' }}
        >
          {user.role}
        </small>
      </div>
    </div>

    {/* Botón de Cerrar Sesión */}
    <Link 
      to="/" 
      className="btn btn-sm d-flex align-items-center justify-content-center gap-2 fw-bold w-100 py-2.5 transition-all" 
      style={{ 
        borderRadius: '12px',
        color: '#ff4d5a', // Rojo suave
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 77, 90, 0.25)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 77, 90, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 77, 90, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = 'rgba(255, 77, 90, 0.25)';
      }}
    >
      Cerrar Sesión <i className="bi bi-box-arrow-right fs-6"></i>
    </Link>
  </div>
</div>
      </aside>

      {/* 2. AREA CENTRAL Y PANEL DE DETALLE (Bento Grid Completo) */}
      <main className="flex-grow-1 d-flex flex-column gap-4 overflow-auto">
        
        {/* TOPBAR / NAVBAR SUPERIOR */}
        <header className="d-flex justify-content-between align-items-center bg-white rounded-4 p-3 px-4 shadow-sm" style={{ borderRadius: '20px' }}>
          <div className="input-group border-0 bg-light rounded-pill px-3 py-1" style={{ maxWidth: '340px' }}>
            <span className="input-group-text bg-transparent border-0 text-muted">
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control bg-transparent border-0 shadow-none text-dark fs-6" 
              placeholder="Buscar áreas, ambientes, instructores..." 
            />
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light rounded-circle border-0 text-muted p-2" style={{ width: '40px', height: '40px' }}>
              <i className="bi bi-bell-fill text-secondary"></i>
            </button>
            
            {/* Foto de Perfil Expandible Dropdown */}
            <div className="d-flex align-items-center gap-2 ps-3 border-start">
              <img 
                src={user.avatar} 
                alt="Mini Perfil" 
                className="rounded-circle border border-2 border-success-subtle cursor-pointer" 
                style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                onClick={() => fileInputRef.current.click()}
                title="Cambiar foto de perfil"
              />
              <div className="d-none d-sm-block">
                <h6 className="mb-0 fw-bold text-dark fs-6">{user.name}</h6>
                <small className="text-muted d-block" style={{ fontSize: '11px' }}>{user.role}</small>
              </div>
            </div>
          </div>
        </header>

        {/* Bento Grid Principal */}
        <div className="row g-4">
          
          {/* COLUMNA IZQUIERDA / CENTRAL */}
          <div className="col-lg-8 d-flex flex-column gap-4">
            
            {/* Banner Ilustrativo de Bienvenida */}
            <div className="text-white p-4 p-md-5 position-relative overflow-hidden d-flex flex-column justify-content-between" 
              style={{ 
                minHeight: '230px', 
                borderRadius: '24px',
                backgroundImage: 'linear-gradient(135deg, #0b2e15 0%, #154522 100%)'
              }}
            >
              <div style={{ maxWidth: '420px', zIndex: 1 }}>
                <span className="badge bg-success bg-opacity-25 text-white border border-white border-opacity-25 rounded-pill px-3 py-1.5 mb-2 small" style={{ fontSize: '11px' }}>
                  Sistema de Gestión ADSO
                </span>
                <h3 className="fw-bolder mb-2 text-white">¡Hola de nuevo, {user.name}!</h3>
                <p className="text-white-50 small mb-4">
                  Un entorno gráfico ultra-premium para optimizar el control de ambientes, asignación de equipos e instructores de la Regional Cauca.
                </p>
                <button 
                  onClick={() => { setSelectedEntity('computador'); setActiveSection('listar'); }}
                  className="btn text-white px-4 py-2 fw-bold" 
                  style={{ backgroundColor: '#eb611a', borderRadius: '12px' }} // Naranja SENA
                >
                  Gestionar Computadores
                </button>
              </div>
              
              {/* Elemento Decorativo */}
              <div className="position-absolute end-0 bottom-0 p-3 opacity-50 d-none d-md-block" style={{ pointerEvents: 'none' }}>
                <i className="bi bi-pc-display text-white" style={{ fontSize: '120px' }}></i>
              </div>
            </div>

            {/* SECCIÓN RESUMEN O SECCIÓN DE LISTADO */}
            {activeSection === 'resumen' ? (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold text-dark mb-0">Módulos Registrados</h6>
                  <small className="text-muted fw-semibold">10 en total</small>
                </div>

                {/* Cards Bento Grid (Módulos Rápidos) */}
                <div className="row g-3">
                  {entities.slice(0, 6).map((ent, idx) => (
                    <div key={ent.id} className="col-12 col-md-4">
                      <div 
                        onClick={() => { setSelectedEntity(ent.id); setActiveSection('listar'); }}
                        className={`p-3.5 rounded-4 shadow-sm border-0 transition-all ${
                          idx === 1 ? 'bg-dark text-white' : 'bg-white text-dark hover-shadow'
                        }`}
                        style={{ borderRadius: '20px', cursor: 'pointer' }}
                      >
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div className={`p-2 rounded-3 d-inline-flex align-items-center justify-content-center ${idx === 1 ? 'bg-white bg-opacity-10 text-white' : 'bg-light text-dark'}`} style={{ width: '38px', height: '38px' }}>
                            <i className={`bi ${ent.icon} fs-5`}></i>
                          </div>
                          <span className={`badge rounded-pill ${idx === 1 ? 'bg-success text-white' : 'bg-success bg-opacity-10 text-success'}`} style={{ fontSize: '10.5px' }}>
                            {ent.count} de {ent.total}
                          </span>
                        </div>
                        <h6 className="fw-bold mb-1 small">{ent.label}</h6>
                        <small className={idx === 1 ? 'text-white-50' : 'text-muted'} style={{ fontSize: '11px' }}>
                          Ir al módulo de control
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* TABLA DE DETALLE / GESTIÓN */
              <div className="bg-white rounded-4 p-4 shadow-sm" style={{ borderRadius: '24px' }}>
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4 gap-2">
                  <div>
                    <h5 className="fw-bold text-dark mb-0">
                      Módulo: <span className="text-success">{entities.find(e => e.id === selectedEntity)?.label}</span>
                    </h5>
                    <small className="text-muted">Administración y control de datos</small>
                  </div>
                  <div className="d-flex gap-2">
                    <button onClick={() => setActiveSection('crear')} className="btn btn-dark btn-sm rounded-pill px-4 fw-bold">+ Registrar</button>
                    <button onClick={() => setActiveSection('resumen')} className="btn btn-outline-secondary btn-sm rounded-pill px-3">Inicio</button>
                  </div>
                </div>

                {/* FORMULARIO CREAR */}
                {activeSection === 'crear' && (
                  <form onSubmit={(e) => { e.preventDefault(); alert('Registro guardado exitosamente'); setActiveSection('listar'); }}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-secondary small">Nombre / Título</label>
                        <input type="text" className="form-control bg-light border-0 rounded-4 py-2" placeholder="Ej. Centro CTPI / Curso Frontend" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-secondary small">Código / Identificador</label>
                        <input type="text" className="form-control bg-light border-0 rounded-4 py-2" placeholder="Ej. COD-1020" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold text-secondary small">Descripción</label>
                        <textarea className="form-control bg-light border-0 rounded-4" rows="3" placeholder="Detalles u observaciones..."></textarea>
                      </div>
                    </div>
                    <div className="mt-4 d-flex justify-content-end gap-2">
                      <button type="button" onClick={() => setActiveSection('listar')} className="btn btn-light rounded-pill px-4">Cancelar</button>
                      <button type="submit" className="btn btn-dark rounded-pill px-4 fw-bold">Guardar Registro</button>
                    </div>
                  </form>
                )}

                {/* TABLA LISTAR */}
                {activeSection === 'listar' && (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead>
                        <tr className="text-muted small border-bottom">
                          <th className="ps-3 py-3">ID</th>
                          <th>Nombre</th>
                          <th>Código / Ref</th>
                          <th>Estado</th>
                          <th className="text-end pe-3">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(tableData[selectedEntity] || [
                          { id: 1, nombre: 'Registro Ejemplo 1', codigo: 'REG-001', estado: 'Activo' },
                          { id: 2, nombre: 'Registro Ejemplo 2', codigo: 'REG-002', estado: 'Activo' }
                        ]).map((item) => (
                          <tr key={item.id}>
                            <td className="ps-3 py-3 fw-bold text-secondary">#{item.id}</td>
                            <td className="fw-semibold text-dark">{item.nombre}</td>
                            <td><span className="badge bg-light text-dark border-0 rounded-pill px-3 py-1">{item.codigo || item.ciudad || 'INFO-01'}</span></td>
                            <td><span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 fw-semibold">{item.estado}</span></td>
                            <td className="text-end pe-3">
                              <button onClick={() => handleOpenEdit(item)} className="btn btn-sm btn-light text-dark rounded-circle me-1" title="Editar">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button onClick={() => handleOpenDelete(item)} className="btn btn-sm btn-light text-danger rounded-circle" title="Eliminar">
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* COLUMNA DERECHA: PANEL DE ADMINISTRACIÓN / PERFIL */}
          <div className="col-lg-4 d-flex flex-column gap-4">
            
            {/* Tarjeta Visual para Editar Perfil del Admin */}
            <div className="bg-white rounded-5 p-4 shadow-sm text-center d-flex flex-column align-items-center justify-content-between" style={{ borderRadius: '24px', minHeight: '340px' }}>
              <div className="w-100 d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold text-dark mb-0">Administración de Perfil</h6>
                <button className="btn btn-light rounded-circle border-0 p-1" onClick={() => fileInputRef.current.click()}>
                  <i className="bi bi-three-dots"></i>
                </button>
              </div>

              {/* Imagen Grande con opción Hover de Edición */}
              <div className="position-relative mb-3 group" onClick={() => fileInputRef.current.click()} style={{ cursor: 'pointer' }}>
                <img 
                  src={user.avatar} 
                  alt="Avatar Grande" 
                  className="rounded-circle border border-4 border-success-subtle shadow" 
                  style={{ width: '110px', height: '110px', objectFit: 'cover' }} 
                />
                <span className="position-absolute bottom-0 end-0 bg-dark text-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '32px', height: '32px' }}>
                  <i className="bi bi-camera-fill small"></i>
                </span>
              </div>

              <div>
                <h5 className="fw-bold text-dark mb-1">{user.name}</h5>
                <small className="text-muted d-block">{user.role}</small>
              </div>

              <hr className="w-100 border-light opacity-100 my-2" />

              {/* Checklist Activo del Admin */}
              <div className="w-100 text-start mt-2">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="check1" defaultChecked />
                  <label className="form-check-label text-dark small" htmlFor="check1">Revisar computadores de la sala de ADSO</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="check2" />
                  <label className="form-check-label text-muted small" htmlFor="check2">Asignar instructores para la siguiente cohorte</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="check3" />
                  <label className="form-check-label text-muted small" htmlFor="check3">Subir cronograma de ambientes</label>
                </div>
              </div>
            </div>

            {/* Tarjeta de Métricas de Datos de Uso */}
            <div className="bg-white rounded-5 p-4 shadow-sm" style={{ borderRadius: '24px' }}>
              <h6 className="fw-bold text-dark mb-3">Estadísticas del Sistema</h6>

              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded-4 mb-2" style={{ borderRadius: '16px' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white text-success p-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-building fs-5"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block" style={{ fontSize: '11px' }}>Centros Activos</small>
                    <strong className="text-dark fs-6">1 Registrado</strong>
                  </div>
                </div>
                <i className="bi bi-chevron-right text-muted"></i>
              </div>

              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded-4 mb-2" style={{ borderRadius: '16px' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white text-primary p-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-person-badge fs-5"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block" style={{ fontSize: '11px' }}>Instructores</small>
                    <strong className="text-dark fs-6">24 Registrados</strong>
                  </div>
                </div>
                <i className="bi bi-chevron-right text-muted"></i>
              </div>

              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded-4" style={{ borderRadius: '16px' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white text-danger p-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-door-open fs-5"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block" style={{ fontSize: '11px' }}>Ambientes</small>
                    <strong className="text-dark fs-6">12 Asignados</strong>
                  </div>
                </div>
                <i className="bi bi-chevron-right text-muted"></i>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* MODAL EDITAR */}
      {showEditModal && (
        <div className="modal d-block bg-dark bg-opacity-50 animate-fade" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-5 border-0 shadow p-3" style={{ borderRadius: '24px' }}>
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold">Editar Registro #{selectedItem?.id}</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold text-secondary small">Nombre</label>
                  <input type="text" className="form-control bg-light border-0 rounded-4 py-2" defaultValue={selectedItem?.nombre} />
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-light rounded-pill" onClick={() => setShowEditModal(false)}>Cancelar</button>
                <button type="button" className="btn btn-dark rounded-pill fw-bold" onClick={() => setShowEditModal(false)}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ELIMINAR */}
      {showDeleteModal && (
        <div className="modal d-block bg-dark bg-opacity-50 animate-fade" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-5 border-0 shadow p-3" style={{ borderRadius: '24px' }}>
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-danger">⚠️ Confirmar Eliminación</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                ¿Seguro que deseas eliminar <strong>"{selectedItem?.nombre}"</strong>?
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-light rounded-pill" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                <button type="button" className="btn btn-danger rounded-pill fw-bold" onClick={handleDeleteConfirm}>Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}