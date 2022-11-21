import React from "react";
import { Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

const InfoEntrega = () => {
  return (
    <div>
      <p style={{fontFamily: 'Century Gothic Bold'}}>INFORMACION DE ENTREGA</p>
      <Row className="mb-3">
        <Col lg={8}>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>DIRECCION</Form.Label>
            <Form.Control placeholder="Ingrese dirección" />
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group controlId="formBasicCity">
            <Form.Label>CIUDAD</Form.Label>
            <Form.Control placeholder="Ingrese ciudad" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="formBasicName">
          <Form.Label>NOMBRE Y APELLIDO</Form.Label>
          <Form.Control  placeholder="Ingrese nombre"/> 
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Col lg={2}>
          <Form.Group controlId="formBasicTypeID">
            <Form.Label>TIPO</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>--</option>
              <option>CC</option>
              <option>CE</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicID">
          <Form.Label>IDENTIFICACION</Form.Label>
            <Form.Control type="number" placeholder="Ingrese número" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>TELEFONO</Form.Label>
            <Form.Control type="number" placeholder="Ingrese número" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default InfoEntrega;
