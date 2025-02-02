import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 md:mt-6 cursor-pointer px-10 md:px-12 py-3 text-black font-medium uppercase bg-yellow-300 hover:bg-yellow-500 transition rounded-full"
    >
      {children}
    </button>
  );
}

export default Button;
