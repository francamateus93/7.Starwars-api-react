import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Authentication/AuthContext";
import AuthModal from "../AuthModal";
import PrimaryButton from "../buttons/PrimaryButton";
import Logo from "/src/assets/logo_stacked_2x-52b4f6d33087.png";
import IconImg from "/public/Starwars-Darth-Vader.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Navigation from "./Navigation";

const Navbar = () => {
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
              <PrimaryButton
                onClick={() => {
                  // console.log("Opening login modal");
                  setModalType("login");
                }}
              >
                Log In
              </PrimaryButton>
              <span className="text-sm text-gray-600">//</span>
              <PrimaryButton
                onClick={() => {
                  // console.log("Opening signup modal");
                  setModalType("signup");
                }}
              >
                Sign Up
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
      {modalType && (
        <AuthModal
          type={modalType}
          onClose={() => setModalType(null)}
          onToggle={() =>
            setModalType(modalType === "login" ? "signup" : "login")
          }
        />
      )}

      {/* NAVIGATION */}
      <Navigation />
    </section>
  );
};

export default Navbar;
