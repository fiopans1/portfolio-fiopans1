import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/foto-personal.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineDownload } from "react-icons/ai";
const Introduction = () => {
  return (
    <Container fluid className="home-about-section">
      <Row>
        <Col md={8} className="home-about-description">
          <Row>
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name purple"> FIOPANS1</strong>
            </h1>
          </Row>
          <Row>
            <p className="home-about-body">
              I'm a passionate <b className="purple"> full-stack developer</b>{" "}
              specialized in backend with
              <b className="purple"> Java and Spring Boot</b>, and experienced
              in frontend development with
              <b className="purple"> React</b>. I enjoy{" "}
              <b className="purple">
                learning new technologies and tackling technical challenges
              </b>{" "}
              to enhance user experience. My goal is to build efficient,
              scalable, and impactful solutions.
            </p>
          </Row>
          <Row>
            <Col>
              <Button
                size="lg"
                className="m-3"
                variant="primary"
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
              <Button size="lg" className="m-3">
                Hola
              </Button>
              <Button size="lg" className="m-3">
                Hola
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Row>
          <Row>
            <strong className="purple mt-5" style={{ fontSize: "1.9em" }}>
              <Typewriter
                style
                words={[
                  "Software Developer",
                  "Java Product Developer",
                  "Full Stack Developer",
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
