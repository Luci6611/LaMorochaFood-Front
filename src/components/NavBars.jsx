import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cookies from 'universal-cookie';

const NavBars = () => {


  const [token, setToken] = useState(false);


  const pathname = useRouter();

  useEffect(() => {

    const handleCookieChange = () => {
      const cookie = new Cookies();

      if (cookie.get("token")) {
        setToken(true);
      }
    };

    handleCookieChange();

    const interval = setInterval(handleCookieChange, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };

  }, [pathname])




  const logOut = () => {
    swal(`Gracias por visitarnos, ¡vuelve pronto!`, { icon: "success" }).then((active) => {
      if (active) {
        const cookie = new Cookies();
        location.replace("/");
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("nombreUsuario");
        cookie.remove("token");
        setToken(false);
      }
    });
  }

  return (
    <>
 
      <Navbar expand="lg" className="rounded-bottom bg-darkblue text-bg-danger control-res ">
        <Container className=' w-100'>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav " >
            <Link href="/" className='nav-link'>
              <div className="conteinerlogo">
                <img className='navlogo' src="/Lamorochalogo2.png" alt="logo" /></div>
            </Link>
            <Nav className="ms-auto text-light">
              <Link className="ms-auto nav-link text-light" id='lin' href="/">
                INICIO
              </Link>
              <Link className="ms-auto nav-link text-light" id='lin' href="/menus">
                MENUS
              </Link>
              <Link className="ms-auto nav-link text-light" id='lin' href="/conocenos">
                CONOCENOS!
              </Link>
        


              {
                token ?
                  <>
                    <Link className='text-light nav-link' href="/admi">Administracion</Link>
                    <a title="Cerrar session" className="ms-auto nav-link " onClick={logOut}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right text-light" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                      </svg>
                    </a>
                  </>

                  :

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