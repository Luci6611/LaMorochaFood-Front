import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className='container-fluid  p-3 footer text-light  position-relative bottom-0'>
      <div className='container p-3'>
        <div className='row'>
          <ol id='contacto' className='col-sm-6 col-md-6'>
            <li> <h2>contacto </h2></li>
            <li >Cel: <span className='fw-bold'>4566565</span> </li>
            <li >Whatsapp: <span className='fw-bold'>4566565</span> </li>
            <li >Instagram: <span className='fw-bold'>4566565</span></li>
            <li >Facebook: <span className='fw-bold'>4566565</span></li>
          </ol>

          <ol className='col-sm-6 col-md-6'>
            <li> <h2>ubicacion</h2></li>
            <li className='mapa'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.231508505068!2d-58.4924863!3d-34.699340299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf46526d3079%3A0x6c90fac6c6956c47!2sLa%20Morocha%20Food!5e0!3m2!1ses!2sar!4v1683651445643!5m2!1ses!2sar" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></li>
          </ol>
        </div>
      </div>

      <p className='text-center fw-bold'>
        © Copyright Luno 2023
      </p>
    </footer>
  )
}

export default Footer