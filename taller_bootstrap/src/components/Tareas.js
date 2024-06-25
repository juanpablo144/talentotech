import React from "react";
import { Menu } from "./Menu";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./Tareas.css";

function Tareas() {
  return (
    <>
      <Menu />
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col sm={2} className="celda">
            Col 1 de 2{" "}
          </Col>
          <Col sm={2} className="celda">
            Col 2 de 2{" "}
          </Col>
        </Row>
        <Row>
          <Col className="celda">Col 1 de 3 </Col>
          <Col xs={6} className="celda">
            Col 2 de 3{" "}
          </Col>
          <Col className="celda">Col 3 de 3 </Col>
        </Row>
        <Row>
          <Col className="celda">Col 1 de 4 </Col>
          <Col className="celda">Col 2 de 4 </Col>
          <Col lg={4} className="celda">
            Col 3 de 4{" "}
          </Col>
          <Col className="celda">Col 4 de 4 </Col>
        </Row>
      </Container>
    </>
  );
}

export { Tareas };
