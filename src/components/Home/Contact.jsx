import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";

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
          <Col md={12} className="contact-header" style={{ paddingBottom: "20px" }}>
            <h1 className="project-heading">
              Contact <strong className="purple">Me</strong>
            </h1>
            <p style={{ color: "white", fontSize: "1.1em", textAlign: "center" }}>
              Feel free to <span className="purple">reach out</span> to me. I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col
            md={8}
            lg={6}
            className="contact-form-container"
          >
            <div className="contact-email-display">
              <AiOutlineMail style={{ fontSize: "1.5em", marginRight: "10px" }} />
              <span className="purple">dsuaran@gmail.com</span>
            </div>
            
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
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}

export default Contact;
