import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBars = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container  className="me-auto d-flex justify-content-around">
          <Link href="/" className='nav-link'>Hamburgueseria La Morocha</Link>
          <Nav>

            <Link href="/" className='nav-link'>INICIO</Link>
            <Link href="/conocenos" className='nav-link'>CONOCENOS</Link>
            <Link href="/contacto" className='nav-link'>CONTACTO</Link>
            <Link href="/menus" className='nav-link'>MENUS</Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBars