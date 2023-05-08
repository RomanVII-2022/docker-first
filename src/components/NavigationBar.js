import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <div>
        <Navbar className='bg-primary' expand="lg">
            <Container fluid>
                <Navbar.Brand className="logo m-0 text-white" href="#">Trave<span style={{ color: 'greenyellow' }}>ller</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">   
                        <Nav
                            className="me-auto my-2 my-lg-0 ml-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-white' href="#action1"><strong>Home</strong></Nav.Link>
                            <Nav.Link className='text-white' href="#action2"><strong>Services</strong></Nav.Link>
                            <Nav.Link className='text-white' href="#action2"><strong>About Us</strong></Nav.Link>
                            <Nav.Link className='text-white' href="#action2"><strong>Contact Us</strong></Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar