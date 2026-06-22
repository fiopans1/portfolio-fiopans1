import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Seo from "../components/Seo";
import { breadcrumbJsonLd } from "../data/seo";

const ProjectsPage = () => {
  return (
    <Container className="portfolio-page">
      <Seo
        title="Projects"
        description="Explore the portfolio of Diego Suárez Ramos: full-stack projects built with Java, Spring Boot, React, Python and more, with case studies, stack details and source code."
        url="/projects"
        keywords="fiopans1 projects, Java Spring Boot projects, React projects, full-stack portfolio, software engineer projects"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <section className="glass-panel mb-4">
        <span className="d-inline-block mb-3 text-info text-uppercase small fw-semibold">
          Projects
        </span>
        <h1 className="display-6 fw-semibold text-white lh-sm mb-3">
          A curated selection of what I build.
        </h1>
        <p className="text-white-50 lh-lg">
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
