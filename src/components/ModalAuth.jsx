import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function ModalAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleModal = async (e) => {
    e.preventDefault();
    try {
      if (type === "login") {
        const SignInCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        const RegisterCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 p-6 rounded-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          X
        </button>
        <h2 className="text-white text-2xl mb-4">
          {type === "login" ? "Log In" : "Sign Up"}
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-500 p-2 rounded text-white font-bold">
            {type === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalAuth;
