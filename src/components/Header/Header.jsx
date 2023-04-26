import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { toast } from "react-toastify";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {
      toast.success("User logout successfully")
    })
    .catch(error => {
      console.error(error.message);
      toast.error(error.message)
    })
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link className="a" to="/">Shop</Link>
        <Link className="a" to="/orders">Order Review</Link>
        <Link className="a" to="/inventory">Manage Inventory</Link>
        <Link className="a" to="/login">Login</Link>
        <Link className="a" to="/singup">Sing up</Link>
        {
          user && <button onClick={handleLogOut}>Log out</button>
        }
      </div>
    </nav>
  );
};

export default Header;