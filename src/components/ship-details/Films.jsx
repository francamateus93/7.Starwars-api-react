import React from "react";
import Resource from "./Resource";

const Films = ({ filmsUrl }) => {
  return (
    <Resource
      resourceUrls={filmsUrl}
      title="Films"
      getImageUrl={(film) =>
        `https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`
      }
      resourceKey="title"
    />
  );
};

export default Films;
