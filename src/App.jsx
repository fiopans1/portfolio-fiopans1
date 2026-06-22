import { Suspense, lazy } from "react";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Container, Spinner } from "react-bootstrap";
import Footer from "./components/Footer";

const ResumePage = lazy(() => import("./pages/ResumePage"));

const PageFallback = () => (
  <div
    className="d-flex justify-content-center align-items-center py-5"
    role="status"
    aria-live="polite"
  >
    <Spinner animation="border" variant="info" />
    <span className="visually-hidden">Loading…</span>
  </div>
);

function App() {
  return (
    <div className="app-shell">
      <div className="app-shell__content">
        <Container fluid className="app-container">
          <NavBar />
          <ScrollToTop />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
