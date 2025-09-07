// src/Components/Product/ProductDetails.jsx
import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import placeholder from "../../assets/fan.gif";

export default function ProductDetails({ show, onClose, product }) {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onClose} centered >
      <Modal.Header closeButton className="btn-close-white " style={{ backgroundColor: "black", color: "white" }}>
        <Modal.Title className="d-flex justify-content-between   w-100">
          {product.title || "Product Details"}
     <div>
          {/* <Button className="align-self-end mlr-3rem" variant="light" onClick={onClose}>
            X
          </Button> */}
        </div>   
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "white", color: "black" }}>
   <Image
          src={product.img || placeholder}
          alt={product.title}
          fluid
          rounded
          style={{ marginBottom: "1rem" }}
        />
        <p style={{ color: "black" }}>{product.cardtext}</p>
        <h5 style={{ color: "tomato" }}>{product.price} SR</h5>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "black" }}>
        {/* 
        <Button variant="danger">Add to Cart</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
