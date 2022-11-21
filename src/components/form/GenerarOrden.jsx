import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import InfoRecogida from "./InfoRecogida";
import InfoEntrega from "./InfoEntrega";
import TamanoEnvio from "./TamanoEnvio";
import "./GenerarOrden.scss";
import Rastreo from "./Rastreo";
import Container from "react-bootstrap/Container";

function GenerarOrden() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "50rem" }} className="rounded-4">
            <Card.Body>
              <Form>
                <h2
                  style={{
                    fontFamily: "Century Gothic Bold",
                    textAlign: "center",
                  }}
                >
                  REGISTRAR ORDEN
                </h2>
                <Row>
                  <Col lg={7}>
                    <InfoRecogida></InfoRecogida>
                    <InfoEntrega></InfoEntrega>
                  </Col>
                  <Col lg={5}>
                    <TamanoEnvio></TamanoEnvio>

                    <div className="d-grid gap-2 mt-2">
                      <Button
                        className="crear"
                        variant="primary"
                        type="submit"
                        size="sm"
                      >
                        GENERAR ORDEN
                      </Button>

                      <Button
                        className="cancelar"
                        variant="danger"
                        type="submit"
                        size="sm"
                      >
                        CANCELAR ORDEN
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "18rem", height: "16rem" }}
            className="rounded-4"
          >
            <Card.Body>
              <Rastreo></Rastreo>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default GenerarOrden;
