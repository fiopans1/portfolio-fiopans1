import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Projects from "../components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <Container className="portfolio-page">
      <section className="page-intro glass-panel">
        <span className="eyebrow">Projects</span>
        <h1 className="section-title">A curated selection of what I build.</h1>
        <p className="section-copy">
          Each project has its own detail page with markdown-based notes so you
          can explore the context, stack, and intent behind the work.
        </p>
        <Button as={Link} to="/" variant="outline-light">
          Back home
        </Button>
      </section>
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
