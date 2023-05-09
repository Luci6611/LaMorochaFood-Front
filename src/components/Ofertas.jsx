import React from 'react'
import Card from 'react-bootstrap/Card';


const Ofertas = () => {
    return (
        <section className='p-3 seccion-ofertas'>
            <h3 className='text-center'>NUESTRAS MAS VENDIDAS</h3>
            <div className='p-3 d-flex flex-wrap justify-content-center gap-4'>
                <Card className='card-ofertas'>
                    <Card.Body>
                    <Card.Img variant="top" src="https://picsum.photos/id/237/50/50" className='position-relative' />

                        <Card.Title className='text-center'>Card Title</Card.Title>
                        <button className='btn btn-danger fw-bold'>Hacer Pedido</button>

                    </Card.Body>
                </Card>
                <Card className='card-ofertas'>
                    <div className='position-absolute top-0'>
                        <Card.Img variant="top" src="https://picsum.photos/id/237/50/50"  />
                    </div>
                   
                    <Card.Body> 
                        
                        <Card.Title className='text-center'>Card Title</Card.Title>
                     <button className='btn btn-danger text-center  fw-bold'>Hacer Pedido</button>

                    </Card.Body>
                </Card>
                <Card className='card-ofertas'>
                    
                    <Card.Body>
                        <Card.Img variant="top"  src="https://picsum.photos/id/237/50/50" className='position-relative'/>
                        <Card.Title className='text-center'>Card Title</Card.Title>
                     <button className='btn btn-danger fw-bold'>Hacer Pedido</button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default Ofertas