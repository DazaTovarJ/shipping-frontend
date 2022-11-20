import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/img/LOGO_INSTAYA_192.png";

function Toolbar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="InstaYa Mensajería" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Generar Orden</Nav.Link>
            <Nav.Link href="#link">Listado de Órdenes</Nav.Link>
            <Nav.Link href="#link">Contáctanos</Nav.Link>
            <NavDropdown title="Jane Doe" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ver Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Toolbar;
