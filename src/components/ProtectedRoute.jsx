import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if a token exists in localStorage or sessionStorage
  const token = localStorage.getItem("authToken");

  // If no token, redirect to the login page
  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  // If token exists, render the children (protected component)
  return children;
};

export default ProtectedRoute;
