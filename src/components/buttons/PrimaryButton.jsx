import React from "react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs md:text-base cursor-pointer uppercase text-center text-neutral-300 font-medium hover:text-white transition"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
