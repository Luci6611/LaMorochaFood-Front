import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBars = () => {
  return (
    <>
      <Navbar variant="dark" >
        <Container className="me-auto d-flex justify-content-around flex-wrap">
          <Link href="/" className='nav-link'>Hamburgueseria La Morocha</Link>
          <Nav className='text-light'>

            <Link href="/" className='nav-link fw-bold'>INICIO</Link>
            <Link href="/menus" className='nav-link fw-bold'>MENUS</Link>
            <Link href="/conocenos" className='nav-link fw-bold'>CONOCENOS!</Link>
            <Link href="/contacto" className='nav-link fw-bold'>CONTACTO</Link>
            {
             
              <Link href="/admin" className='nav-link fw-bold'>LOGIN</Link>

            }


          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBars