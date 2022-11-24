import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./UserProfile.scss";

function UserProfile() {
    return (
        <Container>
            <p />
            <Card className="rounded-4">
                <Card.Body>
                    <div className="register-style text-center mb-3">
                        <p>INFORMACIÓN DE USUARIO</p> </div>

                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridApellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Apellido" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Correo electronico</Form.Label>
                                <Form.Control type="email" placeholder="Correo electronico" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTelefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="Teléfono" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDireccion">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" placeholder="Dirección" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCiudad">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" placeholder="Ciudad" />
                            </Form.Group>
                        </Row>


                        <Row>
                            <Col>
                                <Button variant="primary" type="button" className="btnUserProfile">
                                    Guardar
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="danger" type="button" className="btnUserProfile">
                                    Cancelar
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="dark" type="button" className="btnUserProfile">
                                    Eliminar cuenta
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>


    );
}

export default UserProfile;