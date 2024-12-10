import React from 'react'
import './tabla.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const table = () => {
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
      </tbody>
    </table>
  </div>
  )
}

export default table