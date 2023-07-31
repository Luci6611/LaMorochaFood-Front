import { traerMenusMasVendidos } from "@/helpers/getOfertas";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Ofertas = () => {



  const [menus, setMenus] = useState([]);
  const menusFilter = menus.filter(menu => menu.categoria.nombre === "MAS VENDIDAS");

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
          menus.filter(menu => menu.categoria.nombre === "MAS VENDIDAS") ?
            menusFilter.map(index => (
              <Card id="cardd" className="card-ofertas " key={index.nombre}>
                <div className="img-oferta">
                  <Card.Img variant="top" src={index.img} alt={index.titulo} />
                </div>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <Card.Title className="text-center card-titulocolor">{index.nombre}</Card.Title>
                  <Card.Text className="text-center text-white">
                    {index.descripcion}
                  </Card.Text>
                  <Card.Text className="text-center text-light">
                    { index.disponible === true ? "Disponible": "No disponible"}
                  </Card.Text>
                  <Card.Title className="text-center text-white">$ {index.precio}</Card.Title>
                  <a type="button" className="bt"  target='_blank' href={`https://api.whatsapp.com/send?phone=541171044620&text=%C2%A1Hola!%20%F0%9F%98%80%20%C2%BFComo%20Estas%3F%20Quer%C3%ADa%20pedir%20este%20menu%20${index.nombre}%C3%BA%20%F0%9F%8D%94%20Muchas%20Gracias!%20%F0%9F%98%9C%F0%9F%98%8B`}>
                    <span className="button__text">Pedir</span>
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
                  </a>
                </Card.Body>
              </Card>
            )) : <></>
        }

      </div>
    </section>
  );
};

export default Ofertas;
