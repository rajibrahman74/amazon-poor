import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../images/google.png";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("User login successfully");
        form.reset();
        navigate(from,  {replace: true});
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="form-container">
      <ToastContainer />
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
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
          <img src={google} alt="" />
          <span>Continue with Google</span>
        </div>
      </form>
    </div>
  );
};

export default Login;