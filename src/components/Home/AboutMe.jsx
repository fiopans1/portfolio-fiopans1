import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMeDescription from "./AboutMeDescription";
import SkillSet from "./Skillset";

const AboutMe = () => {
  return (
    <Container fluid className="mt-5 mb-5">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Know Who <strong className="purple">I'M</strong>
      </h1>
      <Row>
        <Col md={8}>
          <AboutMeDescription />
        </Col>
        <Col md={4}>
          <SkillSet/>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
