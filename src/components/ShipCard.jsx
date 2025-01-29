import React from "react";

function ShipCard({ name, model }) {
  return (
    <div className="text-gray-400 text-start rounded-lg bg-zinc-900 p-4">
      <h2 className="text-xl font-semibold uppercase">{name}</h2>
      <p className="text-sm text-gray-500">{model}</p>
    </div>
  );
}
export default ShipCard;
