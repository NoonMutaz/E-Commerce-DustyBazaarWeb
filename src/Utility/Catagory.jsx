import React from "react";
import "../App.css";

function CatagoryButton({ text }) {
  return (
    <div
      style={{
        height: "",
        width: " ",
        backgroundColor: " ",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "white",
        fontWeight: "600",
        fontSize: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
    >
      {text}
    </div>
  );
}

export default function Catagory() {
  const categories = [
    "Free",
    "Cars",
    "Discount",
    "Cloth",
    "Books",
    "Electronics",
    "Art",
    "Random",
    "Decor",
    "Collectable",
    "Furniture",
    "Jewellery",
  ];

  return (
    <div
      className="w-100  p-1    "
     
         style={{
            display: "flex",
            /* or any color */
             
            gap: "2rem",
            width: "100%",
            overflowX: "auto",
            paddingTop: "1rem",
            justifyContent: "start",
            alignItems: "center",
            flexWrap: "nowrap",
        
          }}
    >
      {categories.map((category) => (
        <CatagoryButton key={category} text={category} />
      ))}
    </div>
  );
}
