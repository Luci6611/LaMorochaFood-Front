import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hamburgueseria La Morocha</Navbar.Brand>
          <Nav className="me-auto">

            <Link href="/" className='nav-link'>Home</Link>
            <Link href="/contacto" className='nav-link'>Contacto</Link>
            <Link href="/menus" className='nav-link'>Menus</Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBars