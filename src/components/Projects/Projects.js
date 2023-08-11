import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projectPlaceholder from "../../Assets/Projects/project-placeholder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">Projects</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPlaceholder}
              title="Project One"
              description="Project One Description"
              ghLink="https://github.com/tbrundige"
              demoLink="https://github.com/tbrundige"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPlaceholder}
              title="Project Two"
              description="Project Two Description"
              ghLink="https://github.com/tbrundige"
              demoLink="https://github.com/tbrundige"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPlaceholder}
              isBlog={false}
              title="Project Three"
              description="Project Three Description"
              ghLink="https://github.com/tbrundige"
              demoLink="https://github.com/tbrundige"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPlaceholder}
              title="Project Four"
              description="Project Four Description"
              ghLink="https://github.com/tbrundige"
            //   demoLink="https://github.com/tbrundige"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPlaceholder}
              title="Project Five"
              description="Project Five Description"
              ghLink="https://github.com/tbrundige"
            //   demoLink="https://github.com/tbrundige"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPlaceholder}
              title="Project Six"
              description="Project Six Description"
              ghLink="https://github.com/tbrundige"
            //   demoLink="https://github.com/tbrundige"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
