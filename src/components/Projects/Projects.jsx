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
      title: "Task Manager",
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
        "This is a complete task manager that allow you to create, delete and update your Tasks. Also you can make TODO lists and mark them as done. This project was made with React, Redux, Java, SpringBoot, MySQL and Docker.",
      ghLink: "https://github.com/fiopans1/task-manager",
      demoLink: "https://github.com/fiopans1/task-manager",
    },
    {
      id: 2,
      imgPath: portfolio_fiopans1,
      isBlog: false,
      title: "Portfolio",
      tags: ["React", "Bootstrap", "JavaScript", "CSS"],
      description:
        "Personal portfolio with a completely redesigned layout, inspired by Soumyajit's work. While it takes initial structural ideas as reference, this project has been rebuilt from scratch with a unique approach, featuring new sections, custom styles, and the latest versions of all libraries and tools.",
      ghLink: "https://github.com/fiopans1/portfolio-fiopans1",
      demoLink: "https://fiopans1.com",
    },
    {
      id: 3,
      imgPath: practicas_carrera,
      isBlog: false,
      title: "University Projects and Internships",
      tags: ["Java", "C", "Python", "Many more.."],
      description:
        "This repository contains a collection of programming assignments, projects, and internship work completed during my undergraduate studies.",
      ghLink: "https://github.com/fiopans1/practicas_carrera",
    },
    {
      id: 4,
      imgPath: hackaton,
      isBlog: false,
      title: "HackUDC2024",
      tags: ["Python", "HTML", "JavaScript", "CSS", "GitHub Actions"],
      description:
        "This repository hosts a Python script for code analysis using Codee, accompanied by visualization generation and HTML report creation. The script parses Codee's JSON output, creates various charts, and compiles them into an HTML report. GitHub Actions are configured for webpage hosting and email notifications.",
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
