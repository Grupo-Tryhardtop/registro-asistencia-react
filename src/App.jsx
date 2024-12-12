import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Footer from '../components/footer/footer.jsx'
import Header from '../components/header/header.jsx'
import Tabla from '../components/tabla/tabla.jsx'
import Error from "../components/error 404/error404.jsx";


function App() {

  return (
    <>
     
    <Router>
      <div>
        <Header/>

        <Main>
          <Switch>
            <Route/>
            <Route path="/tabla" component={Tabla} />
            <Route path="/" exact component={Dashboard} />
            <Route component={Error} /> {/* Ruta para manejar 404 */}
            

          </Switch>
        </Main>
        <Footer/>
      </div>
    </Router>

    

    </>
  )
}

export default App
