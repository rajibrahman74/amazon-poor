import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);

  // remove item from cart
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((pd) => pd._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  //  remove shopping cart from UI and localStorage
  const handleClearCart = () => {
    // clear cart data in Ui
    setCart([]);
    // clear cart data in localStorage
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout" className="link">
            <button className="btn-checkout-and-review">
              <span>Proceed Checkout</span>
              <FontAwesomeIcon icon={faCreditCard} className="icon" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
