import React  from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/carousel.css'
const CarouselPage = () => {

    return (
        <div >
            <Carousel variant="dark" className="container_carousel">
                <Carousel.Item interval={6000}>
                    <img
                    className="d-block w-100"
                    src="/assets/Logo-ppure.png"
                    alt="Pesto-pepure"
      
                    />
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                    className="d-block w-100"
                    src="/assets/Pesto-ppure.JPG"
                    alt="Second slide"

                    />
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                    className="d-block w-100"
                    src="/assets/Pesto-ppure.JPG"
                    alt="Third slide"
     
                    />
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                    className="d-block w-100"
                    src="/assets/Pesto-ppure.JPG"
                    alt="Third slide"

                    />
                </Carousel.Item>
            </Carousel>

        </div>
          
    );
};

export default CarouselPage;