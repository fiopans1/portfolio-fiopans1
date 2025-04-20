import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <Container className="home-about-social">
      <h3>
        FIND ME <span className="purple">ON </span>
      </h3>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/fiopans1"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/dualwarepc"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/diego-suárez-ramos-003236162/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/diego_sr16"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default SocialMedia;
