import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Carouseles = () => {
    return (
      <>
        <div>
        <Carousel className='carousel'>
            <Carousel.Item >
                <img
                    className="d-block w-100 h-10 carrimg"
                    src="https://images7.alphacoders.com/128/1286471.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 h-25  carrimg"
                    src="https://images6.alphacoders.com/908/908160.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carrimg"
                    src="https://images6.alphacoders.com/870/870777.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div></>
    );
}


export default Carouseles