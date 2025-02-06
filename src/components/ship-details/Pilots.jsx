import React from "react";
import Resource from "./Resource";

const Pilots = ({ pilotsUrl }) => {
  return (
    <Resource
      resourceUrls={pilotsUrl}
      title="Pilots"
      getImageUrl={(pilot) =>
        `https://starwars-visualguide.com/assets/img/characters/${
          pilot.url.match(/(\d+)/)[0]
        }.jpg`
      }
      resourceKey="name"
    />
  );
};
export default Pilots;
