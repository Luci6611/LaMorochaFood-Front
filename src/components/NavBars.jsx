import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBars = () => {
  return (
    <>

     <Navbar expand="lg" className="rounded-bottom bg-darkblue">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Link href="/" className='nav-link'>
          <div className="conteinerlogo">
          <img className='navlogo' src="/Lamorochalogo2.jpg" alt="" /></div>
          </Link>
          <Nav className="ms-auto text-light">
            <Link className="ms-auto nav-link text-light" id='lin' href="/">
              INICIO
            </Link>
            <Link className="ms-auto nav-link text-light" href="/menus">
              MENUS
            </Link>
            <Link className="ms-auto nav-link text-light" href="/conocenos">
              CONOCENOS!
            </Link>
            <Link className="ms-auto nav-link text-light" href="/contacto">
            CONTACTO
            </Link>
            <Link className="ms-auto nav-link text-light" href="/login">
            <i class="bi bi-0-circle-fill"></i>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBars