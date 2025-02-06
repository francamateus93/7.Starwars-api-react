import React from "react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer md:mt-4 uppercase text-center text-neutral-300 font-medium hover:text-white transition"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
