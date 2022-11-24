import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/LOGO_INSTAYA_192.png";
import "./Toolbar.scss";
import { LinkContainer } from "react-router-bootstrap";

function Toolbar() {
  return (
    <Navbar bg="white" expand="lg" className="main-toolbar">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="InstaYa Mensajería" height="72" />
          </Navbar.Brand>
        </LinkContainer>
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
              <LinkContainer to="/profile">
                <NavDropdown.Item>Ver Perfil</NavDropdown.Item>
                </LinkContainer>

              <NavDropdown.Item href="#action/3.3">
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-nav">
              <LinkContainer to="/">
                <Nav.Link>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/GenerateOrder">              
              <Nav.Link> Generar Orden</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/OrderList">              
              <Nav.Link>Listado de Órdenes</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#link">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Toolbar;
