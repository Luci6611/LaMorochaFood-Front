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
          <li>Whatsapp: 4566565</li>
         </ol>

        </div>
        <p className='text-center'>
        © Copyright Luno 2023
        </p>
    </footer>
  )
}

export default Footer