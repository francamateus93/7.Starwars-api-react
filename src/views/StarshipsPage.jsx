import React from "react";
import { useShips } from "../context/shipsContext";
import ShipCard from "../components/ShipCard";
import { Link } from "react-router-dom";

function StarshipsPage() {
  const { ships, loading, setPage, viewMore } = useShips();

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 mx-auto">
        {ships.map((ship) => (
          <Link to={`/starships/${ship.url.split("/")[5]}`}>
            <ShipCard key={ship.name} name={ship.name} model={ship.model} />
          </Link>
        ))}
      </div>
      {viewMore && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="my-4 uppercase text-center text-neutral-300 font-medium hover:text-white transition"
        >
          View More
        </button>
      )}
      {loading && (
        <p className="text-white font-medium uppercase text-center">
          Loading...
        </p>
      )}
    </div>
  );
}

export default StarshipsPage;
