import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMeDescription from "./AboutMeDescription";

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
          <div style={{ padding: "20px" }}>
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "20px",
                color: "#333",
                borderBottom: "2px solid #0056b3",
                paddingBottom: "10px",
                display: "inline-block",
              }}
            >
              My Skills
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  Java
                </span>
                <div
                  style={{
                    height: "10px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "90%",
                      background: "linear-gradient(90deg, #0056b3, #00a0e9)",
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  Spring Boot
                </span>
                <div
                  style={{
                    height: "10px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "85%",
                      background: "linear-gradient(90deg, #0056b3, #00a0e9)",
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  React
                </span>
                <div
                  style={{
                    height: "10px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "80%",
                      background: "linear-gradient(90deg, #0056b3, #00a0e9)",
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "500",
                  }}
                >
                  JavaScript
                </span>
                <div
                  style={{
                    height: "10px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "75%",
                      background: "linear-gradient(90deg, #0056b3, #00a0e9)",
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
