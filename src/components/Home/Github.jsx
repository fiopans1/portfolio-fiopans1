import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";

function Github() {
  const customTheme = {
    light: [
      "hsl(0, 0%, 92%)", // Lightest (background)
      "hsla(213, 94%, 68%, 0.35)", // Light contributions
      "hsla(213, 94%, 68%, 0.5)", // Medium contributions
      "hsla(213, 94%, 68%, 0.65)", // High contributions
      "hsla(213, 94%, 68%, 0.80)", // Highest contributions
    ],
    // Alternative with hex color as darkest shade
    dark: [
      "#ebebeb", // Lightest (background)
      "rgba(96, 165, 250, 0.35)", // Light contributions
      "rgba(96, 165, 250, 0.5)", // Medium contributions
      "rgba(96, 165, 250, 0.65)", // High contributions
      "rgba(96, 165, 250, 0.80)", // Highest contributions (based on #60a5fa)
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
