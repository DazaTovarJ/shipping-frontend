import { Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function UserProfile() {
    return (
        <Container fluid>
           <Row className='md3'/>
            <div className="row-fluid">
                <div className="span12 h2 fs-Century-Gothic  fw-bold  text-center text-primary">
                INFORMACIÓN DE USUARIO
                </div>
            </div>

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
                        <Button variant="primary" type="button">
                            Guardar
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="danger" type="button">
                            Cancelar
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="dark" type="button">
                            Eliminar cuenta
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>

    );
}

export default UserProfile;