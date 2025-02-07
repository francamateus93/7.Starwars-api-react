import React, { useState, useEffect } from "react";

const Resource = ({ resourceUrls, title, getImageUrl, resourceKey }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await Promise.all(
          resourceUrls.map((url) => fetch(url).then((res) => res.json()))
        );
        setResources(data);
      } catch (error) {
        console.error(`Error fetching ${title.toLowerCase()}:`, error);
      }
    };

    if (resourceUrls.length) {
      fetchResources();
    }
  }, [resourceUrls]);

  return (
    <div className="text-gray-200 flex flex-col items-center p-5 md:p-10">
      <div className="border-y border-y-white/25 w-full mb-8 px-4 py-5">
        <h1 className="text-2xl md:text-3xl text-center tracking-tight font-medium uppercase">
          {title}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10">
        {resources.map((resource) => (
          <div
            key={resource[resourceKey]}
            className="bg-neutral-900 rounded-lg pb-4 shadow-lg"
          >
            <img
              src={getImageUrl(resource)}
              alt={resource[resourceKey]}
              className="w-40 h-60 md:w-48 md:h-84 object-cover rounded-lg"
            />
            <h3 className="w-40 text-center px-2 py-4 font-semibold">
              {resource[resourceKey]}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
