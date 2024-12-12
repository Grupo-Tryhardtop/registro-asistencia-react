import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import './error.css'

function NotFoundPage() {
  return (
    <main>
      <h1>4<span><FontAwesomeIcon icon={faGhost} /></span>4</h1>
      <h2>Error: Página no encontrada (404)</h2>
      <p>Lo sentimos, la página que estás buscando no está disponible.</p>
    </main>
  );
}

export default NotFoundPage;