import React from 'react'
import './header.css'; // Importa el archivo CSS
import cintillo from '../../src/assets/img/cintillo.png'

export const header = () => {
    return (

      
            <div className='pie'>
                <a href="#" target="_blank">
                    <img src={cintillo} className="logo" alt="pie" />
                </a>
            </div>
       
    )
}

export default header;