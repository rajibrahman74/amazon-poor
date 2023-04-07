import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
    const cart = useLoaderData();

  return (
    <div className="shop-container">
      <div>
        <h1>This is orders page {cart.length}</h1>
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Orders;