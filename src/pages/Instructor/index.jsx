import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditInstructor  from "./create";
import ShowInstructor from "./show";

export default function ListInstructors() {
  const [instructores, setInstructores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [selectedInstructorShow, setSelectedInstructorShow] = useState(null);

  useEffect(() => {
    const storedInstructores = JSON.parse(localStorage.getItem("instructores")) || [];
    setInstructores(storedInstructores); // Corregido el nombre a setInstructores
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este instructor del sistema AdminSENA?")) {
      const updatedInstructores = instructores.filter((instructor) => instructor.id !== id);
      setInstructores(updatedInstructores);
      localStorage.setItem("instructores", JSON.stringify(updatedInstructores));
    }
  };

  const handleSaveUpdatedList = (updatedList) => {
    setInstructores(updatedList);
    localStorage.setItem("instructores", JSON.stringify(updatedList));
  };

  return (
    <div className="container-fluid px-0">
      <div className="card shadow-sm border-0 rounded-4">
        
        {/* Encabezado Verde SENA */}
        <div
          className="card-header text-white p-4 rounded-top-4"
          style={{
            background: "linear-gradient(135deg, #198754 0%, #0d5132 100%)",
          }}
        >
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <h3 className="mb-0 fw-bold">Instructores</h3>
              <p className="text-white-50 small mb-0 mt-1">
                Gestión y control de instructores asignados - SENA Regional Cauca
              </p>
            </div>
            <Link
              to="/instructores/crear"
              className="btn btn-light text-success btn-sm fw-bold d-inline-flex align-items-center px-3 py-2 rounded-3 shadow-sm"
            >
              <i className="bi bi-plus-circle me-1"></i> Nuevo Instructor
            </Link>
          </div>
        </div>

        {/* Cuerpo de la tabla */}
        <div className="card-body p-4">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="text-muted small mt-2">Cargando instructores...</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0 w-100">
                <thead className="table-light text-center fs-7">
                  <tr className="text-uppercase text-muted">
                    <th scope="col" className="py-3">ID</th>
                    <th scope="col" className="py-3 text-start">Nombre</th>
                    <th scope="col" className="py-3">Correo Electrónico</th>
                    <th scope="col" className="py-3">Área</th>
                    <th scope="col" className="py-3">Centro de Formación</th>
                    <th scope="col" className="py-3 text-center" style={{ width: "180px" }}>
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {instructores.length > 0 ? (
                    instructores.map((instructor) => (
                      <tr key={instructor.id} className="text-center">
                        <td className="fw-semibold text-dark">{instructor.id}</td>
                        <td className="text-start fw-bold text-dark">
                          {instructor.nombre || instructor.name}
                        </td>
                        <td className="text-secondary">{instructor.correo || instructor.email}</td>
                        <td className="text-secondary">
                          {instructor.area?.nombre || instructor.area?.name || "N/A"}
                        </td>
                        <td className="text-secondary">
                          <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 fw-bold">
                            {instructor.centro_formacion?.nombre || instructor.training_center?.name || "N/A"}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            {/* Botón Ver */}
                            <button
                              type="button"
                              onClick={() => setSelectedInstructorShow(instructor)}
                              className="btn btn-outline-success btn-icon"
                              title="Ver detalles"
                            >
                              <i className="bi bi-eye"></i>
                            </button>

                            {/* Botón Editar */}
                            <button
                              type="button"
                              onClick={() => setSelectedInstructor(instructor)}
                              className="btn btn-outline-primary btn-icon"
                              title="Editar instructor"
                            >
                              <i className="bi bi-pencil"></i>
                            </button>

                            {/* Botón Eliminar */}
                            <button
                              type="button"
                              onClick={() => handleDelete(instructor.id)}
                              className="btn btn-outline-danger btn-icon"
                              title="Eliminar instructor"
                            >
                              <i className="bi bi-trash3"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center text-muted py-5">
                        <i className="bi bi-folder2-open display-4 text-muted mb-3 d-block"></i>
                        No hay instructores registrados actualmente en el sistema.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Componente Modal / Vista para Editar */}
      {selectedInstructor && (
        <EditInstructor
          instructor={selectedInstructor}
          onClose={() => setSelectedInstructor(null)}
          onSave={handleSaveUpdatedList}
        />
      )}

      {/* Componente Modal / Vista para Mostrar */}
      {selectedInstructorShow && (
        <ShowInstructor
          instructor={selectedInstructorShow}
          onClose={() => setSelectedInstructorShow(null)}
        />
      )}

      <style>{`
        .fs-7 { font-size: 0.8rem; }
        .btn-icon {
          width: 36px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          padding: 0;
        }
        .btn-icon i { font-size: 16px; }
      `}</style>
    </div>
  );
}