import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRouter = ({ children }) => {
  // Check if the user is authenticated, e.g., check localStorage or context
  const isAuthenticated = sessionStorage.getItem("authToken"); // Or use context or redux state for this

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/private-login-boyka-fulla" />;
  }

  // If authenticated, render the children (the protected route)
  return children;
};

export default ProtectRouter;
