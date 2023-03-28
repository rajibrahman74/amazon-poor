import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p className="price-name">Price: {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => addToCart(props.product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
