import React from "react";
import { useShips } from "../context/shipsContext";
import ShipCard from "../components/ShipCard";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";

const StarshipsPage = () => {
  const { ships, loading, setPage, viewMore } = useShips();

  return (
    <div className="grid grid-cols-1 gap-8 p-4 mb-8">
      <div className="grid grid-cols-1 gap-4 mx-auto">
        {ships.map((ship) => (
          <Link to={`/starships/${ship.url.split("/")[5]}`}>
            <ShipCard key={ship.name} name={ship.name} model={ship.model} />
          </Link>
        ))}
      </div>
      {viewMore && (
        <div className="flex justify-center">
          <PrimaryButton onClick={() => setPage((prev) => prev + 1)}>
            View More
          </PrimaryButton>
        </div>
      )}
      {loading && (
        <p className="text-white font-medium uppercase text-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default StarshipsPage;
