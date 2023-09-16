import React from "react";
import { Navigate } from "react-router-dom";

const ProctectedRoute = ({ children }) => {
  const isLogged = JSON.parse(localStorage.getItem("loginauth"));

  if (!isLogged?.token) return <Navigate to="/login" replace />;

  return children;
};

export default ProctectedRoute;
