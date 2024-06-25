import React from "react";
import { Menu } from "./Menu";
import { Image, Container, Row, Col } from "react-bootstrap";

function Tareas() {
  return (
    <>
      <Menu />
      <Container fluid={true}>
        <Row>
          <Col>Col 1 de 2 </Col>
          <Col>Col 2 de 2 </Col>
        </Row>
        <Row>
          <Col>Col 1 de 3 </Col>
          <Col>Col 2 de 3 </Col>
          <Col>Col 3 de 3 </Col>
        </Row>
        <Row>
          <Col>Col 1 de 4 </Col>
          <Col>Col 2 de 4 </Col>
          <Col>Col 3 de 4 </Col>
          <Col>Col 4 de 4 </Col>
        </Row>
      </Container>
      <h1>Hola clase</h1>
      <p className="text-info">Este es un subtitulo</p>
      <Image
        src="/assets/images/install-react.jpg"
        alt="react"
        className="w-50"
        roundedCircle
        fluid
      />
    </>
  );
}

export { Tareas };
