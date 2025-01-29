import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchShipDetails from "../api/ShipsDetailsApi";

const ShipDetails = () => {
  const { id } = useParams();
  const [ship, setShip] = useState();
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    const getShipDetails = async () => {
      try {
        const data = await fetchShipDetails(id);
        setShip(data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    getShipDetails();
  }, [id]);

  if (loading) return <p>Carregando detalhes da nave...</p>;

  return (
    <div className="flex gap-8 items-center justify-center h-screen">
      <h1>{ship.name}</h1>
      <p>Model: {ship.model}</p>
      <p>Manufacturer: {ship.manufacturer}</p>
      <p>Cost in credit: {ship.cost_in_credits}</p>
      <p>Lenght: {ship.length}</p>
      <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
      <p>Crew: {ship.crew}</p>
    </div>
  );
};

export default ShipDetails;
