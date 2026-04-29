import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <Card className="project-card-view h-100">
      <Link to={`/projects/${project.slug}`} className="project-card-image-link">
        <Card.Img variant="top" src={project.imgPath} alt={project.title} />
      </Link>
      {project.tags && (
        <div className="tag-cluster">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-project-style">
              {tag}
            </span>
          ))}
        </div>
      )}
      <Card.Body className="project-card-body">
        <div className="project-card-copy flex-grow-1">
          <p className="project-card-year">{project.year}</p>
          <Card.Title>{project.title}</Card.Title>
          <Card.Subtitle>{project.subtitle}</Card.Subtitle>
          <Card.Text>{project.description}</Card.Text>
        </div>
        <div className="project-card-actions d-flex flex-wrap mt-auto">
          <Button as={Link} to={`/projects/${project.slug}`} variant="primary">
            Details <FaArrowRight />
          </Button>
          <Button
            variant="outline-light"
            href={project.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> GitHub
          </Button>
          {project.demoLink && (
            <Button
              variant="outline-light"
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
