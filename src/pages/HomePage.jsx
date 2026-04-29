import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineDownload, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import Contact from "../components/Home/Contact";
import AboutMe from "../components/Home/AboutMe";
import Timeline from "../components/Home/Timeline";
import ProjectCard from "../components/Projects/ProjectsCard";
import { projects } from "../data/projects";
import pdf from "../assets/CV.pdf";
import myImg from "../assets/foto-personal.jpg";

const spotlightProjects = projects.slice(0, 3);

const focusAreas = [
  "Robust backend systems with Java and Spring Boot",
  "Full-stack products with React, APIs, and production-ready architecture",
  "Applied AI features that improve workflows and user experience",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/fiopans1",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diego-suárez-ramos-003236162/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/diego_sr16",
    icon: <AiFillInstagram />,
  },
];

const quickFacts = [
  { value: "4+", label: "featured builds" },
  { value: "Full-stack", label: "product mindset" },
  { value: "Galicia", label: "based in Spain" },
];

const HomePage = () => {
  return (
    <>
      <Container className="portfolio-page">
        <section className="glass-panel mb-4">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <span className="d-inline-block mb-3 text-info text-uppercase small fw-semibold">
                Portfolio · Diego Suárez Ramos
              </span>
              <h1 className="display-4 fw-semibold text-white lh-sm mb-3">
                Full-stack development.
                <br />
                Built for real products.
              </h1>
              <p className="text-white-50 fs-5 lh-lg mb-0">
                Full-stack developer building robust backends, polished React
                interfaces, and software experiences that feel simple even when
                the engineering behind them is not.
              </p>
              <div className="d-flex flex-wrap gap-3 my-4">
                <Button as={Link} to="/projects" variant="primary" size="lg">
                  View projects <FaArrowRight />
                </Button>
                <Button
                  href={pdf}
                  target="_blank"
                  variant="outline-light"
                  size="lg"
                >
                  <AiOutlineDownload /> Resume
                </Button>
              </div>
              <Row className="g-3 mt-1">
                {quickFacts.map((fact) => (
                  <Col sm={4} key={fact.label}>
                    <div className="h-100 rounded-4 border border-secondary-subtle bg-white bg-opacity-10 px-3 py-3 text-start">
                      <strong className="d-block fs-4 text-white">
                        {fact.value}
                      </strong>
                      <span className="text-white-50 small">{fact.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={5}>
              <div className="glass-panel p-0 overflow-hidden h-100">
                <img
                  src={myImg}
                  alt="Diego Suárez Ramos"
                  className="profile-image"
                />
                <div className="p-4 text-start">
                  <p className="d-inline-block mb-2 text-info text-uppercase small fw-semibold">
                    Currently
                  </p>
                  <h2 className="h3 text-white mb-3">
                    Product Developer at Denodo
                  </h2>
                  <p className="text-white-50 lh-lg mb-4">
                    Designing reliable backend solutions while keeping the user
                    experience fast, clear, and maintainable.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {socials.map((social) => (
                      <Button
                        as="a"
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        variant="outline-light"
                        size="sm"
                        aria-label={social.label}
                      >
                        {social.icon}
                        <span>{social.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <Row className="g-4 mb-4">
          <Col lg={6}>
            <article className="glass-panel h-100">
              <span className="d-inline-block mb-3 text-info text-uppercase small fw-semibold">
                About me
              </span>
              <h2 className="h2 fw-semibold text-white mb-3">
                Engineering with clarity, not noise.
              </h2>
              <p>
                I enjoy turning complex ideas into software that is readable,
                scalable, and pleasant to use. My strongest area is backend
                development with Java, but I am equally comfortable shaping the
                frontend so the final product feels cohesive.
              </p>
              <p>
                I studied Computer Engineering at the University of A Coruña and
                I am especially motivated by projects where architecture, UX,
                and product thinking need to work together.
              </p>
            </article>
          </Col>

          <Col lg={6}>
            <article className="glass-panel h-100">
              <span className="d-inline-block mb-3 text-info text-uppercase small fw-semibold">
                What I focus on
              </span>
              <ul className="list-unstyled d-grid gap-3 mb-4">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="rounded-4 border border-secondary-subtle bg-white bg-opacity-10 px-3 py-3 text-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className="d-inline-flex align-items-center gap-2 text-info"
                href="mailto:dsuaran@gmail.com"
              >
                <AiOutlineMail /> dsuaran@gmail.com
              </a>
            </article>
          </Col>
        </Row>

        <section className="mb-4">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
            <div>
              <span className="d-inline-block mb-3 text-info text-uppercase small fw-semibold">
                Selected work
              </span>
              <h2 className="display-6 fw-semibold text-white lh-sm mb-0">
                Projects with real context.
              </h2>
            </div>
            <Button as={Link} to="/projects" variant="outline-light">
              See all projects
            </Button>
          </div>
          <Row className="g-4">
            {spotlightProjects.map((project) => (
              <Col xl={4} md={6} key={project.slug}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </section>

        <section className="glass-panel mb-4">
          <AboutMe />
        </section>

        <section className="glass-panel mb-4">
          <Timeline />
        </section>
      </Container>

      <Contact />
    </>
  );
};

export default HomePage;
