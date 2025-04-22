import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaDatabase,
  FaJava,
  FaPython,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiApachemaven,
  SiThymeleaf,
  SiRedux,
} from "react-icons/si";

const SkillSet = () => {
  const progressSkills = [
    { icon: <FaJava />, name: "Java", percentage: 95, color: "primary" },
    { icon: <FaReact />, name: "React", percentage: 95, color: "danger" },
    {
      icon: <SiSpringboot />,
      name: "SpringBoot",
      percentage: 90,
      color: "warning",
    },
    { icon: <FaPython />, name: "Python", percentage: 70, color: "secondary" },
    { icon: <FaDocker />, name: "Docker", percentage: 80, color: "success" },
    { icon: <FaDatabase />, name: "SQL", percentage: 70, color: "info" },
  ];

  const cardSkills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="skill-icon" style={{ color: "#e34f26" }} />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="skill-icon" style={{ color: "#264de4" }} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="skill-icon" style={{ color: "#f7df1e" }} />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="skill-icon" style={{ color: "#f05032" }} />,
    },
    {
      name: "PostgreSQL",
      icon: (
        <SiPostgresql className="skill-icon" style={{ color: "#f05032" }} />
      ),
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="skill-icon" style={{ color: "#7952b3" }} />,
    },
    {
      name: "MySQL ",
      icon: <SiMysql className="skill-icon" style={{ color: "#4479a1" }} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="skill-icon" style={{ color: "#4479a1" }} />,
    },
    {
      name: "Maven",
      icon: (
        <SiApachemaven className="skill-icon" style={{ color: "#4479a1" }} />
      ),
    },
    {
      name: "Thymeleaf",
      icon: <SiThymeleaf className="skill-icon" style={{ color: "#4479a1" }} />,
    },
    {
      name: "Redux",
      icon: <SiRedux className="skill-icon" style={{ color: "#4479a1" }} />,
    },
  ];

  return (
    <Container fluid className="py-5">
      <h2 className="purple">Professonal Skillset</h2>

      {/* Sección de barras de progreso */}
      <Container className="mb-5">
        {progressSkills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between mb-1">
              <span>
                {skill.icon}
                {"      "}
                {skill.name}
              </span>
              <span className="progress-percentage">{skill.percentage}%</span>
            </div>
            <ProgressBar
              now={skill.percentage}
              variant={skill.color}
              className="custom-progress"
              animated
            />
          </div>
        ))}
      </Container>
      {/* Sección de cards */}
      <Container className="mt-5">
        <Row>
          {cardSkills.map((skill) => (
            <Col>
              {skill.icon} {skill.name}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default SkillSet;
