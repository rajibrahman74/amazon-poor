import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { _id, img, price, name, shipping, quantity } = product;
  return (
    <div className="review-item">
      {/* <img src={img} alt="" /> */}
      <img
        src={img}
        alt=""
        onError={(e) =>
          (e.target.src = img === "error" ? "fallback_image.jpg" : img)
        }
      />
      <div className="review-info">
        <h4>{name}</h4>
        <p>
          Price: <span>${price}</span>
        </p>
        <p>
          Shipping Charge: <span>${shipping}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart(_id)}>
        <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" />
      </button>
    </div>
  );
};

export default ReviewItem;
