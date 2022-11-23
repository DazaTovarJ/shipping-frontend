import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../../components/form/Login";
import Img from "../../assets/img/LOGO_INSTAYA_192.png";
import { ReactComponent as CloudComponet } from "../../assets/img/cloud2.svg";


const Login = () => {
  return <Container>
  <Container fluid className="p-5">
    <Row className=" align-items-center">
      <Col>
        <img src={Img} alt="InstaYa Mensajería" height="400" />

      </Col>
      <Col>
        <LoginForm />
        
      </Col>
     
    </Row>
    
    
  </Container>;
  <CloudComponet className="cloudrotation"  />
  </Container>;
};

export default Login;
