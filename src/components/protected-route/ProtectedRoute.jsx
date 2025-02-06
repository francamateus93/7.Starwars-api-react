import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children, setModalType }) => {
  const location = useLocation();

  if (!user) {
    setModalType("login");
    return <Navigate to="/starships" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
