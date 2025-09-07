import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import basket from '../../assets/basket.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import LoginModal from '../../Components/Login/Login-modal';
import NavbarSearch from './Nav-bar-search';
import Register from '../../Components/Register/Register';
import Login from '../../Components/Login/Login';
 

export default function NavBar({productBox}) {

      const [show, setShow] = useState(false);
      const [title, setTitle] = useState(' ');
      const [formType, setFormType] = useState( 'Login');

  const handleClose = () => setShow(false);
      const handleShow = () => {setShow(true); 
        setTitle('Create a new account');
         setFormType('register');};
      const handleShowLogin = () => {setShow(true); setTitle('Signin to your account');
         setFormType('login');};

  return (
    <div className='  '>
     <Navbar style={{paddingRight:'2rem' ,paddingLeft:'2rem'}} expand="lg" className="bg-black" variant="dark " >
      
        <Navbar.Brand href="/"  style={{ marginLeft:' ' }} className=" ">Dusty Bazaar</Navbar.Brand>
      <div style={{cursor:'pointer'}} >

</div>        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contactus">Contact</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>


 
            
          </Nav> 
          <NavbarSearch productBox={productBox} />
 
      <div style={{display:'flex', gap:'.4rem', alignItems:'left', marginLeft:'2rem'}}>
    <Link to='' style={{textDecoration:'none',color:'tomato'}}  onClick={handleShowLogin}  >Login</Link>
    <div style={{ color:'white', }}>/</div>
   <Link to='' onClick={handleShow} style={{textDecoration:'none',color:'white',marginRight:'1rem'}}>Register</Link>
      <Modal show={show}  onHide={handleClose} className='pt-5' centered>
        <Modal.Header closeButton>
          <Modal.Title> {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <Register/> */}
    {formType === 'register' && <Register Login={handleShowLogin} />}
    {formType === 'login' && <Login Register={handleShow} />}
        </Modal.Body>
      </Modal>


        </div>    
        <Link to='/Cart'>
<img src={basket} className='w-10  h-10' alt="Basket Icon" />

        </Link>
 </Navbar.Collapse>

      

    </Navbar>
    </div>
  )
}
