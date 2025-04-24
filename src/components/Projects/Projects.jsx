import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCard";
import hackaton from "../../assets/Projects/1622214050531.png";
import practicas_carrera from "../../assets/Projects/WhatsApp-Image-2022-11-02-at-12.10.14.jpeg";
import portfolio_fiopans1 from "../../assets/Projects/portfolio-fiopans1.png";
import task_manager from "../../assets/Projects/task-manager.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio_fiopans1}
              isBlog={false}
              title="Portfolio"
              description="Personal portfolio with a completely redesigned layout, inspired by Soumyajit's work. While it takes initial structural ideas as reference, this project has been rebuilt from scratch with a unique approach, featuring new sections, custom styles, and the latest versions of all libraries and tools."
              ghLink="https://github.com/fiopans1/portfolio-fiopans1"
              demoLink="https://fiopans1.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task_manager}
              isBlog={false}
              title="Task Manager"
              description="This is a complete task manager that allow you to create, delete and update your Tasks. Also you can make TODO lists and mark them as done. This project was made with React, Redux, Java, SpringBoot, MySQL and Docker."
              ghLink="https://github.com/fiopans1/task-manager"
              demoLink="https://github.com/fiopans1/task-manager"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackaton}
              isBlog={false}
              title="HackUDC2024"
              description="This repository hosts a Python script for code analysis using Codee, accompanied by visualization generation and HTML report creation. The script parses Codee's JSON output, creates various charts, and compiles them into an HTML report. GitHub Actions are configured for webpage hosting and email notifications."
              ghLink="https://github.com/fiopans1/HACKUDC2024-CODEE"
              demoLink="https://fiopans1.github.io/HACKUDC2024-CODEE"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={practicas_carrera}
              isBlog={false}
              title="Career practices"
              description="In this repository I have all the programming practices that I did during the course of my studies."
              ghLink="https://github.com/fiopans1/practicas_carrera"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
