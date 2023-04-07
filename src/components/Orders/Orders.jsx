import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
    const products = useLoaderData();

  return (
    <div className="shop-container">
      <div>
        <h1>This is orders page {products.length}</h1>
      </div>
      <div className="cart-container">
        <Cart cart={[]}/>
      </div>
    </div>
  );
};

export default Orders;