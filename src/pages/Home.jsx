import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import package5 from "../assets/img/packaging_5.png";
import Time from "../components/ui/Time";
import "./Home.scss";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="ps-0">
          <img
            src={package5}
            alt="Empleado de InstaYa sosteniendo un paquete"
          />
        </Col>
        <Col className="home-info">
          <h2 className="home-heading">Programa tus envíos...</h2>
          <p>
            y recibe notificaciones cuando tus paquetes estén listos para ser
            recogidos.
          </p>
          <div className="d-flex align-items-center gap-5 home-time">
            <p>
              Tus envíos
              <br />
              llegan en
            </p>
            <Time duration="24" unit="Horas" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
