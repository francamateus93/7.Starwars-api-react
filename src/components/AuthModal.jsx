import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authentication/AuthContext";
import Button from "./buttons/SecondaryButton";
import Logo from "../assets/logo_stacked_2x-52b4f6d33087.png";

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
      navigate(location.state?.from?.pathname || "/starships", {
        replace: true,
      });
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
      if (error.message.includes("auth/wrong-password")) {
        setError("Incorrect password. Try again.");
      } else {
        setError("Please, check your details and try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-neutral-900 text-white p-10 rounded-lg w-96 h-fit shadow-2xl relative flex flex-col justify-center">
        <button
          className="absolute top-2 right-2 p-2 text-white"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <img src={Logo} alt="Logo Star Wars" className="w-32 p-2" />
            <h2 className="text-white uppercase tracking-tighter text-2xl">
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
              className="text-yellow-400 ml-1 cursor-pointer"
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
