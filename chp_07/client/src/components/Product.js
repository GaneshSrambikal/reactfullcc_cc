import React from "react";
import "../styles.css";
function Product(props) {
  return (
    <div className="content">
      <ul>
        <li key={props.product.id}><h5>Product Name : {props.product.name}</h5></li>
        <li
          style={{
            display: props.product.price ? "block" : "none",
            color: "red"
          }}
        >
          Price :{props.product.price}
        </li>
        <li
          style={{
            display: props.product.descrp ? "block" : "none",
            color: "white"
          }}
        >
          Descrp : {props.product.descrp}
        </li>
      </ul>
    </div>
  );
}

export default Product;
