import React, { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h1 style={{textAlign: "center", marginTop: "200px"}}>Loading. . .</h1>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;