import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCard";
import hackaton from "../../assets/projects/1622214050531.png";
import practicas_carrera from "../../assets/projects/practicas-carreras.png";
import portfolio_fiopans1 from "../../assets/projects/portfolio-fiopans1.png";
import task_manager from "../../assets/projects/task-manager.png";

function Projects() {
  const projectsData = [
    {
      id: 1,
      imgPath: task_manager,
      isBlog: false,
      title: "Task Manager – Full-Stack CRUD Application",
      tags: [
        "Java",
        "Spring Boot",
        "React",
        "Bootstrap",
        "MySQL",
        "Docker",
        "Redux",
      ],
      description:
        "Full-stack task management application with CRUD operations and TODO lists built with React, Redux, Java Spring Boot, MySQL, and Docker. Features RESTful API design, state management with Redux, and containerized deployment.",
      ghLink: "https://github.com/fiopans1/task-manager",
      demoLink: "https://taskmanager.fiopans1.com",
    },
    {
      id: 2,
      imgPath: portfolio_fiopans1,
      isBlog: false,
      title: "Personal Portfolio – React SPA",
      tags: ["React", "Bootstrap", "JavaScript", "CSS"],
      description:
        "Responsive single-page application portfolio built with React 19, React Router, and Bootstrap. Features animated particles background, interactive timeline, GitHub activity integration, and EmailJS contact form.",
      ghLink: "https://github.com/fiopans1/portfolio-fiopans1",
      demoLink: "https://fiopans1.com",
    },
    {
      id: 3,
      imgPath: practicas_carrera,
      isBlog: false,
      title: "University Projects – Algorithms & Data Structures",
      tags: ["Java", "C", "Python", "Many more.."],
      description:
        "Collection of academic projects covering algorithms, data structures, object-oriented programming in Java, systems programming in C, and scripting with Python. Includes coursework in databases, networks, AI, and cybersecurity.",
      ghLink: "https://github.com/fiopans1/practicas_carrera",
    },
    {
      id: 4,
      imgPath: hackaton,
      isBlog: false,
      title: "HackUDC 2024 – Code Analysis & Reporting Tool",
      tags: ["Python", "HTML", "JavaScript", "CSS", "GitHub Actions"],
      description:
        "Hackathon-winning Python tool for automated code analysis using Codee. Generates performance charts, compiles HTML reports, and sends email notifications via GitHub Actions CI/CD pipeline.",
      ghLink: "https://github.com/fiopans1/HACKUDC2024-CODEE",
      demoLink: "https://fiopans1.github.io/HACKUDC2024-CODEE",
    },
  ];

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
          {projectsData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                tags={project.tags}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
