import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function AuthModal({ type, onClose, isOpen }) {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg relative">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-white text-2xl mb-4">
          {type === "login" ? "Log In" : "Sign Up"}
        </h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleModal} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="p-2 mb-2 rounded bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 mb-4 rounded bg-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded">
            {type === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
