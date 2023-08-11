import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
  SiApachekafka,
  SiGooglecloud,
  SiGnubash,
  SiPowershell,
  SiBootstrap,
} from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";

export default function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Row style={{ paddingBottom: "10px" }}>
        <Col md={12}>
          <h1 className="project-heading">Skills</h1>
        </Col>
      </Row>
      <Col xs={2} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <FaSalesforce />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <SiApachekafka />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <SiPowershell />
      </Col>
      <Col xs={2} md={3} className="tech-icons">
        <SiGnubash />
      </Col>
    </Row>
  );
}
