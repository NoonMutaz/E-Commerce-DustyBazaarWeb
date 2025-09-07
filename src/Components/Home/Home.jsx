import React from "react";
import Slider from "./Slider";
import Catagory from "../../Utility/Catagory";
import RoundProduct from "./RoundProduct";
// import oldTV from "../../assets/oldTV.jpeg";
// import phoneOld from "../../assets/phoneOld.jpeg";
// import books from "../../assets/books.jpeg";
// import yellowCar from "../../assets/yellowCar.jpeg";
import Pagination from "react-bootstrap/Pagination";
import { products } from "../../data/Round-product-data";
import { useState } from "react";
import {ProductBox} from '../../data/Products-data'

import Product from "../Product/Product";
import "../../App.css";
import { Row, Col, Container } from "react-bootstrap";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;


  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = ProductBox.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(ProductBox.length / productsPerPage);
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        <div>{number}</div>
      </Pagination.Item>
    );
  }

  return (
    <div>
      
      <div>
        {/* 
    <Pagination size="sm"> </Pagination> */}
      </div>

      <div style={{ backgroundColor: "black" }}>
        <Slider />
      </div>
      <div className="my-scroll " style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            width: "96%",
            overflowX: "auto",
            paddingTop: "1rem",
            justifyContent: "start",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {products.map((product) => (
            <div key={product.id}>
              <RoundProduct product={product} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1
          style={{ textAlign: "left", marginTop: "2rem", marginLeft: "1rem" }}
        >
          Recomended for you
        </h1>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          {currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <Pagination size="md">{paginationItems}</Pagination>
        </div>
      </div>
    </div>
  );
}
