// import { useState } from 'react'
import NavBar from './Utility/Navbar/Navbar'
import Catagory from './Utility/Catagory'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Homepage from './pages/Home/Homepage';
import { Routes,Route } from "react-router-dom"
import Footer from './Utility/Footer';
import About from './pages/About/About'
import React, { useState, useEffect } from "react";
import Profile from './pages/Profile/Profile';
import sandclock from './assets/sandclock.gif'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from './pages/Cart/Cart';
import Contactus from  "./pages/Contactus/Contactus.jsx"
import './App.css'
import Checkout from './pages/Checkout/Checkout.jsx';     
import SellItem from './pages/SellItem/SellItem.jsx';
 

// import './App.css'


function App() {
 


  const [loading, setLoading] = useState(true);
 
  // Simulate page load or data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // after 2 seconds, hide spinner
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="my-scroll "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
 
        <img style={{height:'8rem',width:'8rem'}} src={sandclock} />
      </div>
    );
  }



  return (
    <>
      <div style={{minHeight:'100vh', width:'100%', backgroundColor:'whitesmoke', display:'flex', flexDirection:'column'}} >
        <NavBar    />
<div
        style={{
          display: "flex",
          /* or any color */
          paddingLeft: "1rem",
          paddingRight: "1rem",
          overflowX: "auto",
          backgroundColor: " rgb(32, 56, 56)",
          justifyContent: "center",

          flexWrap: "nowrap",
        }}
      >
        <Catagory />
      </div>
        <Routes style={{ backgroundColor:'whitesmoke',  }}>
          <Route path="/" element={<Homepage   />} />
           <Route path="/About" element={<About   />} />
           <Route path="/Contactus" element={<Contactus   />} />
           <Route path="/Cart" element={<Cart />} />
           <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/SellItem" element={<SellItem />} />
        </Routes>
      </div>     
      <Footer/>
      <div>
  
      </div>
   
    </>
  )
}

export default App
