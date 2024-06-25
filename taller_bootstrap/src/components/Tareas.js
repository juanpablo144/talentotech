import React from "react";
import { Menu } from "./Menu";
import { Container, Row, Col } from "react-bootstrap";
import "./Tareas.css";

function Tareas() {
  return (
    <>
      <Menu />
      <Container fluid={true}>
        <Row>
          <Col className="celda">Col 1 de 3 </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} className="celda">
            Col 2 de 3
          </Col>
          <Col className="celda d-none d-md-block">Col 3 de 3 </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="celda">Col 1 de 2 </Col>
          <Col className="celda">Col 2 de 2 </Col>
        </Row>
        <Row>
          <Col className="celda">Col 1 de 4 </Col>
          <Col className="celda">Col 2 de 4 </Col>
          <Col lg={4} className="celda">
            Col 3 de 4
          </Col>
          <Col className="celda">Col 4 de 4 </Col>
        </Row>
      </Container>
    </>
  );
}

export { Tareas };
