import { traerMenus } from '@/helpers/admi';
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

const menus = () => {

    const [menus, setMenus] = useState([]);


   const traerData = async ()=>{
   const data = await traerMenus();
   setMenus(data);
   console.log(data);

    }

    useEffect(() => {
      
        traerData()

    }, [])
    
    return (


        <>
            <Head>
                <title>La Morocha - Menus</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="styles-sheets" href="../stylescomponents.css" />
            </Head>
            <h1>menus</h1>

            <div className="container">
                {
                     menus.map((index)=>{

                        <Card id="cardd" className="card-ofertas" key={index.id}>
                        <div className="img-oferta">
                          <Card.Img variant="top" src={index.img} />
                        </div>
                        <Card.Body className="d-flex justify-content-center flex-column">
                          <Card.Title className="text-center">{index.titulo}</Card.Title>
                          <Card.Title className="text-center">
                            {index.descripcion}
                          </Card.Title>
                          <Card.Title className="text-center">$ {index.precio}</Card.Title>
                          <button type="button" className="bt">
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
                          </button>
                        </Card.Body>
                      </Card>
                     })

                }
            </div>
        </>

    )
}

export default menus