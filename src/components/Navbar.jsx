import { Link } from "react-router-dom";
import Logo from "../assets/logo_stacked_2x-52b4f6d33087.png";

function Navbar() {
  return (
    <section>
      <div className="flex items-center justify-between p-4">
        <div className="flex-1 flex justify-center ml-36">
          <img src={Logo} alt="Logo StarWars" className="w-60 p-2" />
        </div>
        <div className="flex items-center gap-4 ">
          <button className="uppercase text-neutral-400 focus:text-white hover:text-white duration-100">
            Log In
          </button>
          <p className="text-neutral-500">//</p>
          <button className="uppercase text-neutral-400 focus:text-white hover:text-white duration-100">
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-black text-white border-y-1 border-y-white/10 flex items-center justify-center mb-4">
        <Link
          to="/"
          className="text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 focus:text-white hover:text-white duration-100
          focus:border-b-2 focus:border-b-yellow-400"
        >
          Home
        </Link>
        <Link
          to="/starships"
          className="text-lg tracking-tight uppercase p-4 px-8 transition text-neutral-400 focus:text-white hover:text-white duration-100 focus:border-b-2 focus:border-b-yellow-400 focus:border-b-shadow"
        >
          Starships
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
