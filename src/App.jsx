import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Container } from "react-bootstrap";
import ParticlesBackground from "./components/utils/ParticlesBackground";
function App() {
  return (
    <Container fluid className="App-container">
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
        }}
      >
        <ParticlesBackground />
      </div>
      <Container
        className="position-relative justify-content-center text-center"
        style={{ zIndex: 1 }}
      >
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Container>
  );
}

export default App;
