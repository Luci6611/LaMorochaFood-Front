import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBars = () => {
  return (
    <>

      <Navbar expand="lg" className="rounded-bottom bg-darkblue text-bg-danger">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link href="/" className='nav-link'>
              <div className="conteinerlogo">
                <img className='navlogo' src="/Lamorochalogo2.png" alt="logo" /></div>
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
         


              {
        
                  <Link className="mx-auto nav-link text-light pd-0" href="/login">     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill icononav" viewBox="0 0 16 16">
                    <path className='icononav' d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path className="icononav" fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                  </svg></Link> 
               
                
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBars