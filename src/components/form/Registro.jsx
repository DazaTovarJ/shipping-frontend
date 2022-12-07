import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./Registro.scss";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Img from "../../assets/img/LOGO_INSTAYA_192.png";

function Registro() {
  return (
    <Card style={{ width: "43rem" }} className="rounded-4">
      <Card.Body>
        <div className="register-style text-center mb-3">
          <img src={Img} alt="InstaYa Mensajería" height="100" />
          <p>REGISTRATE</p>{" "}
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="firstName" placeholder="Ingrese nombre" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="LastName" placeholder="Ingrese apellido" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese correo" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirma Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Confirmar correo" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese contraseña" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar contraseña"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="LastName" placeholder="Ingrese dirección" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--</option>
                  <option>Barranquilla</option>
                  <option>Bogota</option>
                  <option>Bucaramanga</option>
                  <option>Cali</option>
                  <option>Cartagena</option>
                  <option>Medellín</option>
                  <option>Neiva</option>
                  <option>Pereira</option>
                  <option>Santa Marta</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="LastName"
                  placeholder="Ingrese número"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="LastName"
                  placeholder="Ingrese número"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Acepto terminos y condiciones"
                />
              </Form.Group>
            </Col>
            <Col>
              <p>
                {" "}
                ¿Ya tienes cuenta?  <Link to="/auth/login"> Ingresa aqui</Link>
              </p>
            </Col>
          </Row>
          <Button
            className="justify-content-center align-items-center"
            variant="primary"
            type="submit"
          >
            REGISTRARSE
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Registro;
