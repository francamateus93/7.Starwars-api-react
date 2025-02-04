import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
