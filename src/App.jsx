import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Footer from '../components/footer/footer.jsx';
//import Header from '../components/header/header.jsx';
import Tabla from '../components/tabla/tabla.jsx';
//import Error from "../components/error 404/error404.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from '../components/dashboard/panel.jsx'

function App() {
  return (
    <>
     <Router>
        <div>
          {/*<Header />*/}
          
          {/* Renderiza el componente Tabla directamente */}
          <Panel/>
          <Tabla /> {/* Este componente se mostrará siempre */}
         
          

          <Routes>
          <Route path="/tabla" element={<Tabla />} /> {/* Ruta para manejar 404 */}
          <Route path='/panel' element={<Panel/>}/>
            {/*<Route path="*" element={<Error />} />*/} 
          </Routes>
          
          {/*<Footer />*/}
        </div>
      </Router>
    </>
  );
}

export default App;
