import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Carouseles = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25"
                    src="https://picsum.photos/id/237/200/100"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-25"
                    src="https://picsum.photos/id/237/200/100"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/237/200/100"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}


export default Carouseles