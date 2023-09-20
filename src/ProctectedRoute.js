import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProctectedRoute = ({ children }) => {
  const isLogged = useSelector((state)=>state.login)

  if (!isLogged.isLogin) return <Navigate to="/login" replace />;

  return children;
};

export default ProctectedRoute;
