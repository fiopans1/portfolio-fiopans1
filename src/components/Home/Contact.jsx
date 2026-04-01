import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Row
          style={{ justifyContent: "center", padding: "10px", color: "white" }}
        >
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              Let's <strong className="purple">Work Together</strong>
            </h1>
            <p style={{ marginBottom: "25px" }}>
              Have a project in mind or looking for a <span className="purple">Full-Stack Developer</span>?{" "}
              Send me a message or reach out at{" "}
              <strong><a href="mailto:dsuaran@gmail.com" className="purple" style={{ textDecoration: "none" }}>dsuaran@gmail.com</a></strong>
            </p>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group
                controlId="formBasicName"
                style={{ marginBottom: "10px" }}
              >
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="user_name"
                  required
                  aria-label="Your name"
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ marginBottom: "10px" }}
              >
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  name="user_email"
                  required
                  aria-label="Your email address"
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicMessage"
                style={{ marginBottom: "20px" }}
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Tell me about your project or opportunity..."
                  name="message"
                  required
                  aria-label="Your message"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginBottom: "10px", width: "100%" }}
              >
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
