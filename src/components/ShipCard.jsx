import React from "react";

function ShipCard({ name, model }) {
  return (
    <div className="text-gray-400 text-start rounded-lg bg-gray-800 p-4">
      <h2 className="text-xl font-bold">Name {name}</h2>
      <p className="text-sm text-gray-300">Model {model}</p>
    </div>
  );
}
export default ShipCard;
