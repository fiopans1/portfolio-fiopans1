import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/foto-personal.jpg";
import pdf from "../../assets/CV.pdf";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import SocialMedia from "./SocialMedia";
const Introduction = () => {
  return (
    <Container fluid className="home-about-section" role="banner">
      <Row>
        <Col md={8} className="home-about-description">
          <Row>
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-label="waving hand">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name purple"> DIEGO SUÁREZ RAMOS</strong>
            </h1>
          </Row>
          <Row>
            <p className="home-about-body">
              I'm a <b className="purple">Full-Stack Developer</b>{" "}
              specialized in backend with
              <b className="purple"> Java and Spring Boot</b>, and experienced
              in frontend development with
              <b className="purple"> React</b>.
              <br />
              <br />
              I build{" "}
              <b className="purple">
                scalable web applications and RESTful APIs
              </b>{" "}
              that solve real business problems. Currently working at{" "}
              <b className="purple">Denodo</b> as a Product Developer.
            </p>
          </Row>
          <Row className="justify-content-center" style={{ gap: "10px" }}>
            <Col className="text-center" xs="auto">
              <Button
                size="lg"
                variant="primary"
                target="_blank"
                href={pdf}
                style={{ maxWidth: "250px" }}
                aria-label="Download my CV in PDF format"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Col>
            <Col className="text-center" xs="auto">
              <Button
                size="lg"
                variant="outline-light"
                href="#contact"
                style={{ maxWidth: "250px" }}
                aria-label="Send me a message"
                onClick={(e) => {
                  e.preventDefault();
                  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  document.getElementById("contact")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                }}
              >
                <AiOutlineMail />
                &nbsp;Let's Work Together
              </Button>
            </Col>
          </Row>
          <Row>
            <SocialMedia />
          </Row>
        </Col>
        <Col md={4}>
          <Row className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Diego Suárez Ramos - Full-Stack Developer" />
            </Tilt>
          </Row>
          <Row>
            <strong className="purple mt-5" style={{ fontSize: "1.9em" }}>
              <Typewriter
                style
                words={[
                  "Full-Stack Developer",
                  "Java & Spring Boot Expert",
                  "React Developer",
                  "Software Engineer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </strong>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
