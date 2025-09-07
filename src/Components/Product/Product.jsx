import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import AddtoCart from "./AddtoCart";
import "./Product.css";
import placeholder from "../../assets/fan.gif";
import QuantitySelector from "./QuantitySelector";
import ProductDetails from "./ProductDetails";
 import styled from 'styled-components' 
import {Container} from "react-bootstrap"; 
import ButtonGroup from "react-bootstrap/ButtonGroup";
 
// import * as motion from "motion/react-client";


function Product({ product }) {


  
  const ProductBox= styled.div` `
  
  
  const [isInWishlist, setIsInWishlist] = useState(false);
 const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const isInCart = quantity > 0;
  const handleWishlistClick = () => {
    setIsInWishlist((prev) => !prev);
  };

  const handleCartClick = () => {
    // setIsInCart((prev) => !prev);
    if (isInCart) {
      setQuantity(0);
    } else {
      setQuantity(1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
   <div>
<Container className="product-card-container w-100">
  <Card  style={{ border: isInCart ? "2px solid green" : "none"  ,width: "100%",height:'100%'}}  whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }} className="product-card">
      <Card.Img onClick={() => setShowDetails(true)} style={{cursor:'pointer'}} className={`product-img ${!product.img ? "placeholder" : ""} detail`} variant="top" src={product.img|| placeholder} />
    
    {/* <div className="overlay-text">click for more details</div>
     */}
      <Card.Body>
        <Card.Text className="product-text">{product.cardtext}</Card.Text>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <QuantitySelector
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            quantity={quantity}
          />
          <AddtoCart
            isInWishlist={isInWishlist}
            isInCart={isInCart}
            handleWishlistClick={handleWishlistClick}
            handleCartClick={handleCartClick}
          />
        </div>

        <Card.Title style={{ marginTop: "1rem" }}>
          {product.price} SR
        </Card.Title>
      </Card.Body>
    </Card>
</Container>
      <ProductDetails
        show={showDetails}            
        onClose={() => setShowDetails(false)}  
        product={product}              
      />
   </div> 
  );
}

export default Product;
