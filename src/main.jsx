import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from '../components/footer/footer.jsx'
import Header from '../components/header/header.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />   
     </StrictMode>,
)
