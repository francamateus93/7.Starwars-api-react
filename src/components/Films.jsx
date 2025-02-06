import React, { useState, useEffect } from "react";

const Films = ({ filmsUrl }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const filmsData = await Promise.all(
          filmsUrl.map((url) => fetch(url).then((res) => res.json()))
        );
        setFilms(filmsData);
      } catch (error) {
        console.error("Error fetching films: ", error);
      }
    };

    if (filmsUrl.length) {
      fetchFilms();
    }
  }, [filmsUrl]);

  return (
    <div className="text-white min-h-screen flex flex-col gap-2 items-center p-10">
      <div className="border-y border-y-white/25 w-full mb-8 px-8 py-5">
        <h1 className="text-3xl text-start tracking-tight font-medium uppercase">
          Films
        </h1>
      </div>
      <div className="flex gap-4">
        {films.map((film) => (
          <div key={film.title} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
              alt={film.title}
              className="w-32 h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold">{film.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
