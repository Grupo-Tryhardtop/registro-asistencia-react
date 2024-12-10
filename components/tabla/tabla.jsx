import React from 'react';
import './components/logica-tabla.jsx'; // Asegúrate de que este archivo exporte algo si lo necesitas
import Buttons from './components/buttons.jsx';
import Tabla from './components/table.jsx';

const TablaComponent = () => { // Cambia el nombre a TablaComponent o algo similar
  return (
    <>  
      <Buttons />
      <Tabla />
    </>
  );
}

export default TablaComponent; // Exporta el componente
