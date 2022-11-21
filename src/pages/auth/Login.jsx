import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../../components/form/Login";
import Img from "../../assets/img/LOGO_INSTAYA_192.png";

const Login = () => {
  return <Container fluid className="p-4">
    <Row className="justify-content-center align-items-center">
      <Col>
        <img src={Img} alt="InstaYa Mensajería" height="600" />

      </Col>
      <Col>
        <LoginForm />
      </Col>
    </Row>
  </Container>;
};

export default Login;
