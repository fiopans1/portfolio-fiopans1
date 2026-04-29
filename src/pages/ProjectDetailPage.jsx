import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import ProjectMarkdown from "../components/Projects/ProjectMarkdown";
import { getProjectBySlug } from "../data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Container className="portfolio-page project-detail-page">
      <section className="project-detail-hero glass-panel">
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <span className="eyebrow">{project.year} · Project details</span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-summary">{project.description}</p>
            <div className="project-detail-actions">
              <Button as={Link} to="/projects" variant="outline-light">
                <FaArrowLeft /> Back to projects
              </Button>
              <Button href={project.ghLink} target="_blank" variant="primary">
                <BsGithub /> GitHub
              </Button>
              {project.demoLink && (
                <Button
                  href={project.demoLink}
                  target="_blank"
                  variant="outline-light"
                >
                  <CgWebsite /> Live demo
                </Button>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="project-detail-image-wrap">
              <img
                src={project.imgPath}
                alt={project.title}
                className="project-detail-image"
              />
            </div>
          </Col>
        </Row>
      </section>

      <Row className="g-4 align-items-start">
        <Col lg={8}>
          <section className="glass-panel markdown-panel">
            <ProjectMarkdown content={project.detailMarkdown} />
          </section>
        </Col>
        <Col lg={4}>
          <aside className="glass-panel project-sidebar">
            <span className="eyebrow">Stack</span>
            <div className="tag-cluster">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-project-style">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-sidebar-block">
              <span className="eyebrow">Why it matters</span>
              <p>{project.highlight}</p>
            </div>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetailPage;
