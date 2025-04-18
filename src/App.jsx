import React from "react";
import ParticlesBackground from "./components/utils/ParticlesBackground";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Container className="position-relative">
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
        }}
      >
        <ParticlesBackground />
      </div>
      <Container fluid style={{ zIndex: 1, height: "10vh" }}>
        <NavBar />
      </Container>
      <Container
        className="position-relative justify-content-center align-items-center d-flex flex-column h-100"
        style={{ zIndex: 2, height: "100vh" }}
        fluid
      >
        <HomePage/>
        <h1 className="text-danger">Título principal</h1>
        {/* <span
          style={{ color: "#66fcf1", fontSize: "2rem", fontWeight: "bold" }}
        >
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
        </span> */}
      </Container>
    </Container>
  );
};

export default App;
