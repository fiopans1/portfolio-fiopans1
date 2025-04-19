import React, { useState, useEffect, useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { sectionContext } from "../utils/Context";
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [ismobile, setIsMobile] = useState(window.innerWidth < 992);

  // Usar useEffect para manejar listeners
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    // Añadir los event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Función de limpieza (cleanup)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Array vacío significa que solo se ejecuta al montar y desmontar el componente

  const references = useContext(sectionContext);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Container fluid>
      <Navbar
        fixed="top"
        expand="lg"
        className={scrolled || ismobile ? "scroll" : "non-scroll"}
      >
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="purple">FIOPANS1</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="justify-content-center"
            expanded={expanded}
          >
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => {
                  setExpanded(false);
                  scrollToSection(references.home);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setExpanded(false);
                  scrollToSection(references.about);
                }}
              >
                Link 2
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setExpanded(false);
                  scrollToSection(references.projects);
                }}
              >
                Link 3
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setExpanded(false);
                  scrollToSection(references.contact);
                }}
              >
                Link 4
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;
