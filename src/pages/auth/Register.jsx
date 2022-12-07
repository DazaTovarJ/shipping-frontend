import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistroForm from "../../components/form/Registro";
import Img from "../../assets/img/packaging_2.png";
import img from "../../assets/img/LOGO_INSTAYA_192.png";


const Register = () => {
  return <Container fluid className="p-4">
    <Row className="justify-content-center align-items-center">
      <Col>
      <img className="ms-5 mb-2 mt-3" src={img} alt="InstaYa Mensajería" height="230" />
        <img src={Img} alt=" packaging_2" height="450" />

      </Col>
      <Col>
        <RegistroForm />
      </Col>
    </Row>
  </Container>;
};

export default Register;
