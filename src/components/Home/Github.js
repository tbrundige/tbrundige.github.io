import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Col, Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ paddingBottom: "10px" }}>
      <Col md={12}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Contributions
        </h1>
        <GitHubCalendar
          username="tbrundige"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
          colorScheme="light"
          hideColorLegend="true"
          hideTotalCount="true"
        />
      </Col>
    </Row>
  );
}

export default Github;
