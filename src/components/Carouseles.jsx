import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Carouseles = () => {
    return (
        <div >
        <Carousel  >
            <Carousel.Item >
                <img
                    className="d-block w-100 h-10"
                    src="https://images2.alphacoders.com/560/560491.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 h-25"
                    src="https://images3.alphacoders.com/276/276759.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images6.alphacoders.com/300/300228.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}


export default Carouseles