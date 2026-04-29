import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMeDescription from "./AboutMeDescription";
import SkillSet from "./SkillSet";

const AboutMe = () => {
  return (
    <Container fluid className="px-0 py-2">
      <div className="mb-4 text-start">
        <div className="text-uppercase text-info small fw-semibold mb-2">
          About
        </div>
        <h2 className="display-6 fw-semibold text-white mb-0">
          Know Who <span className="text-info">I&apos;M</span>
        </h2>
      </div>
      <Row className="g-4 align-items-stretch">
        <Col md={8} className="d-flex">
          <AboutMeDescription />
        </Col>
        <Col md={4} className="d-flex">
          <SkillSet />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
