import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/utils/ParticlesBackground";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
        }}
      >
        <ParticlesBackground />
      </div>

      <div className="flex-grow-1 position-relative" style={{ zIndex: 1 }}>
        <Container
          fluid
          className="position-relative justify-content-center text-center"
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
      </div>

      <div className="position-relative w-100" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
