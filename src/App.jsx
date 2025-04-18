import {createContext, useRef, useContext} from "react";
import ParticlesBackground from "./components/utils/ParticlesBackground";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import { sectionContext } from "./components/utils/Context";
const App = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };
  return (
    <sectionContext.Provider value={sections}>
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
        style={{ zIndex: 1, height: "90vh" }}
        fluid
      >
        <HomePage/>
      </Container>
    </Container>
    </sectionContext.Provider>
  );
};

export default App;
