import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Done, Work, School } from "@mui/icons-material";

const Timeline = () => {
  return (
    <Container fluid className="mt-5 mb-5">
      <Row className="mb-5">
        <h1 className="project-heading">
          Professional <strong className="purple"> Timeline</strong>
        </h1>
      </Row>
      <Row>
        <VerticalTimeline lineColor="#60a5fa">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(96, 165, 250, 0.15)",
              border: "3px solid #60a5fa",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #60a5fa" }}
            date="feb. 2024 - present"
            iconStyle={{ background: "rgb(37, 99, 235)", color: "#fff" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Denodo</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Junior Java Developer
            </h4>
            <p>
              Fullstack Development, Java, Spring Boot, React, Thymeleaf,
              Oracle, MySQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="nov. 2022 - may. 2023"
            contentStyle={{
              background: "transparent",
              border: "3px solid #60a5fa",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #60a5fa" }}
            iconStyle={{ background: "rgb(37, 99, 235)", color: "#fff" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">
              Universidade da Coruña
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Collaboration Grant - Computer Engineering Dpt.
            </h4>
            <p>
              AI Algorithm Optimization, Python to C Translation,
              Parallelization, High-Performance Computing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "transparent",
              border: "3px solid #60a5fa",
            }}
            date="sept. 2020 - sept. 2025"
            iconStyle={{ background: "rgb(233, 155, 30)", color: "#fff" }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
              Universidade da Coruña
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer Engineering, major in Computing
            </h4>
            <p>
              Software Development, Algorithms, Databases, Networks, Artificial
              Intelligence, Cybersecurity
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<Done />}
          />
        </VerticalTimeline>
      </Row>
    </Container>
  );
};

export default Timeline;
