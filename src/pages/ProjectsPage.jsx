import React from "react";
import { Container } from "react-bootstrap";
import Projects from "../components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <Container fluid className="home-about-section">
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
