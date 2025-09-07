import React from 'react'
import addtocart from "../../assets/add-to-cart.png";
import check from "../../assets/check-out.png";
import "./Product.css";
import heart from "../../assets/heart.png";
import redheart from "../../assets/redheart.png";

export default function AddtoCart({ isInWishlist, isInCart, handleWishlistClick, handleCartClick }) {

  
  return (
    <div className='d-flex ' > 
       <img style={{marginLeft:"2rem"}}
        className="icon-btn  "
        alt="Wishlist"
        onClick={handleWishlistClick}
        src={isInWishlist ? redheart : heart}
      />
      <img
        className="icon-btn"
        alt="Cart"
        onClick={() => handleCartClick( )}
        src={isInCart ? check : addtocart}
      /> 
    </div>
  )
}
