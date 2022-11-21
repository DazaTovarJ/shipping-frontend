import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/LOGO_INSTAYA_192.png";
import "./Toolbar.scss";

function Toolbar() {
  return (
    <Navbar bg="white" expand="lg" className="main-toolbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="InstaYa Mensajería" height="72" />
        </Navbar.Brand>
        <div className="d-flex flex-column ms-auto">
          <Nav className="ms-auto auth-menu">
            <NavDropdown
              title={
                <>
                  <FontAwesomeIcon icon={["far", "user-circle"]} />{" "}
                  {" Jane Doe "}
                </>
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#profile">Ver Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-nav">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Generar Orden</Nav.Link>
              <Nav.Link href="#link">Listado de Órdenes</Nav.Link>
              <Nav.Link href="#link">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Toolbar;
