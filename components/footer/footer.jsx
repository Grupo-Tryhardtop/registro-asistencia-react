import React from 'react'
import pie from '../../src/assets/img/banner-pie-de-pagina-web.png'
import './footer.css'

export const footer = () => {
  return (
    <header class="bienvenida">
        <div className='pie'>
        <a href="https://vite.dev" target="_blank">
          <img src={pie} className="logo" alt="pie" />
        </a>
      </div>
    </header>
  )
}

export default footer