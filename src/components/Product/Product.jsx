import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p className="price-name">Price: {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
