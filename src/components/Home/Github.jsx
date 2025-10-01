import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";

function Github() {
  const customTheme = {
    light: [
      "hsl(0, 0%, 92%)", // Lightest (background)
      "hsla(217, 91%, 60%, 0.44)", // Light contributions
      "hsla(217, 91%, 60%, 0.6)", // Medium contributions
      "hsla(217, 91%, 60%, 0.76)", // High contributions
      "hsla(217, 91%, 60%, 0.92)", // Highest contributions
    ],
    // Alternative with hex color as darkest shade
    dark: [
      "#ebebeb", // Lightest (background)
      "rgba(59, 130, 246, 0.44)", // Light contributions
      "rgba(59, 130, 246, 0.6)", // Medium contributions
      "rgba(59, 130, 246, 0.76)", // High contributions
      "rgba(59, 130, 246, 0.92)", // Highest contributions (based on #3b82f6)
    ],
  };

  return (
    <Container fluid className="mt-5 mb-5">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="fiopans1"
          blockSize={15}
          blockMargin={5}
          theme={customTheme}
          colorScheme="light"
          fontSize={16}
        />
      </Row>
    </Container>
  );
}

export default Github;
