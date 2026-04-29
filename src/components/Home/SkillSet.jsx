import React from "react";
import { Badge, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
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
    <Container fluid className="p-0">
      <Card className="border-secondary bg-dark text-light shadow-sm">
        <Card.Body className="p-4">
          <h3 className="h4 fw-semibold text-white mb-4">
            Professional Skillset
          </h3>
          <Container className="px-0 mb-4">
            {progressSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2 small">
                  <span className="text-light fw-medium">
                    {skill.icon}
                    {"      "}
                    {skill.name}
                  </span>
                  <span className="text-info fw-semibold">
                    {skill.percentage}%
                  </span>
                </div>
                <ProgressBar
                  now={skill.percentage}
                  variant={skill.color}
                  animated
                />
              </div>
            ))}
          </Container>
          <Row xs={2} sm={3} className="g-3">
            {cardSkills.map((skill) => (
              <Col key={skill.name}>
                <Card className="h-100 border-secondary bg-black text-light">
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2 py-3">
                    <div className="fs-4">{skill.icon}</div>
                    <Badge bg="secondary" pill>
                      {skill.name}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SkillSet;
