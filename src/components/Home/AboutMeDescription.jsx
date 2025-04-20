import React from "react";
import Card from "react-bootstrap/Card";

function AboutMeDescription() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Diego Suárez Ramos </span>
            from <span className="purple"> Galician, Spain.</span>
            <br />
            <br />I am a <span className="purple">
              full-stack developer
            </span>{" "}
            with experience in building robust and scalable applications. On the
            backend, I primarily work with <span className="purple">Java</span>,
            while on the frontend, I handle both traditional technologies like{" "}
            <span className="purple">Thymeleaf</span> and modern frameworks like{" "}
            <span className="purple">React</span>. My focus is on creating
            efficient, intuitive, and high-performance solutions.
            <br />
            <br />
            My passion for programming began at an early age when I experimented
            with small projects driven by curiosity and a desire to build. Over
            time, this interest evolved into a true vocation, leading me to
            pursue a degree in <span className="purple">Computer Engineering at the University of A
            Coruña</span>, where I specialized in <span className="purple">Computing Science</span>. Throughout my studies, I
            explored various areas of technology, but software development
            always stood out as my true passion.
            <br />
            <br />
            Today, I embrace every challenge that programming presents, viewing
            each problem as an opportunity to innovate and improve. My goal is
            to continue growing both technically and creatively, contributing
            solutions that positively impact people's lives.
            <br />
            <br />
            Outside of my professional work, I enjoy balancing my life with
            activities such as playing video games and working out at the gym.
            These hobbies help me keep a fresh mind, foster creativity, and
            drive me to tackle every new challenge with energy and enthusiasm.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutMeDescription;
