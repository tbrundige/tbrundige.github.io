import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bikeImage from "../../Assets/bike-image.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaSalesforce } from "react-icons/fa";

export default function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE <span className="accent-color"> ABOUT </span> MYSELF
            </h1>
            <p className="home-about-body">
              I like to build cool stuff, with a focus on{" "}
              <b className="accent-color">
                {" "}
                secure cloud applications and integrations
              </b>
              .
              <br />
              <br />
              Proficient in
              <i>
                <b className="accent-color"> Node.js, React.js </b> and all
                things <b className="accent-color">Salesforce (Apex, LWC)</b>.
              </i>
              <br />
              <br />
              Currently learning how to handle streaming data using{" "}
              <b className="accent-color"> Kafka </b> and{" "}
              <b className="accent-color"> Python</b>. &nbsp;
            </p>
          </Col>
          <Col md={4} className="secondary-photo">
            <img
              src={bikeImage}
              alt="bike"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="accent-color">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tombrundige/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/tbrundige"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.salesforce.com/trailblazer/tombrundige"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaSalesforce />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
