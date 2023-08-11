import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import blobPropic from "../../Assets/blob-propic.png";
import HomeAbout from "./About";
import Showcase from "./Showcase";
import DevMetrics from "./DevMetrics";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TOM BRUNDIGE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Showcase />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={blobPropic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeAbout />
      <DevMetrics />
    </section>
  );
}
