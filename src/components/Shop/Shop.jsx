import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [cartProducts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { totalProducts } = useLoaderData(); // now total products: 76

  // const itemsPerPage = 10; // TODO make it dynamic
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  // console.log(totalPages);

  // const pageNumbers = [];
  // for (let i = 0; i < +totalPages; i++) {
  //   pageNumbers.push(i);
  //   console.log(pageNumbers);
  // }

  const pageNumbers = [...Array(totalPages).keys()];
  console.log(pageNumbers);

  // Done 1: Determine the total number of item
  // TODO 2: Decide of the number of item per page
  // Done 2: Calculate the total number of pages

  // useEffect(() => {
  //   fetch("https://amazon-poor-server.vercel.app/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://amazon-poor-server.vercel.app/products?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    fetch(`https://amazon-poor-server.vercel.app/productsById`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((cartProducts) => {
        const savedCart = [];
        // step: 1, get id from cart
        for (const id in storedCart) {
          // step: 2, get the product by using id
          const addedProduct = cartProducts.find(
            (product) => product._id === id
          );
          if (addedProduct) {
            // get the quantity from product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;

            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

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

  const options = [5, 10, 20];
  function handleSelectChange(e) {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  }
  return (
    <>
      <div className="shop-container">
        <div className="products-container">
          {cartProducts.map((product) => (
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
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            onClick={() => setCurrentPage(pageNumber)}
            key={pageNumber}
            className={currentPage === pageNumber ? "selected" : ""}
          >
            {pageNumber + 1}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
