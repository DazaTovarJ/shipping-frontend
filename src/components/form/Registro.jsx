import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./Registro.scss";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Img from "../../assets/img/LOGO_INSTAYA_192.png";

function Registro() {

    return (

        <Card className="rounded-4">
            <Card.Body>
                <div className="register-style text-center mb-3">
                    <img src={Img} alt="InstaYa Mensajería" height="100" />
                    <p>REGISTRATE</p> </div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="firstName" placeholder="Escriba Nombre" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="LastName" placeholder="Escriba Apellido" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control type="email" placeholder="Escriba Correo" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Confirma Correo Electronico</Form.Label>
                                <Form.Control type="email" placeholder="Confirme Correo" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Crear Contraseña" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Confirmar Contraseña" />
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="LastName" placeholder="Escriba Dirección" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>

                        <Col>
                        <Form.Select aria-label="Default select example">
      <option>Ciudad</option>
      <option value="1">Cali</option>
      <option value="2">Bogota</option>
      <option value="3">Barranquilla</option>
    </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Celular</Form.Label>
                                <Form.Control type="LastName" placeholder="Escriba Numero Celular" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="LastName" placeholder="Escriba  Numero de Telefono" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Acepto terminos y condiciones" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <p> Si ya tienes cuenta? <Link to="/auth/login"> Ingresa aqui</Link></p>
                            </Col>
                    </Row>
                    <Button className="justify-content-center align-items-center" variant="primary" type="submit">
                        REGISTRARSE
                    </Button>


                </Form>

            </Card.Body>
        </Card>
    );
}


export default Registro;