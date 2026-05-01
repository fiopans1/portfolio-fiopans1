import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Done, Work, School } from "@mui/icons-material";

const Timeline = () => {
  return (
    <Container fluid className="px-0 py-2">
      <div className="mb-4 text-start">
        <div className="text-uppercase text-info small fw-semibold mb-2">
          Experience
        </div>
        <h2 className="display-6 fw-semibold text-white mb-0">
          Professional <span className="text-info">Timeline</span>
        </h2>
      </div>
      <VerticalTimeline lineColor="#60a5fa">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(15, 23, 42, 0.92)",
              border: "3px solid #60a5fa",
              color: "#f8fafc",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #60a5fa" }}
            dateClassName="text-white fw-semibold"
            date="april. 2026 - present"
            iconStyle={{ background: "rgb(37, 99, 235)", color: "#fff" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title text-white">
              Denodo
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-info">
              Product Developer
            </h4>
            <p>
              Fullstack Development, Java, Spring Boot, React, Thymeleaf,
              Databases
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(15, 23, 42, 0.92)",
              border: "3px solid #60a5fa",
              color: "#f8fafc",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #60a5fa" }}
            dateClassName="text-white fw-semibold"
            date="feb. 2024 - april. 2026"
            iconStyle={{ background: "rgb(37, 99, 235)", color: "#fff" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title text-white">
              Denodo
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-info">
              Junior Product Developer
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
              background: "rgba(15, 23, 42, 0.92)",
              border: "3px solid #60a5fa",
              color: "#f8fafc",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #60a5fa" }}
            dateClassName="text-white fw-semibold"
            iconStyle={{ background: "rgb(37, 99, 235)", color: "#fff" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title text-white">
              Universidade da Coruña
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-info">
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
              background: "rgba(15, 23, 42, 0.92)",
              border: "3px solid #60a5fa",
              color: "#f8fafc",
              boxShadow: "none",
            }}
            dateClassName="text-white fw-semibold"
            date="sept. 2020 - sept. 2025"
            iconStyle={{ background: "rgb(233, 155, 30)", color: "#fff" }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title text-white">
              Universidade da Coruña
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-info">
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
    </Container>
  );
};

export default Timeline;
