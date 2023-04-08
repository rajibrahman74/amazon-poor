import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);

  // remove item from cart
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter(pd => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };


  //  remove shopping cart from UI and localStorage
  const handleClearCart = () => {
    // clear cart data in Ui
    setCart([]);
    // clear cart data in localStorage
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
         />
      </div>
    </div>
  );
};

export default Orders;