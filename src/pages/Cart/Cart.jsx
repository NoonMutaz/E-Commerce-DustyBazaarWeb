import React, { useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import {Link} from 'react-router-dom';
export default function  Cart() {
  // Sample cart items (replace with props, context, or Redux later)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Old TV", price: 35, qty: 1 },
    { id: 2, name: "Retro Phone", price: 50, qty: 2 },
    { id: 3, name: "Vintage Car", price: 150, qty: 1 },
  ]);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <Container className="py-5">
      <h2
        className="mb-4 text-center"
        style={{ color: "tomato", fontWeight: "bold" }}
      >
        🛍️ Dusty Bazaar - Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <h4 className="text-center text-muted">Your cart is empty</h4>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>Product</th>
                <th style={{ textAlign: "center" }}>Price ($)</th>
                <th style={{ textAlign: "center" }}>Quantity</th>
                <th style={{ textAlign: "center" }}>Total</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: "500" }}>{item.name}</td>
                  <td style={{ textAlign: "center" }}>{item.price}</td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </Button>
                    <span className="px-3">{item.qty}</span>
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </Button>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    ${item.price * item.qty}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                      style={{
                        backgroundColor: "tomato",
                        border: "none",
                        color: "white",
                      }}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row className="mt-4">
            <Col className="text-end">
              <h4>
                Total:{" "}
                <span style={{ color: "tomato", fontWeight: "bold" }}>
                  ${totalPrice}
                </span>
              </h4>
         <Link to="/Checkout">
           <Button
             size="lg"
             className="mt-3"
             style={{
               backgroundColor: "tomato",
               border: "none",
               color: "white",
               fontWeight: "bold",
             }}
           >
             Proceed to Checkout
           </Button>
         </Link>
       </Col>
     </Row>
   </>
 )}
</Container>
);
}

        