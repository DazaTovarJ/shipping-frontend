import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
      <Row className="justify-content-evenly py-3">
        <Col lg={3}>
          <a href="#">Políticas de Privacidad</a>
        </Col>
        <Col lg={3}>
          <a href="#">Términos y Condiciones</a>
        </Col>
        <Col lg={3}>
          <a href="#">Mapa de Sitio</a>
        </Col>
      </Row>
      <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
