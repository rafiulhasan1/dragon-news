import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/Brand/Brand1.jpg'
import Brand2 from '../../../assets/Brand/Brand2.jpg'


const BrandCarosel = () => {
    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
    );
};

export default BrandCarosel;