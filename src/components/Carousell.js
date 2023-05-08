import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import hero from '../images/land.jpg'
import hero1 from '../images/land1.jpg'
import hero2 from '../images/land3.jpg'

const Carousell = () => {
  return (
    <div>
        <Carousel slide={false}>
            <Carousel.Item style={{ height: '400px'}}>
                <img
                className="d-block w-100"
                src={hero2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '400px'}}>
                <img
                className="d-block w-100"
                src={hero}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '400px'}}>
                <img
                className="d-block w-100"
                src={hero1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Carousell