import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaReact, FaPython, FaDocker, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiJavascript } from "react-icons/si";

const SkillsProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "Java", level: 95, icon: <FaJava />, color: "#60a5fa" },
    { name: "React", level: 95, icon: <FaReact />, color: "#60a5fa" },
    { name: "Spring Boot", level: 90, icon: <SiSpringboot />, color: "#60a5fa" },
    { name: "Python", level: 70, icon: <FaPython />, color: "#60a5fa" },
    { name: "Docker", level: 80, icon: <FaDocker />, color: "#60a5fa" },
    { name: "SQL", level: 70, icon: <FaDatabase />, color: "#60a5fa" },
    { name: "JavaScript", level: 85, icon: <SiJavascript />, color: "#60a5fa" },
    { name: "Git", level: 85, icon: <FaGitAlt />, color: "#60a5fa" },
  ];

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <Container fluid className="skills-progress-section" ref={sectionRef}>
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="project-heading">
              Technical <strong className="purple">Skills</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
              Here's a breakdown of my technical proficiency
            </p>
          </Col>
        </Row>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} lg={3} className="skill-progress-item" key={index}>
              <div className="skill-card">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="progress-container">
                  <div
                    className="progress-bar-custom"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                    }}
                  >
                    <span className="progress-text">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default SkillsProgress;
