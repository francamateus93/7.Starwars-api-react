import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Button from "../components/buttons/SecondaryButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Pilots from "../components/ship-details/Pilots";
import Films from "../components/ship-details/Films";
import errorImage from "../assets/Starwars-visualguide-big-placeholder.jpg";

const ShipDetails = () => {
  const { id } = useParams();
  const shipUrl = `https://swapi.dev/api/starships/${id}/`;
  const { data: ship, loading, error } = useFetch(shipUrl);
  const shipImage = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  if (loading) return <p className="text-gray-400">Loading details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

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
        <h1 className="text-3xl text-center md:text-start tracking-tight font-medium uppercase">
          Starships
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center pt-10 md:pb-20 pb-8">
        <img
          src={shipImage}
          alt={ship.name}
          className="w-2xl md:w-96 h-auto rounded-lg shadow-lg"
          onError={(e) => (e.target.src = errorImage)}
        />
        <div className="bg-neutral-900/80 p-4 md:p-10 tracking-tight rounded-xl w-full max-w-2xl text-gray-200">
          <h1 className="text-3xl font-semibold uppercase pb-2 mb-4">
            {ship.name}
          </h1>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
                Speed:{" "}
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

      {ship.pilots?.length > 0 && <Pilots pilotsUrl={ship.pilots} />}
      {ship.films?.length > 0 && <Films filmsUrl={ship.films} />}

      <Link to="/starships" className="md:mt-8">
        <PrimaryButton>Back to Starships</PrimaryButton>
      </Link>
    </div>
  );
};

export default ShipDetails;
