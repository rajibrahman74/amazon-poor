import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart}) => {
  const { id, img, price, name, shipping, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-info">
        <h4>{name}</h4>
        <p>
          Price: <span>${price}</span>
        </p>
        <p>
          Shipping Charge: <span>${shipping}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart (id)}>
        <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" />
      </button>
    </div>
  );
};

export default ReviewItem;
