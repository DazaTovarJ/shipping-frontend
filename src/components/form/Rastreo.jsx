import { Row } from "react-bootstrap";
import "./Rastreo.scss";
import logo from "../../assets/img/LOGO_INSTAYA_192.png";
import { Form } from "react-bootstrap";
function Rastreo() {
  return (
    <div className="icon text-center mb-5">
      <img src={logo} alt="InstaYa Mensajería" height="90" />
      <Row>
        <h7
          style={{
            fontFamily: "Century Gothic",
            color: "#404040",
            marginTop: "10px",
          }}
        >
          ¡Tu orden se ha creado con éxito!
        </h7>
      </Row>
      <h6 style={{ marginTop: "10px" }}>CODIGO DE RASTREO</h6>

      <Row>
        <Form.Group className="mt-2" controlId="formBasicTracking">
          <Form.Control size="sm" readOnly/>
        </Form.Group>
      </Row>
    </div>
  );
}

export default Rastreo;
