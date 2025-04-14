import React from "react";
import ParticlesBackground from "./components/utils/ParticlesBackground";
import { Container } from "react-bootstrap";

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
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <h1 className="text-danger">Título principal</h1>
      </Container>
    </Container>
  );
};

export default App;
