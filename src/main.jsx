import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from '../components/dashboard/dashboard.jsx'
// import Footer from '../components/footer/footer.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Dashboard/>
    
  </StrictMode>,
)
