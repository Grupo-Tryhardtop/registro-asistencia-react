import React, { useEffect, useState } from 'react';
import './tabla.css';

const urlApi = "http://172.16.2.8:3001";

const TablaPersonas = () => {
  const [personas, setPersonas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `${urlApi}/listaPersonas`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        setPersonas(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setError('Error al cargar los datos.');
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Cédula</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Genero</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Nacionalidad</th>
            <th>Estado</th>
            <th>Municipio</th>
            <th>Parroquia</th>
            <th>Descripcion</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody id="personasTabla">
          {error ? (
            <tr>
              <td colSpan="13" className="text-center text-danger">{error}</td>
            </tr>
          ) : (
            personas.map((persona, index) => (
              <tr key={persona.cedula_id}>
                <td>{index + 1}</td>
                <td>{persona.cedula_id}</td>
                <td>{`${persona.primer_nombre} ${persona.segundo_nombre}`}</td>
                <td>{`${persona.primer_apellido} ${persona.segundo_apellido}`}</td>
                <td>{persona.genero}</td>
                <td>{persona.email}</td>
                <td>{persona.telf}</td>
                <td>{persona.nacionalidad}</td>
                <td>{persona.estado}</td>
                <td>{persona.municipio}</td>
                <td>{persona.parroquia}</td>
                <td>{persona.descripcion}</td>
                <td>{new Date(persona.created_at).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPersonas;
