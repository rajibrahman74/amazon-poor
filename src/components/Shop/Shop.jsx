import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step: 1, get id from cart
    for (const id in storedCart) {
      // step: 2, get the product by using id
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        // get the quantity from product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;

        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  // clear cart data in UI and local storage
  const handleClearCart = () => {
    // clear cart data in UI
    setCart([]);
    // clear cart data in localStorage
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders" className="link">
            <button className="btn-checkout-and-review">
              <span>Review Order</span>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
