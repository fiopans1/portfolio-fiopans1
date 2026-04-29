import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section className="section-block">
      <Container fluid className="p-0">
        <Row className="g-4">
          {projects.map((project) => (
            <Col xl={4} md={6} key={project.slug}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
