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
    <div className="text-gray-200 flex flex-col gap-2 items-center p-10">
      <div className="border-y border-y-white/25 w-full lg:w-6xl mb-8 px-8 py-5">
        <h1 className="text-3xl text-start tracking-tight font-medium uppercase">
          {title}
        </h1>
      </div>
      <div className="flex gap-10 pt-10 pb-10">
        {resources.map((resource) => (
          <div
            key={resource[resourceKey]}
            className="text-center bg-neutral-900 rounded-lg pb-4"
          >
            <img
              src={getImageUrl(resource)}
              alt={resource[resourceKey]}
              className="w-48 h-84 object-cover rounded-lg"
            />
            <h3 className="w-48 text-center px-2 py-4 font-semibold">
              {resource[resourceKey]}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
