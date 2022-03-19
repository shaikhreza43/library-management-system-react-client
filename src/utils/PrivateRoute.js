import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  return localStorage.getItem("session") ? children : <Navigate to="/auth" />;
};
