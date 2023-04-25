import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const {logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/singup">Sing up</Link>
        {
          logOut && <button onClick={handleLogOut}>Logout</button>
        }
      </div>
    </nav>
  );
};

export default Header;