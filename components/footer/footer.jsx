import React from 'react'
import pie from '../../src/assets/img/banner-pie-de-pagina-web.png'
import './footer.css';

export const footer = () => {
  return (

    <footer id="footer">
      <div class="copyright text-center">
        <div class="credits">
        <img src={pie} className="logo" alt="pie" />

        </div>
      </div>
    </footer>
  )
}

export default footer