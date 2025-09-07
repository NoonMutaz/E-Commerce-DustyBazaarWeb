import React from 'react'
import Form from 'react-bootstrap/Form';
 import { useState } from 'react';
import { products } from "../../data/Round-product-data";
export default function NavbarSearch( ) {

const [searchTerm, setSearchTerm] = useState("");
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
const filteredItems = products.filter(
  (item) =>
    item.id.toString().includes(searchTerm) || item.title.toLowerCase().includes(searchTerm.toLowerCase())

);


  return (
    <div className="d-flex  flex-grow-1 w-100">
 <Form className="d-flex  flex-grow-1 w-100" >
            <Form.Control
         value={searchTerm}
        onChange={handleSearch}
              placeholder="Search"
              className="  flex-grow-1 "
             style={{alignContent:'center', borderRadius:'2rem',marginLeft:'1rem'}}
              aria-label="Search"
            />

          </Form>  
{ searchTerm && 
<ul style={{position:'absolute', marginTop:'3rem', backgroundColor:'white', zIndex:'100', width:'20%', borderRadius:'0.5rem', padding:'1rem', maxHeight:'200px', overflowY:'auto',listStyleType:'none'}}>
    { (filteredItems.length > 0) ? (
          filteredItems.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))) : (
        <li>No results found</li>
      )}
    </ul>}
    </div>
  )
}
