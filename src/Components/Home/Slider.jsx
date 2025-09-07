import React from "react";
import Carousel from "react-bootstrap/Carousel";
import crousel1 from "../../assets/crousel1.jpeg";
import crousel2 from "../../assets/crousel2.jpeg";
import crousel3 from "../../assets/crousel3.jpeg";
import { Link } from "react-router-dom";
import "./crousel.css";
import Button from 'react-bootstrap/Button';
function Crousel1() {
  return (
    <div style={{ backgroundColor: " black ", width: "100%", height: "20rem" }}>
      <img
        className=" w-100   "
        style={{
          objectFit: "cover",
          height: "20rem",
          width: "100%",
          borderRadius: "1rem",
        }}
        src={crousel1}
        alt="First slide"
      />
    </div>
  );
}

function Crousel2() {
  return (
    <div>
      <img
        className="d-block w-100   "
        style={{
          objectFit: "cover",
          height: "20rem",
          width: "100%",
          borderRadius: "1rem",
        }}
        src={crousel2}
        alt="First slide"
      />
    </div>
  );
}

function Crousel3() {
  return (
    <div>
      <img
        className="d-block w-100   "
        style={{
          objectFit: "cover",
          height: "20rem",
          width: "100%",
          borderRadius: "1rem",
        }}
        src={crousel3}
        alt="First slide"
      />
    </div>
  );
}

export default function Slider() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Carousel
        style={{ backgroundColor: "   ", height: "20rem", width: "100%" }}
      >
        <Carousel.Item>
          <Crousel1 text="First slide" />
          <Carousel.Caption>
            <h3 className="crouselFont">
              {" "}
              “Vintage,Rusty, Weird — We Sell It All”
            </h3>
            {/* <p className="crouselFont"> Click here to Shop Now</p> */}
            <Link to=' '>
              <Button type="button" style={{ backgroundColor: "tomato", border: "none" }}>Click here to Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Crousel2 text="Second slide" />

          <Carousel.Caption>
            <h3 className="crouselFont"> sell something?</h3>
           <Link to='/SellItem'>
           <Button type="button"  style={{backgroundColor: "tomato", border: "none"}}>Get in touch with us!</Button>

           </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Crousel3 text="Third slide" />
          <Carousel.Caption>
            <h3 className="crouselFont"> Discover the books section</h3>
            <p className="crouselFont">
              Explore our collection of pre-loved books and give them a new
              home!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
