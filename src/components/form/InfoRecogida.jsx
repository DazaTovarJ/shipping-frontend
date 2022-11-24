import React from "react";
import { Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

const InfoRecogida = () => {
  return (
    <div>
      <p style={{fontFamily: 'Century Gothic Bold'}}>INFORMACION DE RECOGIDA</p>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formBasicDate">
            <Form.Label>FECHA</Form.Label>
            <Form.Control size="sm" type="date" placeholder="Enter date" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formBasicTime">
            <Form.Label>HORA</Form.Label>
            <Form.Control size="sm" type="time" placeholder="Enter time" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formBasicShift">
            <Form.Label>JORNADA</Form.Label>
            <Form.Select size="sm" defaultValue="Choose...">
              <option>--</option>
              <option>MAÑANA</option>
              <option>TARDE</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={8}>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>DIRECCION</Form.Label>
            <Form.Control size="sm" placeholder="Ingrese dirección" />
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group controlId="formBasicCity">
            <Form.Label>CIUDAD</Form.Label>
            <Form.Control size="sm" placeholder="Ingrese ciudad" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group controlId="formBasicName">
          <Form.Label>NOMBRE Y APELLIDO</Form.Label>
          <Form.Control size="sm" placeholder="Ingrese nombre" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Col lg={2}>
          <Form.Group controlId="formBasicTypeID">
            <Form.Label>TIPO</Form.Label>
            <Form.Select size="sm" defaultValue="Choose...">
              <option>--</option>
              <option>C.C</option>
              <option>C.E</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicID">
          <Form.Label>IDENTIFICACION</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Ingrese número" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>TELEFONO</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Ingrese número" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default InfoRecogida;
