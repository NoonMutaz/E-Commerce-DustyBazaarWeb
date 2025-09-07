import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "3rem 0" ,minHeight:'100vh', }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 style={{ color: "tomato", fontWeight: "bold" }}>About Dusty Bazaar</h1>
            <p style={{ maxWidth: "700px", margin: "1rem auto", fontSize: "1.1rem" }}>
              Welcome to <span style={{ color: "tomato" }}>Dusty Bazaar</span> – 
              your online marketplace for unique vintage treasures, timeless antiques, 
              and rare collectibles. We connect people who love nostalgia with items 
              that carry history and character.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow" style={{ backgroundColor: "#111", border: "1px solid tomato" }}>
              <Card.Body className="text-center">
                <h3 style={{ color: "tomato" }}>Our Mission</h3>
                <p style={{color:'white'}}>
                  To preserve the beauty of the past by making timeless items 
                  accessible to everyone who values history, craftsmanship, and authenticity.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow" style={{ backgroundColor: "#111", border: "1px solid tomato" }}>
              <Card.Body className="text-center">
                <h3 style={{ color: "tomato" }}>Our Values</h3>
                <p style={{color:'white'}}>
                  Authenticity, trust, and community. We believe in connecting 
                  buyers and sellers through fair trade and a shared passion for antiques.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow" style={{ backgroundColor: "#111", border: "1px solid tomato" }}>
              <Card.Body className="text-center">
                <h3 style={{ color: "tomato" }}>Why Choose Us</h3>
                <p style={{color:'white'}}>
                  With carefully curated collections and secure transactions, 
                  Dusty Bazaar is the perfect destination for collectors, 
                  decorators, and history lovers.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col>
            <h4 style={{ color: "tomato" }}>Join the Bazaar</h4>
            <p>
              Whether you’re buying, selling, or simply exploring, 
              <strong style={{ color: "tomato" }}> Dusty Bazaar </strong> 
              is where timeless finds meet modern convenience.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
