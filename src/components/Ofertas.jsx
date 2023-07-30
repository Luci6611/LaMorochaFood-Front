import { traerMenusMasVendidos } from "@/helpers/getOfertas";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Ofertas = () => {



  const [menus, setMenus] = useState([]);
  const menusFilter = menus.filter(menu => menu.categoria.nombre === "mas vendido");

  const traerMenusExitosos = async () => {
    const response = await traerMenusMasVendidos();
    setMenus(response);
  };

  useEffect(() => {
    traerMenusExitosos();

  }, []);

  return (
    <section className="p-3 seccion-ofertas">
      <h3 className="text-center" id="titulo-ofertas">
        NUESTRAS MAS VENDIDAS
      </h3>
      <div className="p-3 d-flex flex-wrap justify-content-center gap-4 contenedor-ofer">

        {
          menus.filter(menu => menu.categoria.nombre === "mas vendido") ?
            menusFilter.map(index => (
              <Card id="cardd" className="card-ofertas ">
                <div className="img-oferta">
                  <Card.Img variant="top" src="/fondo4.jpg" alt="masVendido" />
                </div>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <Card.Title className="text-center card-titulocolor">Big MAC</Card.Title>
                  <Card.Title className="text-center text-white">
                    Nuestra hamburguesa con papas y gaseosa
                  </Card.Title>
                  <Card.Title className="text-center text-white">$123</Card.Title>
                  <button type="button" className="bt">
                    <span className="button__text fw-bold">Pedir</span>
                    <span className="button__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentColor"
                        height="24"
                        fill="none"
                        className="svg"
                      >
                        <line y2="19" y1="5" x2="12" x1="12"></line>
                        <line y2="12" y1="12" x2="19" x1="5"></line>
                      </svg>
                    </span>
                  </button>
                </Card.Body>
              </Card>
            )) : <></>
        }

      </div>
    </section>
  );
};

export default Ofertas;
