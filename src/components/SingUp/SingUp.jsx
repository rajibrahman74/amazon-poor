import React, { useContext } from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProviders";
import google from "../../images/google.png";

const SingUp = () => {

  const {createUser} = useContext(AuthContext);

  const handleSingUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password validation regex pattern
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    createUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      toast.success("User create successfully")
      form.reset();
    })
    .catch(error => {
      console.error(error.message);
      toast.error(error.message)
    })
  };

  return (
    <div className="form-container form-contaner-singup">
      <ToastContainer></ToastContainer>
      <h2 className="form-title">Sing Up</h2>
      <form onSubmit={handleSingUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
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
            src={google}
            alt=""
          />
          <span>Continue with Google</span>
        </div>
      </form>
    </div>
  );
};

export default SingUp;