import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  AiOutlineMail, 
  AiOutlineSend, 
  AiOutlinePhone,
  AiOutlineEnvironment 
} from "react-icons/ai";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram 
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrdyzxj",
        "template_86p21xp",
        form.current,
        "DZRqg7h4i7eGa_52g"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Message sent successfully!");
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12} className="contact-header">
            <h1 className="project-heading">
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "white", fontSize: "1.1em", textAlign: "center" }}>
              Feel free to <span className="purple">reach out</span> to me. I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* Left Column - Contact Information */}
          <Col md={10} lg={5} className="contact-info-column">
            <div className="contact-info-card">
              <h2 className="contact-info-title">Contact <span className="purple">Information</span></h2>
              <p className="contact-info-subtitle">
                I'm available for freelance work, collaborations, and full-time opportunities.
              </p>
              
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <AiOutlineMail />
                  </div>
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <a href="mailto:dsuaran@gmail.com" className="purple">dsuaran@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <AiOutlineEnvironment />
                  </div>
                  <div className="contact-info-content">
                    <h4>Location</h4>
                    <p>Galicia, Spain</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <AiOutlinePhone />
                  </div>
                  <div className="contact-info-content">
                    <h4>Available For</h4>
                    <p>Remote & On-site opportunities</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-links">
                <h4>Connect With Me</h4>
                <div className="contact-social-icons">
                  <a href="https://github.com/fiopans1" target="_blank" rel="noreferrer" className="contact-social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/diego-suárez-ramos-003236162/" target="_blank" rel="noreferrer" className="contact-social-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://twitter.com/dualwarepc" target="_blank" rel="noreferrer" className="contact-social-icon">
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com/diego_sr16" target="_blank" rel="noreferrer" className="contact-social-icon">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column - Contact Form */}
          <Col md={10} lg={5} className="contact-form-column">
            <div className="contact-form-container">
              <h2 className="contact-form-title">Send Me A <span className="purple">Message</span></h2>
              
              <Form ref={form} onSubmit={sendEmail} className="contact-form">
                <Form.Group
                  controlId="formBasicName"
                  style={{ marginBottom: "20px" }}
                >
                  <Form.Label className="contact-label">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="user_name"
                    className="contact-input"
                    required
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicEmail"
                  style={{ marginBottom: "20px" }}
                >
                  <Form.Label className="contact-label">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="user_email"
                    className="contact-input"
                    required
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicMessage"
                  style={{ marginBottom: "25px" }}
                >
                  <Form.Label className="contact-label">Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    name="message"
                    className="contact-input"
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="contact-submit-btn"
                >
                  <AiOutlineSend style={{ marginRight: "8px" }} />
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}

export default Contact;
