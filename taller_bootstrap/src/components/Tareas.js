import React from "react";
import { Menu } from "./Menu";
import { Image, Container, Row, Col } from "react-bootstrap";

function Tareas() {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>1 of 1</Col>
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
