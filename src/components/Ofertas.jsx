import React from "react";
import Card from "react-bootstrap/Card";

const Ofertas = () => {
  return (
    <section className="p-3 seccion-ofertas">
      <h3 className="text-center" id="titulo-ofertas">
        NUESTRAS MAS VENDIDAS
      </h3>
      <div className="p-3 d-flex flex-wrap justify-content-center gap-4 contenedor-ofer">
        <Card id="cardd" className="card-ofertas">
          <div className="img-oferta">
            <Card.Img variant="top" src="/fondo4.jpg" />
          </div>
          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Title className="text-center">Big MAC</Card.Title>
            <Card.Title className="text-center">
              Nuestra hamburguesa con papas y gaseosa
            </Card.Title>
            <Card.Title className="text-center">$123</Card.Title>
            <button type="button" class="bt">
              <span class="button__text">Pedir</span>
              <span class="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  class="svg"
                >
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
          </Card.Body>
        </Card>
        <Card id="cardd" className="card-ofertas">
          <div className="img-oferta">
            <Card.Img variant="top" src="/fondo4.jpg" />
          </div>

          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Title className="text-center">Big MAC</Card.Title>
            <Card.Title className="text-center">
              Nuestra hamburguesa con papas y gaseosa
            </Card.Title>
            <Card.Title className="text-center">$123</Card.Title>

            <button type="button" class="bt">
              <span class="button__text">Pedir</span>
              <span class="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  class="svg"
                >
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
          </Card.Body>
        </Card>
        <Card id="cardd" className="card-ofertas">
          <div className="img-oferta">
            <Card.Img variant="top" src="/fondo4.jpg" />
          </div>
          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Title className="text-center">Big MAC</Card.Title>
            <Card.Title className="text-center">
              Nuestra hamburguesa con papas y gaseosa
            </Card.Title>
            <Card.Title className="text-center">$123</Card.Title>
            <button type="button" class="bt">
              <span class="button__text">Pedir</span>
              <span class="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  class="svg"
                >
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default Ofertas;
