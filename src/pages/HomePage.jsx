import React from "react";

function HomePage() {
  return (
    <div className="flex gap-8 items-center justify-center h-screen">
      <div className="flex flex-col p-4 mr-8">
        <h1 className="text-6xl font-extrabold mb-6">HOME</h1>
        <p className="text-xl text-center text-gray-400 mb-4">
          It appears that the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
