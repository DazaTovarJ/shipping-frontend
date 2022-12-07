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
            <Form.Control size="sm" type="number" placeholder="Nro. en cm" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicHeight">
            <Form.Label>ALTO</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Nro. en cm" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formBasicWidth">
            <Form.Label>ANCHO</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Nro. en cm" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicWeight">
            <Form.Label>PESO</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Nro. en gr" />
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
        <Form.Group className="mb-3" controlId="formBasicValue">
          <Form.Label>VALOR AVALUADO MERCANCIA</Form.Label>
          <Form.Control size="sm" type="number" placeholder="Ingrese valor" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="formBasicPayment">
          <Form.Label>FORMA DE PAGO</Form.Label>
          <Form.Select size="sm" defaultValue="Choose...">
            <option>Seleccione</option>
            <option>PAGO CONTRAENTREGA</option>
          </Form.Select>
        </Form.Group>
      </Row>

    </div>
  );
};

export default TamanoEnvio;
