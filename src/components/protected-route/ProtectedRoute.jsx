import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user, children, setModalType, setShowModal }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setModalType("login");
      setShowModal(true);
      navigate("/");
    }
  }, [user, setModalType, setShowModal]);

  return user ? children : null;
};

export default ProtectedRoute;
