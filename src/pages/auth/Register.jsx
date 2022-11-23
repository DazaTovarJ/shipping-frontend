import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistroForm from "../../components/form/Registro";
import Img from "../../assets/img/packaging_2.png";

const Register = () => {
  return <Container fluid className="p-2">
    <Row className="justify-content-center align-items-center">
      <Col>
        <img src={Img} alt=" packaging_2" height="1000" />

      </Col>
      <Col>
        <RegistroForm />
      </Col>
    </Row>
  </Container>;
};

export default Register;
