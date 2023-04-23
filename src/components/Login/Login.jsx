import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <div className="form-control">
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="form-control">
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <span>
        <input className="login-button" type="submit" value="Login" />
      </span>
      <div className="toggle">
        New to Ema-john?
        <Link className="link" to="/singup">
          Create New Account
        </Link>
      </div>
      <div className="divider">
        <hr className="divider-line" />
        <span className="divider-text">or</span>
        <hr className="divider-line" />
      </div>
      <div className="continue-with-google">
        <img
          src="https://o.remove.bg/downloads/f4fb3b91-5af5-469e-aab1-b6b9481488fd/2008px-Google__G__Logo.svg-removebg-preview.png"
          alt=""
        />
        <span>Continue with Google</span>
      </div>
    </div>
  );
};


export default Login;
