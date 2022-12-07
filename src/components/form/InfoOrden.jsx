import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import InfoRecogida from "./InfoRecogida";
import InfoEntrega from "./InfoEntrega";
import TamanoEnvio from "./TamanoEnvio";
import "./GenerarOrden.scss";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/LOGO_INSTAYA_192.png";

function InfoOrden() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "60rem" }} className="rounded-4 mt-4">
            <Card.Body>
              <div className="icon text-center mb-2">
                <img src={logo} alt="InstaYa Mensajería" height="100" />
              </div>
              <Form>
                <div className="icon text-center mb-3">
                  <FontAwesomeIcon />
                  <h1>INFORMACIÓN DE ORDEN</h1>{" "}
                </div>
                <Row>
                  <Col>
                    <InfoRecogida></InfoRecogida>
                    <InfoEntrega></InfoEntrega>
                  </Col>
                  <Col>
                    <TamanoEnvio></TamanoEnvio>
                    <Row>
                      <h6 className="text-center">CÓDIGO DE RASTREO</h6>
                      <Form.Group lg={5}
                        className=" mt-2"
                        controlId="formBasicTracking"
                      >
                        <Form.Control size="sm" readOnly/>
                      </Form.Group>
                    </Row>

                    <div className=" justify-content-center align-items-center d-grid gap-2 mt-4">
                      <Button
                        className="crear"
                        variant="dark"
                        type="submit"
                        size="sm"
                      >
                        EDITAR
                      </Button>

                      <Button
                        className="cancelar"
                        variant="danger"
                        type="submit"
                        size="sm"
                      >
                        ACTUALIZAR ORDEN
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default InfoOrden;
