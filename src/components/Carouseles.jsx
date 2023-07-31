import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Carouseles = () => {
    return (
        
      <>  
    
  <div className=' ovelay-titulo container-fluid  align-items-center d-flex flex-column justify-content-center'>
            <h1 className='text-center  fa-bold'>La Morocha Hamburgueseria</h1>
            <a className='btn btn-danger  text-light fa-bold  text-center' href='/menus'>ver menus</a>
        </div>
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