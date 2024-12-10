import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Footer from '../components/footer/footer.jsx'
import Header from '../components/header/header.jsx'
import Tabla from '../components/tabla/tabla.jsx'


function App() {
 
  return (
    <>  
    <Header />
    <Tabla />
    <Footer />
    </>
  )
}

export default App
