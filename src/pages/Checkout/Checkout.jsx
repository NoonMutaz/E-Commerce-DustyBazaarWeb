// src/Pages/Checkout.jsx
import React from "react";
import { Container, Row, Col, Card, Form, Button, ListGroup } from "react-bootstrap";

export default function Checkout() {
  return (
    <Container fluid style={{ backgroundColor: "white", minHeight: "100vh", padding: "2rem" }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 style={{ color: "tomato", fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}>
           Checkout
          </h2>

          {/* Order Summary */}
          <Card className="mb-4 shadow-sm" style={{ borderColor: "black" }}>
            <Card.Header style={{ backgroundColor: "black", color: "white" }}>
              <strong>Order Summary</strong>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Vintage Clock</span>
                <span>80 SR</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Classic Vinyl</span>
                <span>45 SR</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <strong>Total</strong>
                <strong style={{ color: "tomato" }}>125 SR</strong>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          {/* Billing & Shipping Form */}
          <Card className="shadow-sm" style={{ borderColor: "tomato" }}>
            <Card.Header style={{ backgroundColor: "tomato", color: "white" }}>
              <strong>Billing & Shipping</strong>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="123 Vintage Street" />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter city" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control type="text" placeholder="Enter postal code" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Payment Section */}
                <h5 style={{ marginTop: "1rem", color: "tomato" }}>Payment Details</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="password" placeholder="***" />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  type="submit"
                  style={{
                    backgroundColor: "tomato",
                    borderColor: "tomato",
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  Confirm & Pay
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
