import React from "react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs p-4 md:text-base border-b border-b-white/50 rounded-lg cursor-pointer uppercase text-center text-neutral-300 font-medium hover:text-white hover:border-b-white transition"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
