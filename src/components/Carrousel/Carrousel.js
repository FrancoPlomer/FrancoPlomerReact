import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import example from "../../Assets/Multimedia/primeraImagenCarrousel.jpg";
import example2 from "../../Assets/Multimedia/segundaImagenCarrousel.jpg";
import example3 from "../../Assets/Multimedia/terceraOpcionCarrousel.jpg"
export const Carrousel = () => {
    return (
        <Carousel fade id="CarrouselHeader" controls={false} interval={2000}>
            <Carousel.Item className="CarrouselHeader_imgContentCarrousel">
                <img
                className="d-block w-100"
                src={example}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={example2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={example3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
