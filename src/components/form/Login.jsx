import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {

    return (

        <Card className="rounded-4">
            <Card.Body>
                <div className="icon text-center mb-3">        
                <FontAwesomeIcon size="5x" icon={["far","user"]}/>
                <p>INICIAR SESION</p> </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>
                    <Button className="" variant="primary" type="submit">
                        Iniciar
                    </Button>
                    <p> Aun no tienes cuenta? <Link to="/auth/register"> Registrate aqui</Link></p>
                    
                </Form>

            </Card.Body>
        </Card>
        
    );
}


export default Login;