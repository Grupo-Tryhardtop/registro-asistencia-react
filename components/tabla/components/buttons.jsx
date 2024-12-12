import React, { useState } from 'react';

const urlApi = "http://172.16.2.8:3001";

const DescargarDatos = () => {
  const [fecha, setFecha] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const convertirACSV = (datos) => {
    if (datos.length === 0) {
      return 'No hay datos disponibles.\n';
    }
    const cabeceras = Object.keys(datos[0]).join(',') + '\n';
    const filas = datos.map(fila => Object.values(fila).join(',')).join('\n');
    return cabeceras + filas;
  };

  const descargarCSV = async (fechaConsulta) => {
    if (!fechaConsulta) {
      alert('Por favor, selecciona una fecha.');
      return;
    }

    try {
      const response = await fetch(`${urlApi}/listaPersonas?fecha=${fechaConsulta}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await response.json();
      const csv = convertirACSV(datos);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.setAttribute('download', `datos_${fechaConsulta}.csv`);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al descargar los datos.');
    }
  };

  const handleDescargar = () => {
    descargarCSV(fecha);
  };

  const handleDescargarHoy = () => {
    const fechaHoy = new Date().toISOString().split('T')[0];
    descargarCSV(fechaHoy);
  };

  const handleDescargarRango = async () => {
    if (!fechaInicio || !fechaFin) {
      alert('Por favor, selecciona ambas fechas.');
      return;
    }

    try {
      const response = await fetch(`${urlApi}/listaPersonas?fecha-inicio=${fechaInicio}&fecha-final=${fechaFin}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const datos = await response.json();
      const csv = convertirACSV(datos);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.setAttribute('download', `datos_${fechaInicio}_a_${fechaFin}.csv`);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al descargar los datos.');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Lista de Personas Registradas</h1>
      <div className="buttons">
        <label htmlFor="fecha" className="label-date">Asigna una fecha:</label>
        <input className="input-date" type="date" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <button id="descargar" className="btn btn-primary mb-2" onClick={handleDescargar}>Descargar CSV</button>
        <button id="descargar2" className="btn btn-primary mb-2" onClick={handleDescargarHoy}>Descargar CSV del Día Actual</button>
      </div>
      <div className="container mt-5">
        <h5 className="mb-4">Descargar Datos por Rango de Fechas</h5>
        <div className="mb-3">
          <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
          <input type="date" id="fechaInicio" className="form-control" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaFin" className="form-label">Fecha de Fin</label>
          <input type="date" id="fechaFin" className="form-control" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required />
        </div>
        <button id="descargar3" className="btn btn-success" onClick={handleDescargarRango}>Descargar rango de fecha</button>
      </div>
    </div>
  );
};

export default DescargarDatos;