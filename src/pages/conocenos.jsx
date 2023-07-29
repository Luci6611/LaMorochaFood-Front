import React from 'react'
import Image from 'next/image'

const conocenos = () => {
  return (
    <div className='body-sobre-nosotros '>
<div className="contenedor-nosotros">
  <h1>La Morocha</h1>
  <hr className='hrsobrenosotros' />
  <div className="cont-img-sobrenosotros">

  <img src="/lamorochalogo2.jpg" alt="lamorochalogo" />
  </div>
  <h2>como surgio?</h2>
  <div className="sobrenosotrosuno">
    <div className="hamburguesauno-nosotros">
    <img className='imguno' src="/fondo3.jpg" alt="hamburguesa" /></div>
    <div className="textouno">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur nostrum? Distinctio dolor illo assumenda saepe alias quae exercitationem. Odit ipsum, earum eum expedita dolores quisquam ducimus tenetur aliquid ex.</p></div>
  </div>
  <div className="sobrenosotrosdos">
    <div className="textodos">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur nostrum? Distinctio dolor illo assumenda saepe alias quae exercitationem. Odit ipsum, earum eum expedita dolores quisquam ducimus tenetur aliquid ex.</p></div>
    <div className="hamburguesdos-nosotros">
    <img src="/fondo5.jpg" alt="hamburguesa" /></div>
  </div>
  <h2>Nuestro equipo</h2>
  <div className="equipocontenedor">
    <img src="/personauno.jpg" alt="" />
    <img src="/personauno.jpg" alt="" />
    <img src="/personauno.jpg" alt="" />
  </div>
</div>


    </div>
  )
}

export default conocenos