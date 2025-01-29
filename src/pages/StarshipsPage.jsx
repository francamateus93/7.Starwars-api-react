import React, { useState, useEffect } from "react";
import fetchShips from "../api/ShipsApi";
import ShipCard from "../components/ShipCard";
import { Link } from "react-router-dom";

function StarshipsPage() {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Ships
  useEffect(() => {
    const gettingShips = async () => {
      try {
        const data = await fetchShips(1);
        setShips(data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    gettingShips();
  }, []);

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
