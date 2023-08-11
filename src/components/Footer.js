import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>Copyright © {year} Tom Brundige</h3>
        </Col>
      </Row>
    </Container>
  );
}
