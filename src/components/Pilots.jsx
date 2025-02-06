import React, { useState, useEffect } from "react";

const Pilots = ({ pilotsUrl }) => {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    const fetchPilots = async () => {
      try {
        const pilotsData = await Promise.all(
          pilotsUrl.map((url) => fetch(url).then((res) => res.json()))
        );
        setPilots(pilotsData);
      } catch (error) {
        console.error("Error fetching pilots: ", error);
      }
    };

    if (pilotsUrl.length) {
      fetchPilots();
    }
  }, [pilotsUrl]);

  return (
    <div className="text-white min-h-screen flex flex-col gap-2 items-center p-10">
      <div className="border-y border-y-white/25 w-full mb-8 px-8 py-5">
        <h1 className="text-3xl text-start tracking-tight font-medium uppercase">
          Pilots
        </h1>
      </div>
      <div className="flex gap-4">
        {pilots.map((pilot) => (
          <div key={pilot.name} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${
                pilot.url.match(/(\d+)/)[0]
              }.jpg`}
              alt={pilot.name}
              className="w-32 h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold">{pilot.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pilots;
