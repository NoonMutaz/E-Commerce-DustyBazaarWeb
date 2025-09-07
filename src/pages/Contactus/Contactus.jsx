import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add API call or form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "4rem 0" ,minHeight:'100vh',}}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 style={{ color: "tomato", fontWeight: "bold" }}>Contact Us</h1>
            <p style={{ maxWidth: "700px", margin: "1rem auto", fontSize: "1.1rem" }}>
              Have a question or want to get in touch? Fill out the form below 
              and our team at <span style={{ color: "tomato" }}>Dusty Bazaar </span> 
              will respond as soon as possible.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderRadius: "2rem" }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderRadius: "2rem" }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ borderRadius: "1rem" }}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "tomato",
                    border: "none",
                    borderRadius: "2rem",
                    padding: "0.5rem 2rem",
                  }}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col>
            <p>
              Or reach us at:{" "}
              <span style={{ color: "tomato" }}>support@dustybazaar.com</span>
            </p>
            <p>
              Phone: <span style={{ color: "tomato" }}>+966 123 456 789</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
