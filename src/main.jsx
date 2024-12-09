import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from '../components/footer/footer.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
)
