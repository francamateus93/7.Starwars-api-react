import { Link } from "react-router-dom";
import Logo from "../assets/logo_stacked_2x-52b4f6d33087.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Navbar() {
  return (
    <section className="bg-black">
      <div className="flex items-center justify-between p-4 mx-6">
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="https://www.instagram.com/starwars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://x.com/starwars?mx=2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
          <a
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6 text-neutral-300 hover:text-white transition" />
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo StarWars" className="w-52 p-2" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="uppercase text-neutral-200 focus:text-white hover:text-white duration-100">
            Log In
          </button>
          <p className="text-neutral-500">//</p>
          <button className="uppercase text-neutral-200 focus:text-white hover:text-white duration-100">
            Sign Up
          </button>
        </div>
      </div>
      <div className="border-y-1 border-y-white/10 flex items-center justify-center mb-4">
        <Link
          to="/"
          className="font-medium text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 focus:text-white hover:text-white duration-100 focus:border-b-2 focus:border-b-yellow-400"
        >
          Home
        </Link>
        <Link
          to="/starships"
          className="font-medium text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 focus:text-white hover:text-white duration-100 focus:border-b-2 focus:border-b-yellow-400 focus:border-b-shadow"
        >
          Starships
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
