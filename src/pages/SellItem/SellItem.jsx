// SellItem.jsx
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function SellItem() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sell Request Submitted:", formData);
    // TODO: save to backend or localStorage
    setSubmitted(true);
    setFormData({
      title: "",
      description: "",
      price: "",
      image: null,
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4" style={{ color: "tomato" }}>
            Sell Your Item
          </h2>
          {submitted && (
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              Your sell request has been submitted!
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Product Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "black", border: "1px solid tomato" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe your item"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "black", border: "1px solid tomato" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Price (SR)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "black", border: "1px solid tomato" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "black" }}>Product Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
                style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "black", border: "1px solid tomato" }}
              />
            </Form.Group>

            <Button type="submit" style={{ backgroundColor: "tomato", border: "none" }}>
              Submit Request
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
