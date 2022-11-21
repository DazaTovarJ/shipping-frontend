import React from "react";
import { Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

const TamanoEnvio = () => {
  return (
    <div>
      <p style={{fontFamily: 'Century Gothic Bold'}}>TAMAÑO DE ENVIO</p>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formBasicLenght">
            <Form.Label>LARGO</Form.Label>
            <Form.Control type="number" placeholder="Número en cm." />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicHeight">
            <Form.Label>ALTO</Form.Label>
            <Form.Control type="number" placeholder="Número en cm." />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formBasicWidth">
            <Form.Label>ANCHO</Form.Label>
            <Form.Control type="number" placeholder="Número en cm." />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicWeight">
            <Form.Label>PESO</Form.Label>
            <Form.Control type="number" placeholder="Número en gr." />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Documento" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mercancia" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group controlId="formBasicValue">
          <Form.Label>VALOR AVALUADO</Form.Label>
          <Form.Control type="number" placeholder="Ingrese valor" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group controlId="formBasicPayment">
          <Form.Label>FORMA DE PAGO</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seleccione</option>
            <option>PAGO CONTRAENTREGA</option>
          </Form.Select>
        </Form.Group>
      </Row>

    </div>
  );
};

export default TamanoEnvio;
