import React, { useState, useEffect } from "react";
import { useAuth } from "../context/Authentication/AuthContext";
import Button from "./buttons/SecondaryButton";
import IconImg from "../../public/Starwars-Darth-Vader.png";
import { useLocation, useNavigate } from "react-router-dom";

const AuthModal = ({ type, onClose, user, onToggle }) => {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      onClose();
      navigate(location.state?.from?.pathname || "/"), { replace: true };
    }
  }, [user, onClose, location, navigate]);

  const handleModal = async (e) => {
    e.preventDefault();
    try {
      if (type === "login") {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-neutral-900 text-white p-10 rounded-lg w-96 h-96 shadow-2xl relative flex flex-col justify-center">
        <button
          className="absolute top-2 right-2 p-2 text-white"
          onClick={onClose}
        >
          ✖
        </button>
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src={IconImg} alt="IconStar Wars" className="w-6" />
            <h2 className="text-white font-bold tracking-tighter text-2xl">
              {type === "login" ? "Log In" : "Sign Up"}
            </h2>
          </div>

          {error && (
            <p className="text-red-600 font-semibold tracking-tight">{error}</p>
          )}

          <form onSubmit={handleModal} className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="p-3 mb-4 text-sm bg-white/20 rounded-lg text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 mb-4 text-sm bg-white/20 rounded-lg text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>{type === "login" ? "Log In" : "Sign Up"}</Button>
          </form>
        </div>
        <div>
          <p className="text-white text-sm text-center m-5">
            {type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <button
              onClick={() => {
                setError(null);
                onToggle();
              }}
              className="text-yellow-400 ml-1"
            >
              {type === "login" ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
