import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="product">
      <img
        src={img}
        alt=""
        onError={(e) =>
          (e.target.src = img === "error" ? "fallback_image.jpg" : img)
        }
      />
      <div className="product-info">
        <h6>{name}</h6>
        <p className="price-name">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => addToCart(props.product)}>
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;