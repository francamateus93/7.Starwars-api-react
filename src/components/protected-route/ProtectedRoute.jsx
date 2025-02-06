import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children, setModalType }) => {
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      setModalType("login");
    }
  }, [user, setModalType]);

  if (!user) {
    return <Navigate to="/starships" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
