import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  console.log(product);
  const { id, img, price, name, shipping, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div>
        <div className="review-content">
          <h3>{name}</h3>
          <p>Price: {price}</p>
          <p>Shipping Charge: {shipping}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;