import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Carouseles = () => {
    return (
        
      <>  
    
          
 
        <Carousel className='carousel overlay h-100'>
            <Carousel.Item >
                <img
                    className="d-block w-100 h-10 carrimg"
                    src="carousel1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 h-25  carrimg"
                    src="carousel2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carrimg"
                    src="carousel3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

        
    </>
    );
}


export default Carouseles



/* 
 <Carousel className='carousel'>
            <Carousel.Item >
                <Image
                    className="d-block w-100 h-10 carrimg"
                    src="/carousel1.jpg"
                    alt="First slide"
                    width={100}
                    height={25}
                />
            </Carousel.Item>
            <Carousel.Item >
                <Image
                    className="d-block w-100 h-25  carrimg"
                    src="/carousel2.jpg"
                    alt="Second slide"
                    width={100}
                    height={25}
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 carrimg"
                    src="/carousel3.jpg"
                    alt="Third slide"
                    width={100}
                    height={25}
                />
            </Carousel.Item>
        </Carousel>
 */