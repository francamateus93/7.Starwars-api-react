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

  const shipImage = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  if (loading) return <p>Loading details...</p>;
  if (!ship) return <p className="text-white">Ship not found</p>;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col gap-4 items-center p-6">
      <div className="border-y w-full mb-4 p-4">
        <h1 className="text-3xl text-start tracking-tight font-bold uppercase">
          Starships
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={shipImage}
          alt={ship.name}
          className="w-96 h-auto rounded-lg shadow-lg"
        />
        <div className="bg-neutral-900 p-6 tracking-tight rounded w-full max-w-lg text-gray-400">
          <h1 className="text-3xl font-semibold uppercase pb-2 mb-4">
            {ship.name}
          </h1>
          <p className=" mb-6">
            {ship.description ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 font-medium">
              <p>
                Model: <p className="font-normal">{ship.model}</p>
              </p>
              <p>
                Manufacturer: <p className="font-normal">{ship.manufacturer}</p>
              </p>
              <p>
                Cost in credits:{" "}
                <p className="font-normal">{ship.cost_in_credits}</p>
              </p>
            </div>
            <div className="flex flex-col gap-2 font-medium">
              <p>
                Length: <p className="font-normal">{ship.length}</p>
              </p>
              <p>
                Atmospheric Speed:{" "}
                <p className="font-normal">{ship.max_atmosphering_speed}</p>
              </p>
              <p>
                Crew: <p className="font-normal">{ship.crew}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipDetails;
