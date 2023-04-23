import React from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="form-container form-contaner-singup">
      <h2 className="form-title">Sing Up</h2>
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
      <div className="form-control">
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm your password"
        />
      </div>
      <span>
        <input className="login-button" type="submit" value="Sign Up" />
      </span>
      <div className="toggle">
        Already have an account?
        <Link className="link" to="/login">
          Login
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

export default SingUp;
