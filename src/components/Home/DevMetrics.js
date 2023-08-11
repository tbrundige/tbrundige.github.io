import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Skills from "./Skills";

export default function DevMetrics() {
  return (
    <Container fluid className="" id="dev-metrics">
      <Container className="home-content">
        <Row>
          <Col md={6}>
            <Github />
          </Col>
          <Col md={6}>
            <Skills />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
