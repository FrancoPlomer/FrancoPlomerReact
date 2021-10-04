import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import example from "../../Assets/Multimedia/example.jpg";
import example2 from "../../Assets/Multimedia/examples2.jpg";
import example3 from "../../Assets/Multimedia/examples3.jpg"
export const Carrousel = () => {
    return (
        <Carousel fade id="CarrouselHeader" controls={false} interval={2000}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={example}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={example2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={example3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
