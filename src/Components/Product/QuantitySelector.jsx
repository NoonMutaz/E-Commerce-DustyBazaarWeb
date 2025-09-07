import React from 'react'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import './Product.css'

export default function QuantitySelector({ quantity, handleIncreaseQuantity, handleDecreaseQuantity }) {
  return (
    <div>
        <ButtonGroup className='buttons'>
        <Button  variant="danger" onClick={handleDecreaseQuantity}>-</Button>
        <Button variant="danger">{quantity}</Button>
        <Button variant="danger" onClick={handleIncreaseQuantity}>+</Button>
      </ButtonGroup>
    </div>
  )
}
