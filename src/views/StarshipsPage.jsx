import React from "react";
import { useShips } from "../context/shipsContext";
import ShipCard from "../components/ShipCard";
import { Link } from "react-router-dom";

function StarshipsPage() {
  const { ships, loading } = useShips();

  if (loading) return <p>Loading...</p>;
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ships.map((ship) => (
          <Link to={`/starships/${ship.url.split("/")[5]}`}>
            <ShipCard key={ship.name} name={ship.name} model={ship.model} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StarshipsPage;
