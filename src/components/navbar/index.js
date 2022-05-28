import React from 'react'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/index.css'

const Navbar_top = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container className="header" container-fluid>
    <Navbar sticky="top" />
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
        <div className='navegacion'>
          <Nav.Link className='nav-a' href="#quienes-somos">Quienes somos</Nav.Link>
          <Nav.Link className='nav-a' href="#nuestro-servicio">Nuestro serivicio</Nav.Link>
          <Nav.Link className='nav-a' href="#en-venta">En venta</Nav.Link>
          <Nav.Link className='nav-a' href="#maquinaria">Maquinaria</Nav.Link>
          <Nav.Link className='nav-a' href="#testimonios">Testimonios</Nav.Link>
        </div> 
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbar_top;