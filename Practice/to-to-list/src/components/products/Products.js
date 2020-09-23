import React from "react";

function Products(props) {
  return (
    <div className="product-container">
      <p>Product Name: {props.products.name}</p>
      <p>Product Price: {props.products.price}</p>
      <p>Product Description: {props.products.description}</p>
    </div>
  );
}

export default Products;
