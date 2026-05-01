import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResumePage from "./pages/ResumePage";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <div className="app-shell__content">
        <Container fluid className="app-container">
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
