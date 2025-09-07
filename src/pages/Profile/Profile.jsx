// src/Pages/Profile.jsx
import {React,useState} from "react";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import placeholder from "../../assets/user.jpg"; // <-- add a placeholder image in your assets folder

export default function Profile() {
    const [edit,setEdit] =  useState(false);
    const [profile,setProfile]=useState(null);
const handleChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfile(imageUrl);
  }
};
  const  handleEdit = () => {
      setEdit(true);
    };
  return (
    <Container fluid style={{ backgroundColor: "white", minHeight: "100vh", padding: "2rem" }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2
            style={{
              color: "tomato",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            My Profile
          </h2>

          {/* Profile Card */}
          <Card className="shadow-sm mb-4" style={{ borderColor: "black" }}>
            <Card.Body className="text-center">
              <Image
                src={profile || placeholder}
                roundedCircle
                style={{ width: "120px", height: "120px", objectFit: "cover", border: "3px solid tomato" }}
              />
              <h4 style={{ marginTop: "1rem", color: "black" }}>Noon Vintage</h4>
              <p style={{ color: "gray" }}>name@example.com</p>
            <div className="d-flex justify-content-center gap-2">
               <Button onClick={handleEdit}
                style={{ backgroundColor: "black", borderColor: "tomato", marginTop: "1rem" }}
              >
                Edit Profile
              </Button>  
                
                 <Button
                style={{ backgroundColor: "tomato", borderColor: "tomato", marginTop: "1rem" }}
              >
               Log out
              </Button>
                </div> 
            </Card.Body>
          </Card>

          {/* Account Details */}
          {edit ? (
            <Card className="shadow-sm mb-4" style={{ borderColor: "tomato" }}>
              <Card.Header style={{ backgroundColor: "black", color: "white" }}>
                Account Information
              </Card.Header>
              <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" defaultValue="Noon Vintage" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" defaultValue="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" defaultValue="+966 555 123 456" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" defaultValue="123 Vintage Street, Riyadh" />
                </Form.Group>
                   <Form.Group className="mb-3">
                              <Form.Label style={{ color: "black" }}>Profile Image</Form.Label>
                              <Form.Control
                                type="file"
                                name="image"
                             

                                onChange={handleChange}
                                style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "black", border: "1px solid tomato" }}
                              />
                            </Form.Group>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "tomato",
                    borderColor: "tomato",
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>
          ) : (
            <>
              {/* Order History */}
              <Card className="shadow-sm" style={{ borderColor: "black" }}>
                <Card.Header style={{ backgroundColor: "tomato", color: "white" }}>
                  My Orders
                </Card.Header>
                <Card.Body>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span>Vintage Clock</span>
                      <span style={{ color: "tomato" }}>80 SR</span>
                    </li>
                    <li className="d-flex justify-content-between border-bottom py-2">
                      <span>Classic Vinyl</span>
                      <span style={{ color: "tomato" }}>45 SR</span>
                    </li>
                    <li className="d-flex justify-content-between py-2">
                      <span>Rustic Lamp</span>
                      <span style={{ color: "tomato" }}>60 SR</span>
                    </li>
                  </ul>
                  <Button
                    style={{ backgroundColor: "black", borderColor: "black", marginTop: "1rem" }}
                  >
                    View All Orders
                  </Button>
                </Card.Body>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
