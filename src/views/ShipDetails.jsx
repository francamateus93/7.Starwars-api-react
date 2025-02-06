import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/buttons/SecondaryButton";
import fetchShipDetails from "../api/ShipsDetailsApi";
import errorImage from "../assets/Starwars-visualguide-big-placeholder.jpg";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Pilots from "../components/ship-details/Pilots";
import Films from "../components/ship-details/Films";

const ShipDetails = () => {
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);
  const shipImage = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  useEffect(() => {
    const getShipDetails = async () => {
      try {
        const data = await fetchShipDetails(id);
        setShip((prevShip) => ({ ...prevShip, ...data }));
      } catch (error) {
        console.error("Error fetching ship details:", error);
      } finally {
        setLoading(false);
      }
    };

    getShipDetails();
  }, [id]);

  if (loading) return <p>Loading details...</p>;

  if (!ship) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-6xl font-bold mb-6 text-white tracking-tight">
          Ship not found
        </p>
        <Link to="/starships">
          <Button>Back to Starships</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="text-white min-h-screen flex flex-col gap-2 items-center p-10">
      <div className="border-y border-y-white/25 w-full mb-8 px-8 py-5">
        <h1 className="text-3xl text-start tracking-tight font-medium uppercase">
          Starships
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center pt-10 pb-20">
        <img
          src={shipImage}
          alt={ship.name}
          className="w-2xl md:w-96 h-auto rounded-lg shadow-lg"
          onError={(e) => (e.target.src = errorImage)}
        />
        <div className="bg-neutral-900/80 p-10 tracking-tight rounded-xl w-full max-w-2xl text-gray-200">
          <h1 className="text-3xl font-semibold uppercase pb-2 mb-4">
            {ship.name}
          </h1>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 font-bold">
              <p>
                Model: <span className="font-normal">{ship.model}</span>
              </p>
              <p>
                Manufacturer:{" "}
                <span className="font-normal">{ship.manufacturer}</span>
              </p>
              <p>
                Cost in credits:{" "}
                <span className="font-normal">{ship.cost_in_credits}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 font-bold">
              <p>
                Length: <span className="font-normal">{ship.length}</span>
              </p>
              <p>
                Atmospheric Speed:{" "}
                <span className="font-normal">
                  {ship.max_atmosphering_speed}
                </span>
              </p>
              <p>
                Crew: <span className="font-normal">{ship.crew}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {ship.pilots && ship.pilots.length > 0 ? (
        <Pilots pilotsUrl={ship.pilots} />
      ) : (
        ""
      )}
      {ship.films && ship.films.length > 0 ? (
        <Films filmsUrl={ship.films} />
      ) : (
        ""
      )}
      <Link to="/starships" className="md:mt-8">
        <PrimaryButton>Back to Starships</PrimaryButton>
      </Link>
    </div>
  );
};

export default ShipDetails;
