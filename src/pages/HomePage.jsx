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
  "Backend sólido con Java y Spring Boot",
  "Frontends limpios con React y UX cuidada",
  "APIs, arquitectura y despliegues listos para producción",
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
        <section className="hero-panel">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <span className="eyebrow">Portfolio · Diego Suárez Ramos</span>
              <h1 className="hero-title display-4 fw-semibold text-white lh-sm">
                Minimal code.
                <br />
                Strong products.
              </h1>
              <p className="hero-copy">
                Full-stack developer building robust backends, polished React
                interfaces, and software experiences that feel simple even when
                the engineering behind them is not.
              </p>
              <div className="hero-actions">
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
              <div className="hero-meta-grid">
                {quickFacts.map((fact) => (
                  <div className="hero-meta-card" key={fact.label}>
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={5}>
              <div className="profile-card">
                <img
                  src={myImg}
                  alt="Diego Suárez Ramos"
                  className="profile-image"
                />
                <div className="profile-card-body">
                  <p className="profile-kicker">Currently</p>
                  <h2>Java Developer at Denodo</h2>
                  <p>
                    Designing reliable backend solutions while keeping the user
                    experience fast, clear, and maintainable.
                  </p>
                  <div className="social-pills">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="social-pill"
                        aria-label={social.label}
                      >
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="content-grid">
          <article className="glass-panel">
            <span className="eyebrow">About me</span>
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
              I am especially motivated by projects where architecture, UX, and
              product thinking need to work together.
            </p>
          </article>

          <article className="glass-panel">
            <span className="eyebrow">What I focus on</span>
            <ul className="focus-list">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="inline-link" href="mailto:dsuaran@gmail.com">
              <AiOutlineMail /> dsuaran@gmail.com
            </a>
          </article>
        </section>

        <section className="section-block">
          <div className="section-heading-wrap">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title display-6 fw-semibold text-white lh-sm">
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

        <section className="section-block glass-panel">
          <AboutMe />
        </section>

        <section className="section-block glass-panel">
          <Timeline />
        </section>
      </Container>

      <Contact />
    </>
  );
};

export default HomePage;
