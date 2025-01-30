import React from "react";

function ShipCard({ name, model }) {
  return (
    <div className="text-gray-400 text-start rounded-lg bg-neutral-900 p-6 min-w-full md:min-w-3xl hover:bg-neutral-950 transition duration-300">
      <h2 className="text-xl font-semibold uppercase">{name}</h2>
      <p className="text-sm text-gray-500">{model}</p>
    </div>
  );
}
export default ShipCard;
