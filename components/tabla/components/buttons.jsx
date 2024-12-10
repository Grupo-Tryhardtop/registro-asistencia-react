// src/components/PersonasRegistradas.jsx
import React from 'react';
import './tabla.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const buttons = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Lista de Personas Registradas</h1>
      <div className="buttons">
        <label htmlFor="date" className="label-date">Asigna una fecha:</label>
        <input className="input-date" type="date" id="fecha" />
        <button id="descargar" className="btn btn-primary mb-2">Descargar CSV</button>
        <button id="descargar2" className="btn btn-primary mb-2">Descargar CSV del Día Actual</button>
      </div>
      <div className="container mt-5">
        <h5 className="mb-4">Descargar Datos por Rango de Fechas</h5>
        <div className="mb-3">
          <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
          <input type="date" id="fechaInicio" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaFin" className="form-label">Fecha de Fin</label>
          <input type="date" id="fechaFin" className="form-control" required />
        </div>
        <button id="descargar3" className="btn btn-success">Descargar rango de fecha</button>
      </div>
    </div>
  );
};

export default buttons;
