import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-multi-carousel';
import service from '../images/service.jpg'

const Popular = (props) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div className="untree_co-section">
        <Container>
            <Row className='text-center justify-content-center mb-5'>
                <Col >
                    <h2 className="section-title text-center">Popular Destination</h2>
                </Col>
            </Row>
            
            <Carousel showDots={true}autoPlay={true} responsive={responsive}>
                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>

                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>

                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>

                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>

                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>

                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>

                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>

                <div className="item" style={{padding: '10px'}}>
					<a className="media-thumb" href="#" data-fancybox="gallery">
						<div className="media-text">
							<h3>Pragser Wildsee</h3>
							<span className="location">Italy</span>
						</div>
						<img src={service} alt="Image" className="img-fluid" />
					</a> 
				</div>
            </Carousel>
        </Container>
    </div>
  )
}

export default Popular