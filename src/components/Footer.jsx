import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className='w-100  p-3  bg-dark text-light  position-relative bottom-0'>
        <div className='container d-flex justify-content-around'>
         <ol>
          <h2>contacto</h2>
          <li>Whatsapp: 4566565</li>
          <li>Cel: 4566565</li>
          <li>Instagram: 4566565</li>
          <li>Facebook: 4566565</li>
         </ol>

         <ol>
          <h2>ubicacion</h2>
          <li className='mapa'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.231508505068!2d-58.4924863!3d-34.699340299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf46526d3079%3A0x6c90fac6c6956c47!2sLa%20Morocha%20Food!5e0!3m2!1ses!2sar!4v1683651445643!5m2!1ses!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
         </ol>

        </div>
        <p className='text-center'>
        © Copyright Luno 2023
        </p>
    </footer>
  )
}

export default Footer