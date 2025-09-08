import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css' ;
import fan from '../../assets/fan.gif';

// import oldTV from '../../assets/oldTV.jpeg';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'; 
export default function RoundProduct({product}) {  
  return (
    <div  style={{display:' flex',  flexDirection:'column', alignItems:'center',gap:'.1rem' ,height:'9rem', width:'8rem', backgroundColor:'  ', borderRadius:' ', padding:'.5rem',   cursor: 'pointer', }}>

 <Image src={product.img||fan} alt={product.img}style={{borderRadius:'50%' ,width:"6rem", height:"6rem" , objectFit: 'cover',backgroundColor:product.img ? 'transparent' : 'lightgray'}} />
         <div style={{ textAlign: ' center',  display:'flex' ,flexDirection:'wrap'}}>{product.title}</div>
 

    </div>
  )
}
