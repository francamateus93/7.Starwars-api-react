import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authentication/AuthContext";

const Navigation = ({ setModalType, setShowModal }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleNavigation = (path) => {
    if (!user && path === "/starships") {
      setModalType("login");
      setShowModal(true);
    } else {
      navigate(path);
      setActive(path);
    }
  };

  return (
    <div className="border-y-1 border-y-white/10 flex items-center justify-center mb-4">
      <button
        onClick={() => handleNavigation("/")}
        className={`font-medium text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 hover:text-white duration-100 ${
          active === "/" ? "text-white border-b-2 border-b-yellow-400" : ""
        }`}
      >
        Home
      </button>
      <button
        onClick={() => handleNavigation("/starships")}
        className={`font-medium text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 hover:text-white duration-100 ${
          active === "/starships"
            ? "text-white border-b-2 border-b-yellow-400"
            : ""
        }`}
      >
        Starships
      </button>
    </div>
  );
};

export default Navigation;
