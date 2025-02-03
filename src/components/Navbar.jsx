import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import Logo from "../assets/logo_stacked_2x-52b4f6d33087.png";
import IconImg from "../../public/Starwars-Darth-Vader.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Navbar() {
  const { user, logout } = useAuth();
  const [modalType, setModalType] = useState(null);

  return (
    <section className="bg-black">
      <div className="flex items-center justify-between p-4 mx-6">
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="https://www.instagram.com/starwars/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Instagram"
          >
            <Instagram className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://x.com/starwars?mx=2"
            target="_blank"
            rel="noopener noreferrer"
            alt="Twitter"
          >
            <Twitter className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699#"
            target="_blank"
            rel="noopener noreferrer"
            alt="Facebook"
          >
            <Facebook className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            rel="noopener noreferrer"
            alt="Youtube"
          >
            <Youtube className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          {/* LOGO */}
          <Link to="/">
            <img src={Logo} alt="Logo StarWars" className="w-52 p-2" />
          </Link>
        </div>

        {/* AUTH */}
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={IconImg}
                alt="Icon Star Wars"
                className="w-6 cursor-pointer"
              />
              <button
                onClick={logout}
                className="cursor-pointer tracking-tighter text-white uppercase hover:text-yellow-400 transition"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  // console.log("Opening login modal");
                  setModalType("login");
                }}
                className="cursor-pointer uppercase text-gray-300 hover:text-white hover:font-medium transition duration-200"
              >
                Log In
              </button>
              <span className="text-sm text-gray-600">//</span>
              <button
                onClick={() => {
                  // console.log("Opening signup modal");
                  setModalType("signup");
                }}
                className="cursor-pointer uppercase text-gray-300 hover:text-white hover:font-medium transition duration-200"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
      {modalType && (
        <AuthModal type={modalType} onClose={() => setModalType(null)} />
      )}

      {/* NAVIGATION */}
      <div className="border-y-1 border-y-white/10 flex items-center justify-center mb-4">
        <Link
          to="/"
          className="font-medium text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 focus:text-white hover:text-white duration-100 focus:border-b-2 focus:border-b-yellow-400"
        >
          Home
        </Link>
        <Link
          to="/starships"
          className="font-medium text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 focus:text-white hover:text-white duration-100 focus:border-b-2 focus:border-b-yellow-400"
        >
          Starships
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
